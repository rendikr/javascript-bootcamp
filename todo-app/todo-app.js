// DOM Manipulation

let todoList = []

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

const todoJSON = localStorage.getItem('todoList')

if (todoJSON !== null) {
  todoList = JSON.parse(todoJSON)
}

const renderTodoList = function (todoList, filters) {
  let filteredTodoList = todoList.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase())
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed

    return searchTextMatch && hideCompletedMatch
  })

  document.querySelector('#todo-list').innerHTML = ''

  const incompleteTodoList = filteredTodoList.filter(function (todo) {
    return !todo.completed
  })
  let incompleteTodo = incompleteTodoList.length

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodo} todo left`
  document.querySelector('#todo-list').appendChild(summary)

  filteredTodoList.forEach(function (todo) {
    const todoEl = document.createElement('p')
    todoEl.textContent = todo.text
    document.querySelector('#todo-list').appendChild(todoEl)
  })
}

renderTodoList(todoList, filters)

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodoList(todoList, filters)
})

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  const newTodo = e.target.elements.newTodo.value
  todoList.push({
    text: newTodo,
    completed: false,
  })
  localStorage.setItem('todoList', JSON.stringify(todoList))
  e.target.elements.newTodo.value = ''

  renderTodoList(todoList, filters)
})

document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked
    renderTodoList(todoList, filters)
  })
