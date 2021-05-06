let greetUser = function () {
  console.log('Hello user!')
}

greetUser()

let squareRoot = function (num) {
  let result = num * num
  return result
}

let value = squareRoot(3)
console.log(value)

// Challenge
let convertFahrenheitToCelcius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9
  return celcius
}

let celcius = convertFahrenheitToCelcius(68)
console.log(celcius)
