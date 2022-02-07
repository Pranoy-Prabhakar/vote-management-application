# vote-management-system

This Project is build on **VueJS** Framework and **Vuetify** as CSS framework, there is an automated tets case  setup using testcafe.

The **Firebase** has been for hosting the application please find below the url also the code is checkout in github at below location
````text
Application Url : https://vote-management-application.web.app/
GitHub Url : https://github.com/Pranoy-Prabhakar/vote-management-application
````
# Description of Project

The application is a single page application which is divided in three sections. On the first section, the user can create a poll with up to 10 options. In the central one, the user can vote by selecting one of the options and pressing the "vote" button. On the right, the chart will update based on the questions created and the votes that each question got.


## Use cases

- As the owner, I want to change my poll question.
- As the owner, I want to add, edit or remove the options of my poll.
- As the owner, I want to reset the whole form, including answers.
- As the user, I want to see the UI refresh automatically when something changes.
- As the respondent, I want to send several answers.
- As the respondent, I want to see the changes in real time.


## Non Functional Requirement
- All fields have a limit of 80 characters.
- When the limit is reached, fields should be disabled.
- There should be always at least 2 options.
- The user can vote as many times as possible.
- The reset button should reset the whole UI: question, options and answers.
- It is mandatory to provide a deployment URL and source code.
- You can use 3rd party libraries or frameworks to develop this assignment.
- Writing automated tests is a plus.
- You must provide a README.md file with instructions

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
