const elQuestion = document.querySelector(".question")
const question = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon."

elQuestion.textContent = question

const userAnswer = prompt(question)

const elAnswerText = document.querySelector(".answer__text")
elAnswerText.textContent = userAnswer

const elAnswer = document.querySelector(".answer")

if (userAnswer === "Bell") {
    elAnswer.classList.add("answer--correct")
} else {
    elAnswer.classList.add("answer--wrong")
}