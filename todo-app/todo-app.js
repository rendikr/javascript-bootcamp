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
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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

// listen for a new todo creation
document.querySelector('#btn-add').addEventListener('click', function (e) {
  console.log('add a new todo')
})

document.querySelector('#input-text').addEventListener('input', function (e) {
  console.log(e.target.value)
})

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})
