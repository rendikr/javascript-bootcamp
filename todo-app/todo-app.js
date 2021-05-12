// DOM Manipulation

// Query all
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
  if (p.textContent.toLowerCase().includes('the')) {
    p.remove()
  }
})
