const getSavedTodoList = function () {
  const todoJSON = localStorage.getItem('todoList')

  if (todoJSON !== null) {
    return JSON.parse(todoJSON)
  }

  return []
}

const saveTodoList = function (todoList) {
  localStorage.setItem('todoList', JSON.stringify(todoList))
}

const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('p')

  if (todo.text.length > 0) {
    todoEl.textContent = todo.text
  } else {
    todoEl.textContent = 'Unnamed todo'
  }

  return todoEl
}

const generateTodoSummaryDOM = function (filteredTodoList) {
  const incompleteTodoList = filteredTodoList.filter(function (todo) {
    return !todo.completed
  })

  const summary = document.createElement('h2')
  summary.textContent = `You have ${incompleteTodoList.length} todo left`
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

  const summaryEl = generateTodoSummaryDOM(filteredTodoList)
  document.querySelector('#todo-list').appendChild(summaryEl)

  filteredTodoList.forEach(function (todo) {
    const todoEl = generateTodoDOM(todo)
    document.querySelector('#todo-list').appendChild(todoEl)
  })
}
