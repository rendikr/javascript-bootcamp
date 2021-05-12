// DOM - Document Object Model

const notes = [
  {
    title: 'My next trip',
    body: 'I would like to go to Spain',
  },
  {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better',
  },
  {
    title: 'Office modification',
    body: 'Get a new seat',
  },
]

// Query and remove
// note: if there are two <p> element, only the first one will be affected
// const p = document.querySelector('p')
// console.log(p)
// p.remove()

// Query all and remove
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//   p.textContent = 'Changing the value from javascript'
//   console.log(p.textContent)
//   p.remove()
// })

// add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This is a new element from Javascript'
// document.querySelector('body').appendChild(newParagraph)

document.querySelector('#btn-add').addEventListener('click', function (e) {
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#btn-remove-all').addEventListener('click', function (e) {
  document.querySelectorAll('note').forEach(function (note) {
    note.remove()
  })
})
