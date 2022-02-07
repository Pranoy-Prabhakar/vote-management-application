import AppPage from '../pages/appPage'
import {fixture,test} from "testcafe";

const appPage = new AppPage()

fixture('Vote app')
    .page('http://localhost:8080')

test('Validate the main title of main App vue', async (t) => {
    await t.wait(1000)
    const title = await appPage.title
    await t.expect(title.innerText).eql(appPage.testData.title)
        .takeScreenshot()
})
test('Enter question and option', async (t) => {
    await t.wait(1000)
    const questionInput = await appPage.questionInput
    await t.expect(questionInput.exists).ok()
        .click(questionInput)
        .typeText(questionInput, appPage.testData.question)
        .expect(appPage.optionInputOne.exists).ok()
        .click(appPage.optionInputOne)
        .typeText(appPage.optionInputOne, appPage.testData.optionOne)
        .expect(appPage.addButtonOne.exists).ok()
        .click(appPage.addButtonOne)
        .expect(appPage.optionInputTwo.exists).ok()
        .takeScreenshot()
})

test('Vote must be displayed with question and options', async (t) => {
    await t.wait(1000)
    const questionInput = await appPage.questionInput
    await t.expect(questionInput.exists).ok()
        .click(questionInput)
        .typeText(questionInput, appPage.testData.question)
        .expect(appPage.optionInputOne.exists).ok()
        .click(appPage.optionInputOne)
        .typeText(appPage.optionInputOne, appPage.testData.optionOne)
        .expect(appPage.addButtonOne.exists).ok()
        .click(appPage.addButtonOne)
        .expect(appPage.optionInputTwo.exists).ok()
        .click(appPage.optionInputTwo)
        .typeText(appPage.optionInputTwo, appPage.testData.optionTwo)
        .expect(appPage.addButtonTwo.exists).ok()
        .click(appPage.addButtonTwo)
        .expect(appPage.optionInputThree.exists).ok()
        .expect(appPage.voteQuestion.exists).ok()
        .expect(appPage.voteQuestion.innerText).eql(appPage.testData.question)
        .takeScreenshot()
})

test('Chart must be displayed with vote response', async (t) => {

    await t.wait(1000)
    const questionInput = await appPage.questionInput
    await t.expect(questionInput.exists).ok()
        .click(questionInput)
        .typeText(questionInput, appPage.testData.question)
        .expect(appPage.optionInputOne.exists).ok()
        .click(appPage.optionInputOne)
        .typeText(appPage.optionInputOne, appPage.testData.optionOne)
        .expect(appPage.addButtonOne.exists).ok()
        .click(appPage.addButtonOne)
        .expect(appPage.optionInputTwo.exists).ok()
        .click(appPage.optionInputTwo)
        .typeText(appPage.optionInputTwo, appPage.testData.optionTwo)
        .expect(appPage.addButtonTwo.exists).ok()
        .click(appPage.addButtonTwo)
        .expect(appPage.optionInputThree.exists).ok()
        .expect(appPage.voteQuestion.exists).ok()
        .expect(appPage.voteQuestion.innerText).eql(appPage.testData.question)
        .click(appPage.voteOptionOne)
        .click(appPage.voteButton)
        .click(appPage.voteOptionOne)
        .click(appPage.voteButton)
        .click(appPage.voteOptionTwo)
        .click(appPage.voteButton)
        .expect(appPage.chartTitle.exists).ok()
        .expect(appPage.chartQuestion.exists).ok()
        .expect(appPage.chartDisplay.exists).ok()
        .takeScreenshot()
})