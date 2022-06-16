import * as myQuestions from "./questions.js"

/* IF YOU GOT TIME
create a points counter system
each question is worth 100 points
make last 3 questions hard so that they are worth 500 points
add a timer
*/

/* 
see if by making a function that handels if answer is false
then make the background color of the button red if correct then
make it green and adding it to each function works.

function that handels once the next button for the questions

create all the 10 questtions and make them into an array

function that once in the last question add a return to topic page button

perhaps use the --hue var for the color but it might be better to use 
.styles(background-color: color)

make the html pages look good on styles.css 

update and complete the readme page
*/

//removes the question container so that only the topics are shown
let questionContainer = document.getElementById('question-container')
questionContainer.style.display = 'none'

let questionHeader = document.getElementById('question-header')
questionHeader.style.display = 'none'

//this handels when a topic button is clicked it removes the topic divs and shows the question div
let topicContainer = document.getElementById('topic-container')
topicContainer.addEventListener('click', (event) => {
    const isBtn = event.target.nodeName === 'BUTTON'
    if (isBtn) {
        topicContainer.style.display = 'none'
        questionContainer.style.display = 'block'
        questionHeader.style.display = 'block'
    }
})

//When "More Topics" button is clicked the questions are removed and topics are shown again
let moreTopics = document.getElementById('return')
moreTopics.addEventListener('click', (event) => {
    const isBtn = event.target.nodeName === 'BUTTON'
    if (isBtn) {
        topicContainer.style.display = 'grid'
        questionContainer.style.display = 'none'
        questionHeader.style.display = 'none'
    }
})

//calling all the question displays 
let questionDisplay = document.getElementById("question-container")
let carQuestions = myQuestions.carQuestions

console.log(carQuestions)

//show question and answer functions
function showQuestion (question) {
    questionDisplay.innerHTML = question.question
}

function nextQuestion (question) {
    //adds 1 to the question index
}

function selectAnswer () {
    //selects the answer and checks for right and wrong answers
}





// topic functions
function topicCars() {
    questions = carQuestions
    showQuestion(questions[0])
}

function topicBasketball () {
    questions = basketBallQuestions
}

function topicCoding () {
    location.href= "question.html"

}

function topicMovies () {
    location.href= "question.html"
}

function topicInternet () {
    location.href= "question.html"
}

function topicSportHistory () {
    location.href= "question.html"
}

function topicFood () {
    location.href= "question.html"
}

function topicCountries () {
    location.href= "question.html"
}

function topicAnimals () {
    location.href= "question.html"
}

function topicRandomFacts () {
    location.href= "question.html"
}


// This is a comment, hi

//now is not up to date 