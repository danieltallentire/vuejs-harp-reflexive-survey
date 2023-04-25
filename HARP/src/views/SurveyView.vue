<script setup lang="ts">
import { useSurveyStore } from '@/stores/survey';
import SurveyItem from '../components/SurveyItem.vue';
import SurveyResults from '../components/SurveyResults.vue';

var surveys = useSurveyStore();

function onSelected() 
{
    // result has been selected, move the questionairre.

    surveys.currentIndex = surveys.items.findIndex(x => typeof(x.agreement) == "undefined" || x.agreement == null);
    console.log("updated current index", surveys.currentIndex);

    if (surveys.currentIndex == -1) {
        // has finished - display results
    }

    console.log(surveys.items);
    
}

</script>

<template>
    <div>
        <section v-if="surveys.currentIndex > -1">
            <SurveyItem 
                v-for="(survey,index) in surveys.items" 
                v-bind:key="survey.id" 
                :index="index"
                @selected="onSelected"
                >

            </SurveyItem>
        </section>
        <section v-else>
            <SurveyResults>

            </SurveyResults>
            
        </section>
    </div>
</template>
