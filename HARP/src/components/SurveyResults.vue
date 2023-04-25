<script setup lang="ts">
import { useSurveyStore } from '@/stores/survey';
import RadarChart from './RadarChart.vue';

const surveys = useSurveyStore();
const labels = [... new Set(surveys.items.map( x => x.supports))]; 
const data :number[] = [];

labels.forEach(label => {
    data.push(sumFor(label));
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

        <div class="pure-u-1">
            <RadarChart :datasets="coreDataset" :labels="labels">
            </RadarChart>
        </div>

        <div v-for="dr in datasets" :key="dr.label" class="pure-u-1">
            <RadarChart :datasets="dr" :labels="elements"></RadarChart>
        </div>
        
    </div>
</template>

<style>
.charts {
    overflow-y: scroll;
    height: 95vh;
    width: 75vw;
}
</style>