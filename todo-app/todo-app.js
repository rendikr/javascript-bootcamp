// DOM Manipulation

let todoList = getSavedTodoList();

const filters = {
  searchText: '',
  hideCompleted: false,
};

renderTodoList(todoList, filters);

document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value;
  renderTodoList(todoList, filters);
});

document.querySelector('#new-todo').addEventListener('submit', function (e) {
  e.preventDefault();
  const newTodo = e.target.elements.newTodo.value;
  todoList.push({
    id: uuidv4(),
    text: newTodo,
    completed: false,
  });

  e.target.elements.newTodo.value = '';
  saveTodoList(todoList);
  renderTodoList(todoList, filters);
});

document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    filters.hideCompleted = e.target.checked;
    renderTodoList(todoList, filters);
  });
