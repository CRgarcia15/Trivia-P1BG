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
function returnTopic () {
    location.href = "topic-choice.html"
}

function nextQuestion () {

}

function selectAnswer () {

}

function topicCars () {
    location.href= "question.html"
}

function topicBasketball () {
    location.href= "question.html"
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

const carQuestions = [
    { //1
        question: 'Is the 2JZ the best engine ever?',
        answers: [
            {text: 'is that even a question', correct: true},
            {text: 'of cuorse', correct: true},
            {text: 'no, its the RB26', correct: false},
            {text: "I don't know what a 2JZ is", correct: false}
        ]
    },
    { //2
        // add picture of the car
        question: 'With what engine did the 1969 Dodge Daytona come with?',
        answers: [
            {text: '2JZ', correct: false},
            {text: '5.0L Coyote', correct: false},
            {text: '7.2L Magnum V8', correct: true},
            {text: 'A 4 cylinder', correct: false},
        ]
    },
    { //3
        question: 'What year were seatbelts required by the United States?',
        answers: [
            {text: '1978', correct: false},
            {text: '2022', correct: false},
            {text: '1927', correct: false},
            {text: '1968', correct: true},
        ]
    },
    { //4
        // add picture of the car
        question: 'When was the first car invented?',
        answers: [
            {text: 'Today', correct: false},
            {text: 'Febuary 20, 1969', correct: false},
            {text: 'January 29, 1886', correct: true},
            {text: 'September 2, 1856', correct: false},
        ]
    },
    {//5
        question: 'Who said "I live one quater mile at a time"?',
        answers: [
            {text: 'Dominic Toretto', correct: true},
            {text: 'Mr. Bean', correct: false},
            {text: 'Dr. Dre', correct: false},
            {text: 'John Cena', correct: false},
        ]
    },
    {//6
        question: "How many cars compose the world's largest car collection?",
        answers: [
            {text: '1,000,000', correct: false},
            {text: '7,00', correct: true},
            {text: '15', correct: false},
            {text: '20,000', correct: false},
        ]
    },
    {//7
        //add a picture of the car
        question: "How much is the Gordon Murray Automotive T.50s Niki Lauda worth?",
        answers: [
            {text: '$2', correct: false},
            {text: '$200,000', correct: false},
            {text: '$4.36M', correct: true},
            {text: '$7 Million', correct: false},
        ]
    },
    {//8
        question: 'Who has won the most World Championships in F1?',
        answers: [
            {text: 'Michael Schumacher', correct: false},
            {text: 'Lewis Hamilton', correct: true},
            {text: 'Charles Leclerc', correct: false},
            {text: 'Nikki Lauda', correct: true},
        ]
    },
    {//9
        question: 'How much is a F1 car Worth?',
        answers: [
            {text: '3 Million Dollars', correct: false},
            {text: '12 Million Dollars', correct: true},
            {text: '1 Million Dollars', correct: false},
            {text: 'They are free', correct: false},
        ]
    },
    {//10
        question: "who said 'if you're goin' hard enough left, you'll find yourself turnin' right.'?",
        answers: [
            {text: 'Doc hudson', correct: false},
            {text: 'Dominic Toretto', correct: false},
            {text: 'Austin Powers', correct: false},
            {text: 'Mr. T', correct: true},
        ]
    },
]
