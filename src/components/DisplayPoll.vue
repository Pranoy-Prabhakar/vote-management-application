<template>
  <v-card light color="background" elevation="3" outlined shaped>
    <v-card-title class="justify-center">{{question}}</v-card-title>

    <v-card-text class="px-5">
      <v-radio-group v-model="selectedValue">
        <v-radio
            v-for="(input, index) in options" :key="`option-${index}`" :label="input.option"
            :value="input.option"
        ></v-radio>
      </v-radio-group>
      <v-btn @click=getAnswer>
        vote
      </v-btn>
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
  },
  data() {
    return{
      selectedValue: '',
      totalVotes:0,
      votedValues:[],
      votedMap:[],
      sampleData: [],
    }
  },
  computed:{
      },
  methods:{
    getAnswer: function(){
      this.totalVotes++;
      this.votedValues.push(this.selectedValue)
        console.log(this.votedValues)
      this.votedMap = this.votedValues.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
      }, {});
      let tempVal = Object.entries(this.votedMap)
      this.sampleData = []
      this.sampleData.push(["options","vote"])
      tempVal.forEach(i=> this.sampleData.push(i))
      this.$emit("votereport",this.sampleData)
    },
    updatedAnswer: function(){
      this.sampleData.push(["options","vote"])
      this.$emit("votereport",this.sampleData)
    }
  }
}
</script>