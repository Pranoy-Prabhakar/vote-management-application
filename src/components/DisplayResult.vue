<template>
  <v-card light color="background" elevation="3" outlined shaped>
    <v-card-title class="justify-center" test-data-id="chart-title">{{chartOptions.chart.title}}</v-card-title>
    <v-card-subtitle test-data-id="chart-question"> {{question}}</v-card-subtitle>
    <v-card-text class="px-5">
      <GChart
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"
          test-data-id="vote-chart"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import {GChart} from "vue-google-charts"
export default {
  name: "DisplayResult",
  components: {
    GChart,
  },
  props: {
    chartData: {
      type: Array
    },
    question: String
  },
  data(){
    return{
      chartOptions: {
        chart: {
          title: "Vote Result",
          subtitle: "This sections tells about the vote"
        }
      },
    }
  }
}
</script>

<style scoped>

</style>