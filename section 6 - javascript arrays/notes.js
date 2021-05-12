const notes = ['Note 1', 'Note 2', 'Note 3']

// remove the first item from an array
notes.shift()

// remove the last item from an array
notes.pop()

// insert a new item as the first item of an array
notes.unshift('My first note')

// insert a new item into the end of an array
notes.push('My new note')

console.log(notes)

// remove an item from an array
notes.splice(1, 1)

// add an item from an array
notes.splice(1, 0, 'My new second note')

console.log(notes)
console.log(notes.length)

notes.forEach(function (item, index) {
  console.log(`${index}: ${item}`)
})

for (let count = 0; count <= 2; count++) {
  console.log(`counting... ${count + 1}`)
}

for (let index = 0; index < notes.length; index++) {
  const note = notes[index]
  console.log(note)
}

// find the index of an item in the array
console.log(notes.indexOf('My new second note'))

const newNotes = [
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

console.log(newNotes);

const sortNotes = function (notes) {
  notes.sort(function (a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1 // this will put a before b
    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
      return 1 // this will put a after b
    } else {
      return 0 // this will not change the ordering as a equal to b
    }
  })
}

// returns the found index in the array of objects
const index = newNotes.findIndex(function (note, index) {
  return note.title === 'Office modification'
})

const findNoteUsingFind = function (notes, noteTitle) {
  // array.find will return the object searched
  return notes.find(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })
}

const findNoteUsingFindIndex = function (notes, noteTitle) {
  // array.findIndex will return the index of array item searched
  const index = notes.findIndex(function (note) {
    return note.title.toLowerCase() === noteTitle.toLowerCase()
  })

  return notes[index]
}

const findNotesUsingFilter = function (notes, query) {
  // array.filter will return an array with item matches with search query
  return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())

    return isTitleMatch || isBodyMatch
  })
}

console.log(findNoteUsingFind(newNotes, 'office modification'))
console.log(findNoteUsingFindIndex(newNotes, 'office modification'))
console.log(findNotesUsingFilter(newNotes, 'ne'))
