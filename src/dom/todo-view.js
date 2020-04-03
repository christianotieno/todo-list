const toggleTodoForm = () => {
  const form = document.getElementById('todo-form');
  const toggleForm = document.getElementById('toggle-todo-form');

  if (form.style.display === 'block') {
    form.style.display = 'none';
    toggleForm.innerHTML = 'Add Your Todos here';
  } else {
    form.style.display = 'block';
    toggleForm.innerHTML = 'Close form';
  }
}

export { toggleTodoForm };