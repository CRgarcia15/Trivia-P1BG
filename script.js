import * as myQuestions from "./questions.js"

/* IF YOU GOT TIME
create a points counter system
each question is worth 100 points
make last 3 questions hard so that they are worth 500 points
add a timer
*/

/* 
function that handels once the next button for the questions

make the html pages look good on styles.css 

update and complete the readme page
*/

//calling all questions form question.js
let questions
let questionIndexCounter

 document.getElementById('cars').addEventListener('click', handleClick)
// topic button functions
function handleClick(e) {

    switch(e.srcElement.id)
    {
        case "cars":
            questions = myQuestions.carQuestions;
            transitionToQuestions()
            questionIndexCounter = 0
            break;

        case "basketball":
            questions = myQuestions.carQuestions;
            break;

        default:
            break;
    }
    console.log(questionIndexCounter)
}

//gets question display container and hides it 
let questionDisplayContainer = document.getElementById('question-container')
questionDisplayContainer.style.display = 'none'

//gets topic choice container by id
let topicChoiceDisplayContainer = document.getElementById('topicChoice-container')

//gets and adds event listener to the next and more topics buttons
let nextBtn = document.getElementById('next').addEventListener('click', nextQuestion)
document.getElementById('return').addEventListener('click', returnToTopics )

// when a topic is choosen this hides the topics container and shows the question container
function transitionToQuestions () {
    topicChoiceDisplayContainer.style.display = 'none'
    questionDisplayContainer.style.display = 'block'
}

//handels when more topics button is clicked 
function returnToTopics () {
    topicChoiceDisplayContainer.style.display = 'block'
    questionDisplayContainer.style.display = 'none'
}

//adds one to the question index so that next question is shown but is only limited to 10
function nextQuestion () {
    if (questionIndexCounter < 10) {
        questionIndexCounter++
        console.log(questionIndexCounter)
    }
}

//calling the h2 tag to display questions
let questionDisplay = document.getElementById("question-container")

//show question and answer functions
function showQuestion (e) {
   questionDisplay.innerHTML = e.questions
}

function selectAnswer () {
    //selects the answer and checks for right and wrong answers
}