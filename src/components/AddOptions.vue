<template>
  <v-row class="ma-0">
    <v-col cols="12" v-for="(input, index) in options" :key="`option-${index}`">
      <v-input >
        <v-row>
          <v-col cols="8" class="pa-0">
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
          <v-col col="4" class="ma-auto align-center" >

            <v-btn
                fab
                dark
                small
                color="teal"
                :id="`add-button-${index}`"
                :test-data-id="`add-option-${index}`"
                @click="addOption(input, index)"
                :style="input.plus"
                class="mr-4"
            >
              <v-icon dark>
                mdi-plus
              </v-icon>
            </v-btn>
            
            <v-btn
                fab
                dark
                small
                color="pink"
                :id="`remove-button-${index}`"
                :test-data-id="`remove-option-${index}`"
                @click="removeOption(index)"
                :style="input.minus"
            >
              <v-icon dark>
                mdi-minus
              </v-icon>
            </v-btn>

          </v-col>
        </v-row>
      </v-input>
    </v-col>
    <v-col cols="9" v-if="showDuplicateOptionFlag" class="" >
      <span style="color: red">Option already exist Please try another option</span>
    </v-col>
    <v-row>
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
  </v-row>

</template>

<script>
export default {
  name: "AddOptions",
  data() {
    return {
      showAddButton: true,
      showMaximumOptionAddedFalg: false,
      showDuplicateOptionFlag:false,
      options: [
        {
          option: '',
          minus:{
            display:'none',
          },
          plus:{
            display:'inline-block',
          },
        },
      ],
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
    addOption: async function (value, index) {
      if(value.option !=="" && value.option !== undefined){
        if(this.options.filter(val => val.option == value.option).length >1 ){
          this.showDuplicateOptionFlag = true;
        }else{
          this.showDuplicateOptionFlag = false
          const obj = [...this.options]
          obj[index].plus.display = 'none'
          obj[index].minus.display = 'inline-block'
          this.options = [...obj]
          if(index<9){
            this.showMaximumOptionAddedFalg = false;
            this.options.push({
              option: '',
              minus:{
                display:'none',
              },
              plus:{
                display:'inline-block',
              }})
            this.optionCount++
          }else{
            this.showMaximumOptionAddedFalg = true;
          }
          await this.$emit('addedOptions',this.options)
        }
      }
      // const optionData = this.options.map(val => {return {option:val.option}})
    },
    removeOption: async function (index) {
      const obj = [...this.options]
      console.log(obj)
      if(index===0 && this.optionCount === 0){
        obj[index].plus.display = 'inline-block'
        obj[index].minus.display = 'none'

      }else if(index===0 && this.optionCount===1) {
        obj[index+1].plus.display = 'inline-block'
        obj[index+1].minus.display = 'none'
        obj.splice(index,1)
      }
      else if(index === this.optionCount && index !== 1){
        obj[index-1].plus.display = 'inline-block'
        obj[index-1].minus.display = 'inline-block'
        obj.splice(index,1)
      }else if(index===1 && this.optionCount === 1){
        obj[index-1].plus.display = 'inline-block'
        obj[index-1].minus.display = 'none'
        obj.splice(index,1)
      }else {
        obj.splice(index,1)
      }
      this.options = [...obj]
      // const optionData = this.options.map(val => {return {option:val.option}})
      await this.$emit('addedOptions',this.options)
      this.optionCount--
    },
    reset: function(){
      this.showAddButton = true
      this.options=[]
      this.optionCount =0
      this.options.push({
        option: '',
        minus:{
          display:'none',
        },
        plus:{
          display:'inline-block',
        }})
      this.$emit('addedOptions',this.options)
      this.$emit('resetQues',true)
    }
  }
  }
</script>
