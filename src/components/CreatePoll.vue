<template>
  <v-card light color="background" elevation="3" outlined shaped>
          <v-card-title class="justify-center">Something in mind ???</v-card-title>
          <v-card-subtitle> Use this section to add the question for the poll</v-card-subtitle>
          <v-card-text class="px-5">
            <v-row>
              <v-col
                  cols="12"
              >
                <v-text-field
                    v-model="voteQuestion"
                    :rules="quesRules"
                    :counter="80"
                    maxlength="80"
                    label="Enter the question here"
                    required
                    :disabled="voteQuestion.length>=80"
                    v-on:input="handleChange"
                    test-data-id="question-input"
                ></v-text-field>
                <AddOptions @addedOptions="updatedOptions" @resetQues="resetQuestion"></AddOptions>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
</template>
<script>
import AddOptions from "@/components/AddOptions";
export default {
  name: 'CreatePoll',
  components:{
    AddOptions,
  },
  data() {
    return {
      valid: false,
      voteQuestion: '',
      quesRules: [
        v => !!v || 'Question is required',
        v => v.length <= 80 || 'Question must be less than 80 characters',
      ],
    }
  },
  methods: {
    updatedOptions: function (value) {
      this.$emit('options',value)
    },
    handleChange: function (){
      this.$emit('question', this.voteQuestion)
    },
    resetQuestion: function(){
      this.voteQuestion=''
      this.$emit('question', this.voteQuestion)
    }
  },
}
</script>