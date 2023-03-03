const calculateRandomNumber = () => {
    return Math.trunc(1 + Math.random() * 20)
}

const checkNumber = () => {
    if(!checkInput.value) {
        message.textContent = '⛔️ No number'
    } else if (checkInput.value === randomNumber) {
        message.textContent = '🎉️ Correct number'
    } else if (checkInput.value !== randomNumber) {
        if (score >= 1) {
            message.textContent = checkInput.value > randomNumber ? 'Too high!' : 'Too low!'
            score--
            scoreField.textContent = score.toString()
        } else {
            message.textContent = '😭 You lose'
            score = 0
            scoreField.textContent = score.toString()
        }
    }
}

const checkInput = document.querySelector('.guess')
const checkBtn = document.querySelector('.btn.check')
const message = document.querySelector('.message')
const number = document.querySelector('.number')
const scoreField = document.querySelector('.score')

let randomNumber = calculateRandomNumber()
let score = 20;

checkBtn.addEventListener('click', checkNumber)

number.textContent = randomNumber.toString()