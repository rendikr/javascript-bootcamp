let temp = 55

// logical and operator : true if both sides are true. false otherwise
if (temp >= 60 && temp <= 90) {
  console.log('it is pretty nice out.')
} else if (temp <= 0 || temp >= 120) {
  console.log('do not go outside')
} else {
  console.log('eh. do what you want')
}

// Challenge
let isGuestOneVegan = true
let isGuestTwoVegan = false

// are both vegan ?
// at least one vegan ?
if (isGuestOneVegan && isGuestTwoVegan) {
  console.log('offer vegan menu')
} else if (isGuestOneVegan || isGuestTwoVegan) {
  console.log('offer some vegan menu')
} else {
  console.log('offer anything on the menu')
}

