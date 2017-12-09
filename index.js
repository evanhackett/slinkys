var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

let SIZE = 200
let INTERVAL = 50
let NUM_CIRCLES = 7

const width = 500
const height = 500


function draw() {
  var expand1 = 1
  var x = Math.random()*width
  var y = Math.random()*height

  return function() {
    if (expand1 < SIZE) {
      ctx.beginPath();
      ctx.arc(x, y, 0+expand1,0,2*Math.PI);
      ctx.strokeStyle = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`
      ctx.stroke();
      expand1 = expand1 + 1
    }
  }
}

function execute() {
  for (var i = 0; i < NUM_CIRCLES; i++) {
    window.setInterval(draw(), INTERVAL)
  }
}

const form = document.getElementById('form')

const sizeInput = document.getElementById('size-input')
const speedInput = document.getElementById('speed-input')
const amountInput = document.getElementById('amount-input')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  SIZE = Number(sizeInput.value)
  INTERVAL = Number(speedInput.value)
  NUM_CIRCLES = Number(amountInput.value)
  execute()
})



