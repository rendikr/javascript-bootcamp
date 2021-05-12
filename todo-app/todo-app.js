// DOM Manipulation

const todos = [
  {
    text: 'Order cat food',
    completed: true,
  },
  {
    text: 'Clean the kitchen',
    completed: false,
  },
  {
    text: 'Buy food',
    completed: true,
  },
  {
    text: 'Do work',
    completed: false,
  },
  {
    text: 'Exercise',
    completed: true,
  },
]

// Query all
// const ps = document.querySelectorAll('p')

// ps.forEach(function (p) {
//   if (p.textContent.toLowerCase().includes('the')) {
//     p.remove()
//   }
// })

const filters = {
  searchText: '',
  hideCompleted: false,
}

const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  document.querySelector('#todos').innerHTML = ''

  const incompleteTodos = filteredTodos.filter(function (todo) {
    return !todo.completed
  })
  let incompleteTodo = incompleteTodos.length

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodo} todos left`
  document.querySelector('#todos').appendChild(summary)

  filteredTodos.forEach(function (todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    document.querySelector('#todos').appendChild(todoEl)
  })
}

renderTodos(todos, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  const newTodo = e.target.elements.newTodo.value
  todos.push({
    text: newTodo,
    completed: false,
  })
  e.target.elements.newTodo.value = ''

  renderTodos(todos, filters)
})

document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
  })
