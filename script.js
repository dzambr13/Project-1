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

// The snake cannot go back the direction that it is going
// If you spam the arrow keys it'll eat itself, try fix
function moveAround(d) {
  if (d.code === 'ArrowUp' && fastEight != 1) {
    fastNine = 0
    fastEight = -1
  } else if (d.code === 'ArrowDown' && fastEight != -1) {
    fastNine = 0
    fastEight = 1
  } else if (d.code === 'ArrowLeft' && fastNine != 1) {
    fastNine = -1
    fastEight = 0
  } else if (d.code === 'ArrowRight' && fastNine != -1) {
    fastNine = 1
    fastEight = 0
  }
}

window.onload = function () {
  map = document.getElementById('map')
  map.height = upDown * mineCraft
  map.width = leftRight * mineCraft
  slither = map.getContext('2d')

  snakeBite()
  document.addEventListener('keyup', moveAround)
  setInterval(goGo, 1000 / 10)
}

function goGo() {
  if (youLost) {
    return
  }

  // Map and food color
  slither.fillStyle = 'black'
  slither.fillRect(0, 0, map.width, map.height)
  scoreBoard()

  slither.fillStyle = 'lightgrey'
  slither.fillRect(gaStu, gaStud, mineCraft, mineCraft)
  // When the snake eats the food, it grows
  // When the snake eats the food, score also should increase
  if (headOne == gaStu && headTwo == gaStud) {
    theSnake.push([gaStu, gaStud])
    score++
    snakeBite()
  }
