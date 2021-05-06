// multiple arguments
let add = function (a, b) {
  return a + b
}

let result = add(10, 4)
console.log(result)

// default arguments
let getScoreText = function (name = 'user', score = 0) {
  return name + ' has scored ' + score
}

let scoreText = getScoreText('Andrew', 80)
console.log(scoreText)

// Challenge
let getTip = function (bill, tipPercent = 0.1) {
  let result = bill * tipPercent
  return result
}

let tip = getTip(100, 0.2)
console.log(giveTip)
