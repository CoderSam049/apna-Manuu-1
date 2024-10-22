const question=[
    {
     question :"What is microprocessor?",
     answers:[
     {text:"A multipurpose PLD thet accepts binary data as input ",correct:true},
     {text:"A multipurpose PLD thet accepts an integer as input ",correct:false},
        {text:"A multipurpose PLD thet accepts whole number  as input ",correct:false},
        {text:"A multipurpose PLD thet accepts prime numbers as input ",correct:false},
     ]
    },
    {
        question :"Which of the following interfacing IC is a DMA controller?",
        answers:[
        {text:" 8257/37",correct:true},
        {text:" 8155",correct:false},
           {text:" 8253/54",correct:false},
           {text:"8279 ",correct:false},
        ]
       },
       {
        question :"What is the vectored address of RST-5?",
        answers:[
        {text:" 0010 H ",correct:false},
        {text:"  0032 H",correct:false},
           {text:"0028 H",correct:true},
           {text:"0030 H",correct:false},
        ]
       },
       {
        question :"Which of the following is a software interrupt?",
        answers:[
        {text:" TRAP ",correct:false},
        {text:"   INTR",correct:false},
           {text:"RST-6.5 ",correct:false},
           {text:"RST-5",correct:true},
        ]
       },
       {
        question :"What is the word length of the Pentium-II microprocessor?",
        answers:[
        {text:" 8-bit ",correct:false},
        {text:"  16-bit ",correct:false},
           {text:"64-bit ",correct:true},
           {text:"32-bit",correct:false},
        ]
       },
       {
        question :"Which of the following is not a condition flag?",
        answers:[
        {text:"Trap flag",correct:true},
        {text:" Auxiliary carry flag",correct:false},
           {text:"Parity flag ",correct:false},
           {text:"Zero flag",correct:false},
        ]
       },
       {
        question :"How many address lines are present in 8086 microprocessor?",
        answers:[
        {text:"16",correct:false},
        {text:" 32",correct:false},
           {text:"20",correct:true},
           {text:"40",correct:false},
        ]
       },
       {
        question :"How many flip-flops are there in a flag register of 8085 microprocessor?",
        answers:[
        {text:"4",correct:false},
        {text:" 5",correct:true},
           {text:"7",correct:false},
           {text:"10",correct:false},
        ]
       },
       {
        question :"Which of the following is a special-purpose register of microprocessor?",
        answers:[
        {text:"Program counter",correct:true},
        {text:" Instruction register",correct:false},
           {text:"Accumulator",correct:false},
           {text:"Temporary register",correct:false},
        ]
       },
       {
        question :"Which of the following is not a microprocessor?",
        answers:[
        {text:"Z8000",correct:false},
        {text:" Motorola 6809",correct:false},
           {text:"Zilog Z8",correct:false},
           {text:"PIC1x",correct:true},
        ]
       },
       {
        question :"Which of the following is true about microprocessors?",
        answers:[
        {text:" It has an internal memory",correct:false},
        {text:" It has interfacing circuits",correct:false},
           {text:"It contains ALU, CU, and registers",correct:true},
           {text:"It uses Harvard architecture",correct:false},
        ]
       },
     
  
{
   question :"how many bits was the first developed microprocessor?",
   answers:[ 
   {text:"8-bits ",correct:false},
   {text:"32-bits",correct:false},
      {text:"4-bits",correct:true},
      {text:"16-bits",correct:false},
   ]
},
{
   question :"In 8085 which is/are the 16 bits registers  ?",
   answers:[ 
   {text:"program count ",correct:false},
   {text:"stack pointer ",correct:false},
      {text:"both a & b",correct:true},
      {text:"None of the above ",correct:false},
   ]
},
{
   question :"Flag register in 8-bits register having________bit flip-flop.",
   answers:[ 
   {text:"3 ",correct:false},
   {text:"4",correct:false},
      {text:"5",correct:true},
      {text:"6",correct:false},
   ]
},
{
   question :"How many ports 8255A has?",
   answers:[ 
   {text:"2 ",correct:false},
   {text:"3",correct:true},
      {text:"4",correct:false},
      {text:"5",correct:false},
   ]
},
{
   question :"A microprocessor can be classified into ?",
   answers:[ 
   {text:"2",correct:false},
   {text:"3",correct:true},
      {text:"4",correct:false},
      {text:"",correct:false},
   ]
},
{
   question :"8087 Architecture is divided into ?",
   answers:[ 
   {text:"2",correct:false},
   {text:"3",correct:true},
      {text:"4",correct:false},
      {text:"4",correct:false},
   ]
},
{
   question :"Which register containing 8086/8088 flag ?",
   answers:[ 
   {text:"Status register",correct:true},
   {text:"Stack register",correct:false},
      {text:"Flag register ",correct:false},
      {text:"Stand register ",correct:false},
   ]
},
{
   question :"The IF called as__________",
   answers:[ 
   {text:"initial flag",correct:false},
   {text:"indicate flag",correct:false},
      {text:"interrupt flag",correct:true},
      {text:"inter flag",correct:false},
   ]
 },
{
   question :"The SS is called as_________?",
   answers:[ 
   {text:"single stack",correct:false},
   {text:"stack segment ",correct:true},
      {text:"sequence stack",correct:false},
      {text:"random stack",correct:false},
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
    let currentQuestion = question[currentQuestionIndex]; // Corrected variable name
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
        selectedBtn.classList.add("incorrect"); // Add visual indication for incorrect answers
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
    questionElement.innerHTML = `You scored ${score} out of ${question.length}!`; // Corrected variable name
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < question.length) { // Corrected variable name
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < question.length) { // Corrected variable name
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();



