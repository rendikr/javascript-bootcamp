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
console.log(`Todo: ${todos[0]}`)
console.log(`Todo: ${todos[todos.length - 2]}`)
