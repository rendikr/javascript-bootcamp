// global scope (convertFahrenheitToCelcius, tempOne, tempTwo)
  // local scope (fahrenheit, celcius)
    // local scope (isFreezing)

let convertFahrenheitToCelcius = function (fahrenheit) {
  let celcius = (fahrenheit - 32) * 5 / 9

  if (celcius <= 0) {
    let isFreezing = true
  }

  return celcius
}

let celcius = convertFahrenheitToCelcius(68)
console.log(celcius)
