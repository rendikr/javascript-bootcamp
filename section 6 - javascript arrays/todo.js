// create an array with five todos
const todos = [
  {
    text: 'Todo A',
    completed: false,
  },
  {
    text: 'Todo B',
    completed: false,
  },
  {
    text: 'Todo C',
    completed: false,
  },
  {
    text: 'Todo D',
    completed: false,
  },
  {
    text: 'Todo E',
    completed: false,
  },
]

// create function to remove a todo by text value
const deleteTodo = function (todos, todoValue) {
  const index = todos.findIndex(function (todo) {
    return todo.text.toLowerCase() === todoValue.toLowerCase()
  })

  if (index > 0) {
    todos.splice(index, 1)
  }
}

deleteTodo(todos, 'Todo D')
console.log(todos)
