import * as myQuestions from "./questions.js"
/* 
make the html pages look good on styles.css 

update and complete the readme page
*/

//calling all questions form question.js
let questions
let questionIndexCounter = 0
let questionIndex = 0

//adds one to the question index so that next question is shown but is only limited to 11
function nextQuestion () {
    if(questionIndexCounter < 11) {
         questionIndexCounter++
    }
    clearDisplay()
    showQuestion(questions[questionIndexCounter])
 }

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
 //answer buttons 
 let btn1 = document.getElementById('answer1').addEventListener('click', selectAnswer)
 let btn2 = document.getElementById('answer2').addEventListener('click', selectAnswer)
 let btn3 = document.getElementById('answer3').addEventListener('click', selectAnswer)
 let btn4 = document.getElementById('answer4').addEventListener('click', selectAnswer)

// topic button functions
function handleClick(e) {

    switch(e.srcElement.id)
    {
        case "cars":
            questions = myQuestions.carQuestions;
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

   showQuestion(questions[questionIndex])
   selectAnswer(questions[questionIndex])
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

//show question function
function showQuestion (e) {
   questionDisplay.innerHTML = e.question
}


function selectAnswer (e) {
    // change the innertext of the buttons to the corresponding answers then make the if logic for the coreect of false answer
    //call the buttons and add the answers to them and make the logic for the background colors.
    //selects the answer and checks for right and wrong answers
}

function clearDisplay () {
    questionDisplay.innerHTML = " "
}