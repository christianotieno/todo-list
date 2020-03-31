let todoTitleInput = document.querySelector('#todo-title').value;
let todoDescriptionInput = document.querySelector('#todo-description').value;
let todoDateInput = document.querySelector('#todo-date').value;
let todoPriorityInput = document.querySelector('#todo-priority').value;

const getTodoInput = () => ({
  todoTitleInput, todoDescriptionInput, todoDateInput, todoPriorityInput,
});

const clearTodoField = () => {
  todoTitleInput = '';
  todoDescriptionInput = '';
  todoDateInput = '';
  todoPriorityInput = '';
};

export { getTodoInput, clearTodoField };