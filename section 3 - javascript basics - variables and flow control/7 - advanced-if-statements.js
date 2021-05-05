let isAccountLocked = false
let userRole = 'admin'

if (isAccountLocked) {
  console.log('account locked!')
} else if (userRole === 'admin') {
  console.log('welcome admin!')
} else {
  console.log('welcome!')
}

// Challenge
let temp = 45

if (temp <= 32) {
  console.log('it is freezing outside!')
} else if (temp >= 100) {
  console.log('it is way too hot outside!')
} else {
  console.log('it is a nice weather')
}
