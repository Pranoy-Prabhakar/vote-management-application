<template>
  <v-card light color="background" elevation="3" outlined shaped>
    <v-card-title class="justify-center" test-data-id="vote-question">{{question}}</v-card-title>

    <v-card-text class="px-5">
      <v-radio-group v-model="selectedValue">
        <v-radio
            v-for="(input, index) in options" :key="`option-${index}`" :label="input.option"
            :value="input.option" :test-data-id="`option-vote-${index}`"
        ></v-radio>
      </v-radio-group>
      <v-btn rounded
             color="primary"
             dark
             large
             v-show="flag"
             test-data-id="vote-button"
             @click=getAnswer>
        vote
      </v-btn>
      <span v-show="!flag">Please select an option to vote</span>
    </v-card-text>
  </v-card>
</template>


<script>
export default {
  name: "DisplayPoll",
  props: {
    options: {
      type: Array
    },
    question: String,
    resetCounter: Boolean,
  },
  data() {
    return{
      selectedValue: '',
      totalVotes:0,
      votedValues:[],
      votedMap:[],
      sampleData: [],
      counter:0,
      lastOptions:[],
      // flag: true,
    }
  },
  computed:{
    flag: function (){
        return this.selectedValue.length>0
      }
      },
  methods:{
    getAnswer: function(){
      if(this.resetCounter){
        this.totalVotes=0
      }
      if(this.totalVotes==0){
        this.votedValues=[]
        this.votedMap = []
        this.sampleData=[]
      }
      this.totalVotes++;
      this.votedValues.push(this.selectedValue)
      this.votedMap = this.votedValues.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});
      let tempVal = Object.entries(this.votedMap)
      this.sampleData = []
      this.sampleData.push(["options","vote"])
      tempVal.forEach(i=> this.sampleData.push(i))
      this.$emit("votereport",this.sampleData)
      this.$emit("resetCounterUpdate", false)
      this.selectedValue = ''
    },
    showButton: function(){
      console.log(this.selectedValue)
    }
  }
}
</script>