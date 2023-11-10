const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice"));

let currentQuestion = {};
let acceptingAnswer = false;
let availableQuestions = [];

const questions = new loadQuestions();
console.log(questions);

async function loadQuestions() {
    const response = await fetch('questions.json', {
        credentials: "same-origins",
    });
    const questions = await response.json();
    return questions;
}