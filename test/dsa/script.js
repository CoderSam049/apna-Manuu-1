const questions = [
    {
        question: "What is a data structure?",
        answers: [
            { text: "A programming language", correct: false },
            { text: "A collection of algorithms", correct: false },
            { text: "A way to store and organize data", correct: true },
            { text: "A type of computer hardware", correct: false },
        ]
    },
    {
        question: "Which data structure is used for implementing recursion?",
        answers: [
            { text: "Stack", correct: true },
            { text: "Queue", correct: false },
            { text: "List", correct: false },
            { text: "Array", correct: false },
        ]
    },
    {
        question: "The data structure required to check whether an expression contains a balanced parenthesis is?",
        answers: [
            { text: "Queue", correct: false},
            { text: "Stack", correct: true},
            { text: "Tree", correct: false},
            { text: "Array", correct: false},
        ]
    },
    {
        question: "Which of the following is not the application of stack?",
        answers: [
            { text: "Data Transfer between two asynchronous process", correct: true},
            { text: "Compiler Syntax Analyzer", correct: false},
            { text: "Tracking of local variables at run time", correct: false},
            { text: "A parenthess balancing program", correct: false},
        ]
    },

    {
        question: "Which data structure is needed to conert infix notation to postfix notation?",
        answers: [
            { text: "Tree", correct: false},
            { text: "Branch", correct: false},
            { text: "Stack", correct: false},
            { text: "Queue", correct: false},
        ]
    },
    {
        question: "What is the value of the postfix expression 6324+-*?",
        answers: [
            { text: "74", correct: false},
            { text: "-18", correct: true},
            { text: "22", correct: false},
            { text: "40", correct: false},
        ]
    },
    {
        question: "What data structure would you mostly likely see in non recursive implementation of a recursive algorithm?",
        answers: [
            { text: "Stack", correct: true},
            { text: "Linked List", correct: false},
            { text: "Tree", correct: false},
            { text: "Queue", correct: false},
        ]
    },
    {
        question: "The data structure required for Breadth First Traversal on a graph is?",
        answers: [
            { text: "Array", correct: false},
            { text: "Stack", correct: false},
            { text: "", correct: false},
            { text: "", correct: false},
        ]
    },
    {
        question: "Which data structure is based on the Last In First Out (LIFO) principle?",
        answers: [
            { text: "Tree", correct: false},
            { text: "Linked List", correct: false},
            { text: "Stack", correct: true},
            { text: "Queue", correct: false},
        ]
    },
    {
        question: "Which of the following application makes use of a circular linked list?",
        answers: [
            { text: "Recursive function calls", correct: false},
            { text: "Undo operation in a text editor", correct: false},
            { text: "Implement Hash Tables", correct: false},
            { text: "Allocating CPU to resources", correct: true},
        ]
    }, 
    
    {
        question: "What is a bit array?",
        answers: [
            { text: "Data structure that compactly stores bits", correct: true},
            { text: "Data structure for representing array of records", correct: false},
            { text: "Array in which elements are not present in continuous locations", correct: false},
            { text: "An array in which most of the elements have the same value", correct: false},
        ]
    },
    {
        question: "Which of the following tree data structures is not a balanced binary tree?",
        answers: [
            { text: "Splay tree", correct: false},
            { text: "B-tree", correct: true},
            { text: "AVL tree", correct: false},
            { text: "Red-black tree", correct: false},
        ]
    },
    {
        question: "Which of the following is not the type of queue?",
        answers: [
            { text: "Priority queue", correct: false},
            { text: "Corcular queue", correct: false},
            { text: "Single ended queue", correct: true},
            { text: "Ordinary queue", correct: false},
        ]
    },
    {
        question: "Which algorithm is used in the top tree data structure?",
        answers: [
            { text: "Backtracking", correct: false},
            { text: "Divide and Conquer", correct: true},
            { text: "Branch", correct: false},
            { text: "Greedy", correct: false},
        ]
    },

    {
        question: "What is the need for a circular queue?",
        answers: [
            { text: "easier computetions", correct: false},
            { text: "implement LIFO principle in queues", correct: false},
            { text: "effective usage of memory", correct: true},
            { text: "to delete elements based on priority", correct: false},
        ]
    },
    {
        question: "Which of the following is the most widely used external memory data structure?",
        answers: [
            { text: "B-tree", correct: true},
            { text: "Red-black tree", correct: false},
            { text: "AVL tree", correct: false},
            { text: "Both AVL tree and Red-black tree", correct: false},
        ]
    },

    {
        question: "Which of the following is also known as Rope data structure?",
        answers: [
            { text: "Linked List", correct: false},
            { text: "Array", correct: false},
            { text: "String", correct: false},
            { text: "Cord", correct: true},
        ]
    },
    {
        question: "Which of the following data structure can provide efficient searching of the elements",
        answers: [
            { text: "binary search tree", correct: false},
            { text: "unordered lists", correct: false},
            { text: "2-3 tree", correct: true},
            { text: "treap", correct: false},
        ]
    },
    {
        question: "What is the time complexity for searching a key or integer in Van Emde Boas data structure?",
        answers: [
            { text: "O (M!)", correct: false},
            { text: "O (log M!)", correct: false},
            { text: "O (log (log M))", correct: true},
            { text: "O (M2)", correct: false},
        ]
    },

    {
        question: "The optimal data structure used to solve Tower of Hanoi is?",
        answers: [
            { text: "Tree", correct: false},
            { text: "Heap", correct: false},
            { text: "Priority queue", correct: true},
            { text: "Stack", correct: true},
        ]
    },
    {
        question: "What is the use of the bin data structure?",
        answers: [
            { text: "to have efficient traversal", correct: false},
            { text: "to have efficient region queue", correct: true},
            { text: "to have efficient deletion", correct: true},
            { text: "to have efficient insertion", correct: false},
        ]
    },
    {
        question: "Which is the most appropriate data structure for reversing a word?",
        answers: [
            { text: "Stack", correct: true},
            { text: "Queue", correct: false},
            { text: "Graph", correct: true},
            { text: "Tree", correct: false},
        ]
    },
    {
        question: "Which of the following is the simplest data structure that supports range searching?",
        answers: [
            { text: "AA-trees", correct: false},
            { text: "K-d trees", correct: true},
            { text: "Heaps", correct: true},
            { text: "binary search trees", correct: false},
        ]
    },
    {
        question: "Which type of data structure is a ternary heap?",
        answers: [
            { text: "Hash", correct: false},
            { text: "Array", correct: false},
            { text: "Priority Stack", correct: true},
            { text: "Priority Queue", correct: false},
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
