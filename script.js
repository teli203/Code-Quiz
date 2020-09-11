//Questions Rendered//
array =[a,b,c,d];
let lastQuestionIndex = questions.length -1;
let runningQuestionIndex = 0,

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

};
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

//renderCounter//
let count
const questionTime = 10; //10 seconds for every question//
const guageWidth = 150; //150px
const guageUnit = guageWidth / questionTime;
let count = 0;
const guageProgressUnit = guageWidth/questionTime;

function renderCounter(){
    if( count <= questionTime ){
        counter.innerHTML = count;
        timeGauge.style.width = count * guageUnit + "px";
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

//Score Render//
function scoreRender(){
    scorecontainer.style.display = "block";
    let scorePerCent = Math.round(100 * score / question.length);
    let img = ( scorePerCent >= 80 ) ? "img/5.png" :
        ( scorePerCent >= 60 ) ? "img/4.png" :
        ( scorePerCent >= 40 ) ? "img/3.png" :
        ( scorePerCent >= 20 ) ? "img/2.png" : "img/1.png" ;
    
    scorecontainer.innerHTML = "<img src="+ img + "><p>" + scorePerCent + "%<p>";


}