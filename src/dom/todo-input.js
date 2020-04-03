
const getTodoInput = () => {
  const todoTitleInput = document.querySelector('#todo-title').value;
  const todoDescriptionInput = document.querySelector('#todo-description').value;
  const todoDateInput = document.querySelector('#todo-date').value;
  const todoPriorityInput = document.querySelector('#todo-priority').value;

  return {
    todoTitleInput, todoDescriptionInput, todoDateInput, todoPriorityInput,
  };
};

const clearTodoField = () => {
  document.querySelector('#todo-title').value = '';
  document.querySelector('#todo-description').value = '';
  document.querySelector('#todo-date').value = '';
};

export { getTodoInput, clearTodoField };