// DOM - Document Object Model

// Query and remove
// note: if there are two <p> element, only the first one will be affected
const p = document.querySelector('p')
console.log(p)
p.remove()

// Query all and remove
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
  p.textContent = 'Changing the value from javascript'
  console.log(p.textContent)
  p.remove()
})
