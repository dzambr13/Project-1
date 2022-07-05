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
var headOne = mineCraft * 6
var headTwo = mineCraft * 6

// Speed of the sneaky snake
var fastNine = 0
var fastEight = 0
var theSnake = []

// Randomization

function snakeBite() {
  gaStu = Math.floor(Math.random() * leftRight) * mineCraft
  gaStud = Math.floor(Math.random() * upDown) * mineCraft
}

function moveAround(d) {
  if (d.code == 'ArrowUp' && fastEight != 1) {
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
  setInterval(update, 1000 / 10)
}

function update() {
  if (youLost) {
    return
  }

  slither.fillStyle = 'black'
  slither.fillRect(0, 0, map.width, map.height)

  slither.fillStyle = 'red'
  slither.fillRect(gaStu, gaStud, mineCraft, mineCraft)

  if (headOne == gaStu && headTwo == gaStud) {
    theSnake.push([gaStu, gaStud])
    snakeBite()
  }

  for (let i = theSnake.length - 1; i > 0; i--) {
    theSnake[i] = theSnake[i - 1]
  }
  if (theSnake.length) {
    theSnake[0] = [headOne, headTwo]
  }

  slither.fillStyle = 'white'
  headOne += fastNine * mineCraft
  headTwo += fastEight * mineCraft
  slither.fillRect(headOne, headTwo, mineCraft, mineCraft)
  //   console.log(fastNine)
  for (let i = 0; i < theSnake.length; i++) {
    slither.fillRect(theSnake[i][0], theSnake[i][1], mineCraft, mineCraft)
  }

  // Having trouble making the game over conditions
  if (
    headOne < 0 ||
    headOne > leftRight * mineCraft ||
    headTwo < 0 ||
    headTwo > upDown * mineCraft
  ) {
    youLost = true
    alert('You Lost')
  }

  for (let i = 0; i < theSnake.length; i++) {
    if (headOne == theSnake[i][0] && headTwo == theSnake[i][1]) {
      youLost = true
      alert('You lost')
    }
  }
}
