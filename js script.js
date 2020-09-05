const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const qImg = document.getElementById("questionImage");
const question = document.getElementById("question");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");

const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");

const progress = document.getElementById("progress");

const scorecontainer = document.getElementById("scorecontainer");


let question = [
    {
        question : "What does CSS stand for?"
        imgSrc : "img/html.png",
        choiceA :"Cascading Style Sheet"
        choiceB :"Cascading Shoe Site"
        choiceC :"Cascading Sheets of Style"
        correct : "A"
    },
]