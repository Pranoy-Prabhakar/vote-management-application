<template>
  <v-row class="ma-0">
    <v-col cols="12" v-for="(input, index) in options" :key="`option-${index}`">
      <v-input >
        <v-row>
          <v-col cols="9" class="pa-0">
            <v-text-field
                v-model="input.option"
                label="Option"
                :test-data-id="`option-data-${index}`"
                required
                :rules="optionRules"
                placeholder="Type an answer"
                maxlength="80"
                :disabled="input.option.length>=80"
            ></v-text-field>
          </v-col>
          <v-col col="3" class="ma-auto align-center" >

            <v-btn
                v-show="!showAddButton"
                fab
                dark
                small
                color="pink"
                :id="`remove-button-${index}`"
                :test-data-id="`remove-option-${index}`"
                @click="removeOption(index, options)"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>

            <v-btn
                v-show="showAddButton"
                fab
                dark
                small
                color="teal"
                :id="`add-button-${index}`"
                :test-data-id="`add-option-${index}`"
                @click="addOption(input, options, index)"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>


          </v-col>
        </v-row>
      </v-input>
    </v-col>
    <v-col col="12" v-if="showMaximumOptionAddedFalg">
      <span>You can only add 10 options</span>
    </v-col>
    <v-col col="12" v-if="!showMaximumOptionAddedFalg">
      <span>{{optionCount}}/10 Possible Answer</span>
    </v-col>
    <v-col col="4">
      <span><v-btn
          rounded
          color="primary"
          dark
          @click="reset"
      >
      reset
    </v-btn></span>
    </v-col>
  </v-row>

</template>

<script>
export default {
  name: "AddOptions",
  props: {
    option: String,
  },

  data() {
    return {
      showAddButton: true,
      showMaximumOptionAddedFalg: false,
      options: [{
        option: '',
      }],
      optionCount: 0,
      optionRules: [
        v => !!v || 'Option is required',
        v => v.length <= 80 || 'Option must be less than 80 characters',
      ],
      }
    },
  computed: {
  },
  methods:{
    addOption: async function (value, optionData, index) {
      if(value.option !=="" && value.option !== undefined){
        document.getElementById(`add-button-${index}`).style.display="none";
        document.getElementById(`remove-button-${index}`).style.display = 'block'
        document.getElementById(`remove-button-${index}`).style.float = ''
        if(index<9){
          this.showMaximumOptionAddedFalg = false;
          optionData.push({
            option: ''
          })
          this.optionCount++
        }else{
          this.showMaximumOptionAddedFalg = true;
        }
      }
      await this.$emit('addedOptions',optionData)
    },
    removeOption: async function ( index, optionData) {
      this.optionCount--
      optionData.splice(index, 1)
      if(index<=1){
        document.getElementById(`add-button-${index}`).style.display="none";
        document.getElementById(`remove-button-${index}`).style.display = 'block'
        document.getElementById(`remove-button-${index}`).style.float = ''
        document.getElementById(`add-button-${this.optionCount}`).style.display="block";
        document.getElementById(`remove-button-${this.optionCount}`).style.display = 'none'
      }else if(index === this.optionCount+1){
        console.log('inside last element delete')
        document.getElementById(`add-button-${index-1}`).style.display="block";
        document.getElementById(`remove-button-${index-1}`).style.display = 'block'
        document.getElementById(`remove-button-${index-1}`).style.float = 'right'
      }else{
        console.log('other element delete')
        document.getElementById(`add-button-${this.optionCount}`).style.display="block";
        document.getElementById(`remove-button-${this.optionCount}`).style.display = 'none'
      }
      await this.$emit('addedOptions',optionData)
    },
    reset: function(){
      this.showAddButton = true
      this.options=[]
      this.optionCount =0
      this.options.push({
        option: ''
      })
      document.getElementById(`add-button-${this.optionCount}`).style.display="block";
      document.getElementById(`remove-button-${this.optionCount}`).style.display = 'none'
      this.$emit('addedOptions',this.options)
      this.$emit('resetQues',true)
    }
  }
  }
</script>
