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
