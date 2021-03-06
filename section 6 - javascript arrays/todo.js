// create an array with five todos
const todos = [
  {
    text: 'Todo A',
    completed: true,
  },
  {
    text: 'Todo B',
    completed: false,
  },
  {
    text: 'Todo C',
    completed: true,
  },
  {
    text: 'Todo D',
    completed: false,
  },
  {
    text: 'Todo E',
    completed: true,
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

// create function to get all todos that aren't completed yet
const getThingsToDo = function (todos) {
  return todos.filter(function (todo, index) {
    return !todo.completed
  })
}

// create function to sort todos
const sortTodos = function (todos) {
  return todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (a.completed && !b.completed) {
      return 1
    } else {
      return 0
    }
  })
}

// deleteTodo(todos, 'Todo D')
console.log(todos)
console.log(getThingsToDo(todos))
console.log(sortTodos(todos))
