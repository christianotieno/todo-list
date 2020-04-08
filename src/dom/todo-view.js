import { removeTodo, removeProject } from './update-view';
import { clearTodoField } from './todo-input';

const toggleTodoForm = () => {
  const form = document.getElementById('todo-form');
  const toggleForm = document.getElementById('toggle-todo-form');

  if (form.style.display === 'block') {
    form.style.display = 'none';
    toggleForm.innerHTML = 'Add Your Todos here';
  } else {
    clearTodoField();
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

const projectListner = (listOfProjects) => {
  const deleteProject = document.querySelectorAll('.delete-project');

  deleteProject.forEach(deleteProjectBtn => {
    deleteProjectBtn.onclick = (e) => {
      if (e.target.nodeName === 'BUTTON') {
        const project = listOfProjects.projectList
          .find(project => e.target.parentElement.id === project.id.toString());
        listOfProjects.removeProject(project);
        listOfProjects.updateLocalStorage();
        removeProject(e.target.parentElement);
      }
    };
  });
};

const editTodoListner = (listOfProjects) => {
  const editTodos = document.querySelectorAll('.edit-todo');

  editTodos.forEach(editTodo => {
    editTodo.addEventListener('click', (element) => {
      listOfProjects.projectList.map(project => {
        project.todos.map(todo => {
          if (todo.id.toString() === element.target.parentElement.id) {
            toggleTodoForm();
            document.querySelector('#todo-title').value = todo.title;
            document.querySelector('#todo-description').value = todo.description;
            document.querySelector('#todo-date').value = todo.dueDate;
            document.getElementById('update-todo').classList.remove('d-none');
            document.getElementById('update-todo').setAttribute('data-id', todo.id.toString());
          }
          return false;
        });
        return false;
      });
    });
  });
};

const checkedListner = () => {
  const checkTodos = document.querySelectorAll('.title');

  checkTodos.forEach(checkTodo => {
    checkTodo.addEventListener('click', (element) => {
      if (element.target.style.textDecoration === 'line-through') {
        element.target.style.textDecoration = 'none';
      } else {
        element.target.style.textDecoration = 'line-through';
      }
    });
  });
};

export {
  toggleTodoForm, todoListner, projectListner, editTodoListner, checkedListner,
};