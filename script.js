// Losing variable
var youLost = false

// Creating the map for the snake and the food
var map
var slither
const mineCraft = 25
const upDown = 25
const leftRight = 25
var gaStu
var gaStud

// Front of the snake or the start of it before it starts to grow
let headOne = mineCraft * 6
let headTwo = mineCraft * 6

// Speed of the sneaky snake
var fastNine = 0
var fastEight = 0
var theSnake = []

// Scoreboard
// Why wont this shit show T_T
// Fixed: put scoreboard with the board so it appears above it not below
let score = 0

// Randomization
function snakeBite() {
  gaStu = Math.floor(Math.random() * leftRight) * mineCraft
  gaStud = Math.floor(Math.random() * upDown) * mineCraft
}
// Resetting
const restartButton = document.getElementById('restartButton')
// const restartGame = () => {
//   window.location.reload()
// }

restartButton.addEventListener('click', () => window.location.reload())
