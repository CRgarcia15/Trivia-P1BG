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
let carQuestionsArr = myQuestions.carQuestions

//calling the h2 tag to display questions
let questionDisplay = document.getElementById("question-container")

//show question and answer functions
function showQuestion (question) {
   // questionDisplay.innerHTML = question.question
}

function nextQuestion (question) {
    //adds 1 to the question index
}

function selectAnswer () {
    //selects the answer and checks for right and wrong answers
}

let carsBtn = document.getElementById('cars').addEventListener('click', topicCars)
// topic button functions
function topicCars() {
    console.log('hello')
}

function topicBasketball () {
   
}

function topicCoding () {
    

}

function topicMovies () {
 
}

function topicInternet () {
    
}

function topicSportHistory () {
   
}

function topicFood () {
  
}

function topicCountries () {
  
}

function topicAnimals () {
    
}

function topicRandomFacts () {

}

//removes the question container so that only the topics are shown
let questionContainer = document.getElementById('question-container')
questionContainer.style.display = 'none'

let questionHeader = document.getElementById('question-header')
questionHeader.style.display = 'none'

//selects topic header for html
let topicHeader = document.getElementById('topic-h1')


//this handels when a topic button is clicked it removes the topic divs and shows the question div
function removeQuestionContainer () {
topicContainer.addEventListener('click', (event) => {
    const isBtn = event.target.nodeName === 'BUTTON'
    if (isBtn) {
        topicHeader.style.display = 'none'
        topicContainer.style.display = 'none'
        questionContainer.style.display = 'block'
        questionHeader.style.display = 'block'
    }
})
}
//When "More Topics" button is clicked the questions are removed and topics are shown again
let moreTopics = document.getElementById('return')
moreTopics.addEventListener('click', (event) => {
    const isBtn = event.target.nodeName === 'BUTTON'
    if (isBtn) {
        topicHeader.style.display = 'block'
        topicContainer.style.display = 'grid'
        questionContainer.style.display = 'none'
        questionHeader.style.display = 'none'
    }
})