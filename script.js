import * as myQuestions from "./questions.js"

/* IF YOU GOT TIME
create a points counter system
each question is worth 100 points
make last 3 questions hard so that they are worth 500 points
add a timer
*/

/* 
make the html pages look good on styles.css 

update and complete the readme page
*/

//calling all questions form question.js
let questionSelector
let questionIndexCounter = 0
let questionIndex = 0

//listening for events when buttons are clicked
 document.getElementById('cars').addEventListener('click', handleClick)
 document.getElementById('basketball').addEventListener('click', handleClick)
 document.getElementById('coding').addEventListener('click', handleClick)
 document.getElementById('movies').addEventListener('click', handleClick)
 document.getElementById('internet').addEventListener('click', handleClick)
 document.getElementById('sports-history').addEventListener('click', handleClick)
 document.getElementById('food').addEventListener('click', handleClick)
 document.getElementById('countries').addEventListener('click', handleClick)
 document.getElementById('animals').addEventListener('click', handleClick)
 document.getElementById('random-facts').addEventListener('click', handleClick)

// topic button functions
function handleClick(e) {

    switch(e.srcElement.id)
    {
        case "cars":
            questionSelector = myQuestions.carQuestions[questionIndex];
            transitionToQuestions()
            break;

        case "basketball":
           console.log('basketball')
            break;

        case "coding":
            console.log('coding')
             break;

        case "movies":
            console.log('movies')
              break;

        case "internet":
          console.log('internet')
             break;

        case "sports-history":
            console.log('sports-history')
              break;

        case "food":
            console.log('food')
             break;

        case "countries":
             console.log('countries')
             break;

        case "animals":
            console.log('animals')
            break;

        case "random-facts":
            console.log('random-facts')
             break;

        default:
            break;
    } 

    showQuestion(questionSelector)
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

//calling the h2 tag to display questions
let questionDisplay = document.getElementById("question-display")

//show question and answer functions
function showQuestion (e) {
   questionDisplay.innerHTML = e.question //.question is what shows the question object
   //make a logic set that resets the question display so that the next question can be shown
}

function selectAnswer () {
    //call the buttons and add the answers to them and make the logic for the background colors.
    //selects the answer and checks for right and wrong answers
}

//adds one to the question index so that next question is shown but is only limited to 11
function nextQuestion () {
    if(questionIndexCounter < 11) {
         questionIndexCounter++
    }
    questionIndex = questionIndexCounter 
    return console.log(questionIndex)
 }