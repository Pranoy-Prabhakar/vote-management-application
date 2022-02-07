import { Selector } from 'testcafe'

export default class App {
    constructor() {
        this.title = Selector('[test-data-id = "title"]')
        this.questionInput = Selector('[test-data-id = "question-input"]')
        this.optionInputOne = Selector('[test-data-id = "option-data-0"]')
        this.optionInputTwo = Selector('[test-data-id = "option-data-1"]')
        this.optionInputThree = Selector('[test-data-id = "option-data-2"]')
        this.optionInputFour = Selector('[test-data-id = "option-data-3"]')
        this.optionInputFive = Selector('[test-data-id = "option-data-4"]')
        this.optionInputSix = Selector('[test-data-id = "option-data-5"]')
        this.optionInputSeven = Selector('[test-data-id = "option-data-6"]')
        this.optionInputEight = Selector('[test-data-id = "option-data-7"]')
        this.optionInputNine = Selector('[test-data-id = "option-data-8"]')
        this.optionInputTen = Selector('[test-data-id = "option-data-9"]')
        this.addButtonOne = Selector('[test-data-id = "add-option-0"]')
        this.addButtonTwo = Selector('[test-data-id = "add-option-1"]')
        this.voteQuestion = Selector('[test-data-id = "vote-question"]')
        this.voteOptionOne = Selector('[test-data-id = "option-vote-0"]')
        this.voteOptionTwo = Selector('[test-data-id = "option-vote-1"]')
        this.voteButton = Selector('[test-data-id = "vote-button"]')
        this.chartTitle = Selector('[test-data-id = "chart-title"]')
        this.chartQuestion = Selector('[test-data-id = "chart-question"]')
        this.chartDisplay = Selector('[test-data-id = "vote-chart"]')
        this.testData = {
            title: 'Sir Vote-a-lot',
            question: 'What is the value of Pi?',
            optionOne: '2.15',
            optionTwo: '3.14',
            optionThree: '1.8',
            optionFour: '9.6',
            optionFive: '10.5',
            optionSix: '4.7',
            optionSeven: '7.8',
            optionEight: '9.5',
            optionNine: '7.3',
            optionTen: '8.3',
            optionDuplicate: '3.14'
        }
    }

}
