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
        question : "What does CSS stand for?",
        imgSrc : "img/html.png",
        choiceA :"Cascading Style Sheet",
        choiceB :"Cascading Shoe Site",
        choiceC :"Cascading Sheets of Style",
        correct : "A"
    },
    {
        question : "This questions 2",
        imgSrc : "img/pictures2.png",
        choiceA :"The 1st choice",
        choiceB :"The 2nd choice",
        choiceC :"The 3rd choice",
        correct : "C"
    }
];
questions[0].question
questions[0].imgSrc
questions[0].choiceA
questions[0].choiceB
questions[0].choiceC
questions[0].correct

//Questions Rendered//
array =[a,b,c,d]
let lastQuestionIndex = questions.length - 1;
let runningQuestionIndex = 0;
renderQuestion()
function renderQuestion(){
let q =questions[runningQuestions];
qImg.innerHTML = "<img src=" + q.imgSrc + ">";
questions.innerHTML = "<p>" + q.questions+ "</p>";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;
}