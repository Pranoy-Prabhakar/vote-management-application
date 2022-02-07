<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex v-responsive__content justify-center text-justify align-center">
        <div class="display-1" test-data-id="title">Sir Vote-a-lot</div>
      </div>
    </v-app-bar>
    <v-main>
      <v-container  class="mt-7">
        <v-row class="text-center">
          <v-col cols="4">
            <CreatePoll @question="setQuestion" @options = "setOptions"></CreatePoll>
          </v-col>
          <v-col cols="4" v-if="options.length>1 && question!== '' && question!== undefined">
            <DisplayPoll :options="options" :question="question" :resetCounter="resetCounter" @resetCounterUpdate="updateResetCounter" @votereport="getVoteReportData"></DisplayPoll>
          </v-col>
          <v-col cols="4" v-if="reportData.length>1">
            <DisplayResult :chartData="reportData" :question="question"></DisplayResult>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

import CreatePoll from "./components/CreatePoll"
import DisplayPoll from "@/components/DisplayPoll"
import DisplayResult from "@/components/DisplayResult";
export default {
  name: 'App',

  components: {
    CreatePoll,
    DisplayPoll,
    DisplayResult
  },

  data: () => ({
    question: '',
    options: [],
    reportData:[],
    resetCounter: false,
  }),
  methods: {
    setOptions: function (value){
      this.options = value
      this.options = this.options.filter(x => x.option !== '')
      this.reportData=[]
      this.resetCounter = true
    },
    setQuestion: function (value){
      this.question = value
      this.reportData=[]
    },
    getVoteReportData: function(value){
      this.reportData = value
    },
    updateResetCounter: function (value){
      this.resetCounter = value
    }
  }
};
</script>
