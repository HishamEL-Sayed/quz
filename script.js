const quizData = [
    {
    question:"How Old Is Cristiano Ronaldo ?",
        a:"10",
        b:"30",
        c:"38",
        d:"120",
        correct:"c"

    },
    {
        question:"What Is Best programming Language In 2013 ?",
        a:"C",
        b:"Java",
        c:"C++",
        d:"Php",
        correct:"a",
    },
    {
        question:"What Is Best programming Language In 2023 ?",
        a:"Sql",
        b:"Java Script",
        c:"Go",
        d:"Python",
        correct:"b",
    },
    {
        question:"Who is the 2023 Champions League champion ?",
        a:"Liverpool",
        b:"Tottenham",
        c:"Aston Villa",
        d:"City Football Club ",
        correct:"d",
        
    },
    {
        question:"The best book on the history of a programming language ?",
        a:"History of Programming Languages",
        b:"Programming Languages: History and Fundamentals",
        c:"Zoo book",
        d:"History of English Languages",
        correct:"b",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btnBack = document.getElementById("btn_back");
const submitBtn = document.getElementById("submit");


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}



 
submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        
        currentQuiz++;
        
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
            <div class="quiz">
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button class="btn" onclick="location.reload()">Reload</button>
            
            </div>   `;
        }
    }
});

