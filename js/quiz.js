// js/quiz.js

const questions = [
    {
        question: "¿que es la geodesia?",
        choices: ["ciencia que estudia las formas y dimenciones de la tierra ", "disiplina que estudia el nivel del mar", "disiplina que estudia formas", "ninguna de las anteriores"],
        correctAnswer: "ciencia que estudia las formas y dimenciones de la tierra"
    },
    {
        question: "¿la base del sistema gps es?",
        choices: ["distancia de gps", "numero de satelites", "navegacion por satelite", "la triangulacion de satelites"],
        correctAnswer: "la triangulacion de satelites"
    },
    {
        question: "¿Cuál de estos no es un lenguaje de programacion?",
        choices: ["python", "java", "html", "pascual"],
        correctAnswer: "pascual"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    document.getElementById('introduction').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-title').textContent = question.question;

    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    
    question.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice;
        button.onclick = () => checkAnswer(choice);
        choicesContainer.appendChild(button);
    });
}

function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (answer === question.correctAnswer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function nextQuestion() {
    showQuestion();
}

function showResults() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('results').style.display = 'block';
    document.getElementById('score').textContent = `Tu puntuación es: ${score} de ${questions.length}`;
}

function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById('results').style.display = 'none';
    document.getElementById('introduction').style.display = 'block';
}
