let name = 'Andrew'
console.log(`Hey, my name is ${name}`)

// Challenge area
let getTip = function (bill, tipPercent = .2) {
  let percent = tipPercent * 100
  let tip = bill * tipPercent
  return `A ${percent}% tip on $${bill} would be $${tip}`
}

let tip = getTip(40, .25)
console.log(tip)
