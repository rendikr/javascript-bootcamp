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
const ps = document.querySelectorAll('p')

ps.forEach(function (p) {
  if (p.textContent.toLowerCase().includes('the')) {
    p.remove()
  }
})

const incompleteTodos = todos.filter(function (todo) {
  return !todo.completed
})
let incompleteTodo = incompleteTodos.length

const summary = document.createElement('h2')
summary.textContent = `You have ${incompleteTodo} todos left`
document.querySelector('body').appendChild(summary)

todos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('body').appendChild(p)
})
