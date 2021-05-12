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

const filters = {
  searchText: '',
}

// localStorage.setItem('location', 'Philadelphia')

// console.log(localStorage.getItem('location'))

// localStorage.removeItem('location')

// localStorage.clear()

const user = {
  name: 'Rendi K.',
  age: '31',
}
const userJSON = JSON.stringify(user)
localStorage.setItem('user', userJSON)

const userLocalStorage = localStorage.getItem('user')
const parsedUser = JSON.parse(userLocalStorage)
console.log(`${user.name} is ${user.age} years old`)

const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  // clear existing notes
  document.querySelector('#notes').innerHTML = ''

  // display filtered notes
  filteredNotes.forEach(function (note) {
    const noteEl = document.createElement('p')
    noteEl.textContent = note.title
    document.querySelector('#notes').appendChild(noteEl)
  })
}

renderNotes(notes, filters)

document.querySelector('#btn-add').addEventListener('click', function (e) {
  e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  console.log(e.target.value)
})
