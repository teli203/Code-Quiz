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
function renderQuestion(){
let q =questions[runningQuestions];
qImg.innerHTML = "<img src=" + q.imgSrc + ">";
questions.innerHTML = "<p>" + q.questions+ "</p>";
choiceA.innerHTML = q.choiceA;
choiceB.innerHTML = q.choiceB;
choiceC.innerHTML = q.choiceC;

let runningQuestionIndex = 0;
renderQuestion()

runningQuestionIndex++
renderQuestion()

}
//Progress Render//
function progressRender(){
    for(let qIndex = 0; qIndex <= lastQuestionIndex; qIndex++){
        progress.innerHTML += "div class='prog'id=" + qIndex + "></div>";
    }
}
function answerIsCorrect(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "green"
}
function answerIsWrong(){
    document.getElementById(runningQuestionIndex).style.backgroundColor = "red";
}

//Counter Render//
const questionTime = 10; //10 seconds for every question//
const guageWidth = 150;
let count = 0;
const guageProgressUnit = guageWidth/questionTime;

function counterRender(){
    if( count <= questionTime ){
        counter.innerHTML = count;
        timeGauge.style.width = guageProgressUnit * count + "px" ;
        count++;
    }else{
        count = 0;
        answerIsWrong();
        if( runningQuestionIndex < lastQuestionIndex){
            runningQuestionIndex++;
            questionrender();
        }else{ clearInterval(TIMER);
        scoreRender();                          }
        let TIMER =
            setInterval(counterRender,1000);

        clearInterval(TIMER);
    }
}

//Check Answer//
<div class="choice" id="A" onclick="check answer('A')">A</div>

function checkAnswer(answer){
    if(questions[runningQuestionIndex].correct== answer){
        score++;
        answerIsCorrect(); backgroundColor= "green"
    }else{
        answerIsWrong(); backgroundColor= "red"
    }
    if(runningQuestionIndex < lastQuestionIndex){
        count = 0;
        runningQuestionIndex++;
        questionRender();
    }else{
        clearInterval(TIMER);

        scoreRender();
    }
}
//Start Quiz//
const start = document.getElementById("start");

start.addEventListener("click", startQuiz );

function startQuiz(){
    start.style.display = "none";
    counterRender();
    TIMER = setInterval(counterRender,1000);
    progressRender();
    questionRender();
    quiz.style.display = "block";
}
//Determine X and Y//
//if statement//
if( Y == "one"){
    X = 1;
}else {
    X = 0;
}
//else if statement//
if (Y == "one" ){
    X = 1;
}else if (Y == "zero") {
    X = 0;
} else {
    X = 2;
}