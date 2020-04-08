
const getTodoInput = () => {
  const todoTitleInput = document.querySelector('#todo-title').value;
  const todoDescriptionInput = document.querySelector('#todo-description').value;
  const todoDateInput = document.querySelector('#todo-date').value;
  let todoPriorityInput = '';

  const radioInputs = document.getElementsByName('priority');

  radioInputs.forEach(input => {
    if (input.checked) {
      todoPriorityInput = input.value;
    }
  });
  let value = false;
  const emptyCheckDiv = document.querySelector('#todo-empty-check');
  if (todoTitleInput === '' || todoDescriptionInput === '' || todoDateInput === '') {
    emptyCheckDiv.classList.remove('d-none');
    setTimeout(() => { emptyCheckDiv.classList.add('d-none'); }, 3000);
  } else {
    value = {
      todoTitleInput, todoDescriptionInput, todoDateInput, todoPriorityInput,
    };
  }
  return value;
};

const clearTodoField = () => {
  document.querySelector('#todo-title').value = '';
  document.querySelector('#todo-description').value = '';
  document.querySelector('#todo-date').value = '';
};

export { getTodoInput, clearTodoField };