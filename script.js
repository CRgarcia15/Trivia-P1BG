import * as myQuestions from "./questions.js"

//calling all questions form question.js
let questions
let questionIndexCounter = 0
let questionIndex = 0
let correctAnswer

//adds one to the question index so that next question is shown but is only limited to 11
function nextQuestion () {
    if(questionIndexCounter < 10) {
         questionIndexCounter++
    }
    clearDisplay()
    showQuestion(questions[questionIndexCounter])
    selectAnswer(questions[questionIndexCounter])
    correctWrong()
 }

//listening for events when buttons are clicked
 document.getElementById('cars').addEventListener('click', handleClick)
 document.getElementById('basketball').addEventListener('click', handleClick)
 document.getElementById('music').addEventListener('click', handleClick)
 document.getElementById('movies').addEventListener('click', handleClick)
 document.getElementById('internet').addEventListener('click', handleClick)
 document.getElementById('sports-history').addEventListener('click', handleClick)
 document.getElementById('food').addEventListener('click', handleClick)
 document.getElementById('countries').addEventListener('click', handleClick)
 document.getElementById('animals').addEventListener('click', handleClick)
 document.getElementById('random-facts').addEventListener('click', handleClick)
 //answer buttons 
 let btn1 = document.getElementById('answer1')
 let btn2 = document.getElementById('answer2')
 let btn3 = document.getElementById('answer3')
 let btn4 = document.getElementById('answer4')

// topic button functions
function handleClick(e) {

    switch(e.srcElement.id)
    {
        case "cars":
            questions = myQuestions.carQuestions;
            transitionToQuestions()
            break;

        case "basketball":
            questions = myQuestions.basketballQuestions;
            transitionToQuestions()
            break;

        case "Music":
            questions = myQuestions.musicQuestions;
            transitionToQuestions()
             break;

        case "movies":
            questions = myQuestions.movieQuestions;
            transitionToQuestions()
              break;

        case "internet":
            questions = myQuestions.internetQuestions;
            transitionToQuestions()
             break;

        case "sports-history":
            questions = myQuestions.sportsHistoryQuestions;
            transitionToQuestions()
              break;

        case "food":
             questions = myQuestions.foodQuestions;
            transitionToQuestions()
             break;

        case "countries":
            questions = myQuestions.countriesQuestions;
            transitionToQuestions()
             break;

        case "animals":
            questions = myQuestions.animalQuestions;
            transitionToQuestions()
            break;

        case "random-facts":
            questions = myQuestions.randomFactsQuestions;
            transitionToQuestions()
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

let btns =  document.getElementsByClassName('answer')
//clears all the html and answer buttons so that the next question can show
function clearDisplay () {
    questionDisplay.innerHTML = " "
    btns.innerText = " "

}

//calls for buttons, assigns the corresponding answers and handels if answer correct or wrong
function selectAnswer (e) {
    btn1.innerText = e.answers[0].text
    btn2.innerText = e.answers[1].text
    btn3.innerText = e.answers[2].text
    btn4.innerText = e.answers[3].text

    btn1.setAttribute("correct", e.answers[0].correct)
    btn2.setAttribute("correct", e.answers[1].correct)
    btn3.setAttribute("correct", e.answers[2].correct)
    btn4.setAttribute("correct", e.answers[3].correct)
}

//adding event listeners to each button
btn1.addEventListener('click', correctWrong)
btn2.addEventListener('click', correctWrong)
btn3.addEventListener('click', correctWrong)
btn4.addEventListener('click', correctWrong)

//handels if the answers are correct or not
function correctWrong (e) {
   let correct = e.srcElement.attributes["correct"].nodeValue

    if (correct === "true") {
        console.log('correct')
    }
    else {
        console.log('wrong')
    }
}

/*make a seperate class for the buttons in the HTML so that when the answers are wrong the show up
as red and if right they show up as green. You need to figure out how to hide the 
color before the answer is choosen and after the next button is clicked. I think that
you will need to use the clear display for the next button clicked function so that 
the colors don't keep going.*/
//Also figure out to change between class using JS

//Also add more questions to the topics
