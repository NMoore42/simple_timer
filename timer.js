//APP CONSTANTS
const time = document.getElementById("count")
const workOrRest = document.querySelector("h2")
const alert = new Audio('ship_bell.mp3')
let count

//APP SETTINGS
const setWorkout = 45
const setRest = 15
let rest = false

//FUNCTIONS
function countDown(){
  if (count < 1){
    rest ? toggleWorkout(setWorkout, "workout") : toggleWorkout(setRest, "rest")
    rest = !rest
    alert.play()
  } else count -= 1
  time.innerHTML = count
}

function toggleWorkout(countTime, className){
  count = countTime
  document.body.className = className
  workOrRest.innerHTML = className.toUpperCase()
}

function startApp(){
  time.innerHTML = setWorkout
  toggleWorkout(setWorkout, "workout")
  setInterval(countDown, 1000)
}

//INVOKED FUNCTIONS
startApp()
