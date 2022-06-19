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

 document.getElementById('cars').addEventListener('click', handleClick)
// topic button functions
function handleClick(e) {

    switch(e.srcElement.id)
    {
        case "cars":
            questions = myQuestions.carQuestions;
            transitionToQuestions()
            break;

        case "basketball":
            questions = myQuestions.carQuestions;
            break;

        default:
            break;
    }

    console.log(questions)
}

//gets question display container and hides it 
let questionDisplayContainer = document.getElementById('question-container')
questionDisplayContainer.style.display = 'none'

//gets topic choice container by id
let topicChoiceDisplayContainer = document.getElementById('topicChoice-container')

//gets and adds event listener to the next and more topics buttons
document.getElementById('next').addEventListener('click', nextQuestion)
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

function nextQuestion (question) {
    //adds 1 to the question index
}

//calling the h2 tag to display questions
let questionDisplay = document.getElementById("question-container")

//show question and answer functions
function showQuestion (e) {
    questions[0]
   questionDisplay.innerHTML = question
}

function selectAnswer () {
    //selects the answer and checks for right and wrong answers
}

