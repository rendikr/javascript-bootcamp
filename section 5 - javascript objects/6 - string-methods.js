let fullName = '  Andrew Mead   '

// length property
console.log(fullName.length)

// convert to upper case
console.log(fullName.toUpperCase())

// convert to lower case
console.log(fullName.toLowerCase())

// includes method
let password = 'abc123password098'
console.log(password.includes('password'))

// trim
console.log(fullName.trim())

// Challenge
// isValidPassword : length >= 8, doesn't contain the word 'password'
let isValidPassword = function (password) {
  let result = false
  if (password.length > 8 && !password.includes('password')) {
    result = true
  }

  return result
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('abc123!@#$%^&'))
console.log(isValidPassword('asdfpdwqpdoqpassword'))
