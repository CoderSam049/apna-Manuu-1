const questions = [
    {
        question :"Which of the following is an application software?",
        answers:[
           {text:"minix",correct:false},
           {text:"DOS",correct:false},
           {text:"tally",correct:true},
           {text:"firmware",correct:false},
        ]
       },
       
       
        {
           question :"software can be uninstalled through?",
           answers:[
              {text:"Debugger",correct:false},
              {text:"Compiler",correct:false},
              {text:"Linker",correct:false},
              {text:"control panel",correct:true},
           ]
        },
        {
           question :"which of the following is an extension of a temporary file?",
           answers:[
              {text:".tmp",correct:true},
              {text:".txt",correct:false},
              {text:".tnt",correct:false},
              {text:".tar",correct:false},
           ]
        },
        {
           question :"which of the following is an application software?",
           answers:[
              {text:"LINUX",correct:false},
              {text:"MACOS",correct:false},
              {text:"UNIX",correct:false},
              {text:"Graphics",correct:true},
           ]
        },
       
        {
           question :"Which on of the following is not an agile method?",
           answers:[
              {text:"XP",correct:false},
              {text:"4GT",correct:true},
              {text:"AUP",correct:false},
              {text:"all of the mentioned",correct:false},
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
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
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
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
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


