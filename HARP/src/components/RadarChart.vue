<template>
    <Radar
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script setup lang="ts">
    defineProps<{
  datasets: any[],
  labels: string[]
}>()
    </script>

  <script lang="ts">
  import { Radar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, RadialLinearScale, PointElement, Colors } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, RadialLinearScale, PointElement, Colors);
  
  export default {
    name: 'RadarChart',
    components: { Radar },
    data() {
      return {
        chartData: {
          labels: this.labels,
          datasets: this.datasets
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  </script>