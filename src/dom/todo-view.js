import { removeTodo } from './update-view';

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
};

const todoListner = (listOfProjects) => {
  const deleteTodo = document.querySelectorAll('.delete-todo');
  deleteTodo.forEach(deleteTodoBtn => {
    deleteTodoBtn.onclick = (e) => {
      if (e.target.nodeName === 'BUTTON') {
        const project = listOfProjects.projectList.find(
          project => e.target.parentElement.parentElement
            .parentElement.parentElement.parentElement.id === project.id.toString(),
        );
        const todo = project.todos.find(todo => e.target.parentElement.id === todo.id.toString());
        project.deleteTodo(todo);
        listOfProjects.updateLocalStorage();
        removeTodo(e.target.parentElement);
      }
    };
  });
};

export { toggleTodoForm, todoListner };