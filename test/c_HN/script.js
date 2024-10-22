const questions=[
    {
     question :"How many bits is a port address?",
     answers:[
     {text:"8-bits",correct:false},
     {text:"32-bits",correct:false},
        {text:"16-bits",correct:true},
        {text:"64-bits",correct:false},
     ]
    },
    {
     question :"How many types of dataflow are there?",
     answers:[
        {text:"One",correct:false},
        {text:"Two",correct:false},
        {text:"Five",correct:false},
        {text:"Three",correct:true},
     ]
    },
    {
       question :"How many types of connection are there?",
       answers:[
          {text:"Seven",correct:false},
        {text:"Six",correct:false},
        {text:"Two",correct:true},
        {text:"One",correct:false},
       ]
    },
    {
       question :"How many types of protocol are there?",
       answers:[
          {text:"Seven",correct:false},
          {text:"Six",correct:false},
          {text:"Two",correct:false},
          {text:"Three",correct:true},
       ]
    },
    {
       question :"How many types of physical topology?",
       answers:[
     {text:"Three",correct:false},
       {text:"Four",correct:true},
       {text:"Two",correct:false},
       {text:"Six",correct:false},
    ]
 },
   {
   question :"___________ is not suitable for accommodating any change?",
   answers:[
       {text:"RAD model",correct:false},
       {text:"Waterfall model",correct:true},
       {text:"Build and fix model",correct:false},
       {text:"Prototyping model",correct:false},
    ]
   },
   {
    question :"How many bits is a ip address in the IPv4?",
     answers:[
        {text:"16-bits",correct:false},
        {text:"32-bits",correct:true},
        {text:"8-bits",correct:false},
        {text:"64-bits",correct:false},
       ]
    },
    {
       question :"How many types if ip address?",
        answers:[
           {text:"One",correct:false},
           {text:"Two",correct:true},
           {text:"Three",correct:false},
           {text:"Four",correct:false},
        ]
    },
   
    {
       question :"4GT model is a set of?",
        answers:[
           {text:"Programs ",correct:false},
           {text:"CASE tools",correct:false},
           {text:"Software tools",correct:true},
           {text:"None of the mentioned",correct:false},
        ]
       }  
 ];



const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.textContent = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.textContent = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();