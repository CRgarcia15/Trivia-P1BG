import { carQuestions } from "./questions.js"

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

/* 
THINGS TO GET DONE NOW
CREATE:
answer select function
next question button function
return to topics page button function
add those functions to each function for the buttons
*/
let questionDisplay = document.getElementById("question-container")
let currentQuestionIndex = 0

let questions




//remove the question
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

let moreTopics = document.getElementById('return')
moreTopics.addEventListener('click', (event) => {
    const isBtn = event.target.nodeName === 'BUTTON'
    if (isBtn) {
        topicContainer.style.display = 'grid'
        questionContainer.style.display = 'none'
        questionHeader.style.display = 'none'
    }
})






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


showQuestion(questions[0])
