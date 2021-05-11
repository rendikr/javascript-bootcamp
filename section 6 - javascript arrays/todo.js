// create an array with five todos
const todos = ['Todo A', 'Todo B', 'Todo C', 'Todo D', 'Todo E']

// delete the 3rd item
todos.splice(2, 1)

// add a new item onto the end
todos.push('Todo F')

// remove the first item
todos.shift()

console.log(`You have ${todos.length} todos`)
console.log(`${todos}`)

todos.forEach(function (item, index) {
  const num = index + 1
  console.log(`${num}. ${item}`)
})
