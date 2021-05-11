let num = 103.941

// limit the decimal digits
console.log(num.toFixed(2))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

// get random number between two numbers
let min = 10
let max = 20
let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

// Challenge
let guessNumber = function (guessNum) {
  let min = 0
  let max = 5
  let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

  return guessNum === randomNum
}

console.log(guessNumber(3))
