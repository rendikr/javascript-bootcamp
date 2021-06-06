const getSavedTodoList = function () {
  const todoJSON = localStorage.getItem('todoList');

  if (todoJSON !== null) {
    return JSON.parse(todoJSON);
  }

  return [];
};

const saveTodoList = function (todoList) {
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

const removeTodo = function (id) {
  const todoIndex = todoList.findIndex(function (todo) {
    return todo.id === id;
  });

  if (todoIndex > -1) {
    todoList.splice(todoIndex, 1);
  }
};

const renderTodoList = function (todoList, filters) {
  let filteredTodoList = todoList.filter(function (todo) {
    const searchTextMatch = todo.text
      .toLowerCase()
      .includes(filters.searchText.toLowerCase());
    const hideCompletedMatch = !filters.hideCompleted || !todo.completed;
    debugger;
    return searchTextMatch && hideCompletedMatch;
  });

  const incompleteTodoList = filteredTodoList.filter(function (todo) {
    return !todo.completed;
  });

  document.querySelector('#todo-list').innerHTML = '';

  const incompleteEl = generateTodoSummaryDOM(incompleteTodoList);
  document.querySelector('#todo-list').appendChild(incompleteEl);

  // const summaryEl = generateTodoSummaryDOM(filteredTodoList);
  // document.querySelector('#todo-list').appendChild(summaryEl);

  filteredTodoList.forEach(function (todo) {
    const todoEl = generateTodoDOM(todo);
    document.querySelector('#todo-list').appendChild(todoEl);
  });
};

const generateTodoDOM = function (todo) {
  const todoEl = document.createElement('div');
  const checkboxEl = document.createElement('input');
  const textEl = document.createElement('span');
  const remoteButtonEl = document.createElement('button');

  // set the attribute for checkboxEl input
  checkboxEl.setAttribute('type', 'checkbox');

  // setup the checkbox
  todoEl.appendChild(checkboxEl);

  // setup the todo title
  if (todo.text.length > 0) {
    textEl.textContent = todo.text;
  } else {
    textEl.textContent = 'Unnamed todo';
  }

  todoEl.appendChild(textEl);

  // setup the remove button
  remoteButtonEl.textContent = 'x';
  todoEl.appendChild(remoteButtonEl);
  remoteButtonEl.addEventListener('click', function () {
    removeTodo(todo.id);
    saveTodoList(todoList);
    renderTodoList(todoList, filters);
  });

  return todoEl;
};

const generateTodoSummaryDOM = function (filteredTodoList) {
  const incompleteTodoList = filteredTodoList.filter(function (todo) {
    return !todo.completed;
  });

  const summary = document.createElement('h2');
  summary.textContent = `You have ${incompleteTodoList.length} todo left`;
};
