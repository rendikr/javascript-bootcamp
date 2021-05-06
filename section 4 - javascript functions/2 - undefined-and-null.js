// undefined for variable
let name

if (name === undefined) {
  console.log('please provide a name')
} else {
  console.log(name)
}

// undefined for function arguments
// undefined as function return default value
let squareRoot = function (num) {
  console.log(num)
}

let result = squareRoot()
console.log(result)

// null as assigned value
let age = 31
age = null
console.log(age)
