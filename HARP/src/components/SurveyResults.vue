<script setup lang="ts">
import { useSurveyStore } from '@/stores/survey';
import RadarChart from './RadarChart.vue';

const surveys = useSurveyStore();
const labels = [... new Set(surveys.items.map( x => x.supports))]; 
const data :number[] = [];
const tableData: Record<string, number> = {};

labels.forEach(label => {
    let labelSum = sumFor(label);
    data.push(labelSum);
    tableData[label] = labelSum;
});

let coreDataset = [{label: "Overall Philosophy", data:data}];

function sumFor(supported: string): number
{
    return surveys.items.filter(x => x.supports == supported).reduce( (sum,element) => sum + element.agreement, 0)
}

let datasets: any[] = [];
let elements = [... new Set(surveys.items.map(x => x.element))];

labels.forEach(labelP => {
    var elementData: number[] = [];
    elements.forEach(el => {
        var item = surveys.items.filter(i => i.element == el && i.supports == labelP)[0];
        if (item) {            
            elementData.push(item.agreement);
        } else {
            console.log("Failed for ", labelP, " ", el);
        }
    });
    datasets.push([{label: labelP, data: elementData}])
});

</script>


<template>

    <div class="pure-u-1 charts">


        <p>
            Here are the charts that you can use to show your alignment with each research philosophy.
            A table of information is shown at the bottom.
            The range of results will be -18 to +18 in terms of alignment.

            You can right click a chart in the list to copy it into your other documents.
        </p>

        <div class="pure-u-1">
            <RadarChart :datasets="coreDataset" :labels="labels">
            </RadarChart>
        </div>

        <div v-for="dr in datasets" :key="dr.label" class="pure-u-1">
            <RadarChart :datasets="dr" :labels="elements"></RadarChart>
        </div>
        
        <div class="pure-u-1">
            <table class="pure-table">
                <thead>
                    <tr>
                        <th>Philosophy</th>
                        <th>Alignment</th>    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="d,l in tableData" :key="l" >
                        <td>
                            {{ l }}
                        </td>
                        <td>
                            {{ d }}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<style>
.charts {
    overflow-y: scroll;
    height: 95vh;
    width: 75vw;
    padding-top: 15vh;
}
</style>