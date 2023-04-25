import type { Statement } from "@/models/statement";
import { defineStore } from "pinia";

interface State {
    items: Statement[],
    currentIndex: number,
    label: string,
}

export const useSurveyStore = defineStore(
{
    id: 'surveyStore',
    state: (): State => {
        return defaultState();
    },
    actions: {
        async initState(testMode: boolean) {
            const response = await fetch("data.json");
            const file = await response.json();
            this.$state.items = file.questions;
            this.$state.label = file.label;

            if (testMode)
            {
                for (let idx = 0; idx < this.$state.items.length - 1; idx++)
                {
                    this.$state.items[idx].agreement = 3;
                }

                this.$state.currentIndex = this.$state.items.length - 2;
            }
        }
    }
});

function defaultState() : State
{
    const state: State = {items: [], currentIndex: 0, label: "Survey"};
    return state;
}

async function defaultItems() : Promise<Statement[]>
{
    
    

    return file.questions;
}