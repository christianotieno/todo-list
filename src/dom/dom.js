import addProject from '../controller';
import { updateView, updateProjectList } from './update-view';
import { getProjectInput, clearProjectField } from './project-input';
import { getTodoInput, clearTodoField } from './todo-input';
import { toggleTodoForm } from './todo-view';
import ProjectStorage from '../project-storage';
import Todo from '../todo';

const addProjectButton = document.getElementById('add-project');
const addTodoButton = document.getElementById('add-todo');
const toggleForm = document.getElementById('toggle-todo-form');
const todoList = document.getElementById('todo-list');
const updateTodo = document.getElementById('update-todo');

const listOfProjects = new ProjectStorage();

toggleForm.onclick = () => {
  toggleTodoForm();
};

addProjectButton.onclick = () => {
  const projectInput = getProjectInput();
  const project = addProject(projectInput);
  listOfProjects.addToProjects(project);
  updateView(project);
  listOfProjects.updateLocalStorage();
  clearProjectField();
};

addTodoButton.onclick = () => {
  const todoInput = getTodoInput();
  const todoStore = new Todo(todoInput.todoTitleInput,
    todoInput.todoDescriptionInput, todoInput.todoDateInput, todoInput.todoPriorityInput);
  const listItem = document.createElement('li');
  listItem.innerHTML = todoStore.title;

  document.getElementById('todo-list').appendChild(listItem);
  const projectId = addTodoButton.parentElement.parentElement.parentElement.parentElement.parentElement.id;
  listOfProjects.projectList.map(project => {
    if (projectId === project.id.toString()) {
      project.addTodo(todoStore, listOfProjects);
      updateProjectList(project.id, listOfProjects);
    }
  });
  clearTodoField();
  listOfProjects.updateLocalStorage();
};

const toggleProject = document.querySelector('.project-list');

toggleProject.addEventListener('click', (element) => {
  if (element.target.parentElement === toggleProject) {
    const dropdown = document.querySelector('.dropdown-content');
    element.target.appendChild(dropdown);
    dropdown.style.display = 'block';
    const project = listOfProjects.projectList.find(project => project.id.toString() === element.target.id);
    // updateView(project);
    updateProjectList(project.id, listOfProjects);
    clearTodoField();
    document.getElementById('update-todo').removeAttribute('data-id');
    document.getElementById('update-todo').classList.add('d-none');
  }
});

todoList.addEventListener('click', (element) => {
  listOfProjects.projectList.map(project => {
    project.todos.map(todo => {
      if (todo.id.toString() === element.target.id) {
        document.querySelector('#todo-title').value = todo.title;
        document.querySelector('#todo-description').value = todo.description;
        document.querySelector('#todo-date').value = todo.dueDate;
        document.getElementById('update-todo').classList.remove('d-none');
        document.getElementById('update-todo').setAttribute('data-id', todo.id.toString());
      }
    });
  });
});

updateTodo.onclick = () => {
  listOfProjects.projectList.map(project => {
    project.todos.map(todo => {
      if (todo.id.toString() === updateTodo.dataset.id) {
        const todoUpdated = getTodoInput();
        todo.title = todoUpdated.todoTitleInput;
        todo.description = todoUpdated.todoDescriptionInput;
        todo.dueDate = todoUpdated.todoDateInput;
        todo.priority = todoUpdated.todoPriorityInput;

        const projectId = addTodoButton.parentElement.parentElement.parentElement.parentElement.id;
        updateProjectList(projectId, listOfProjects);
        clearTodoField();
        document.getElementById('update-todo').removeAttribute('data-id');
        document.getElementById('update-todo').classList.add('d-none');
      }
    });
  });
};


listOfProjects.projectList.map(project => {
  updateView(project);
});

const deleteProject = document.querySelectorAll('.delete-project');
const deleteTodo = document.querySelector('.delete-todo'); 

deleteProject.forEach(deleteProjectBtn => {
  deleteProjectBtn.onclick = (e) => {
    if (e.target.nodeName === 'BUTTON') {
      const project = listOfProjects.projectList.find(project => e.target.parentElement.id === project.id.toString());
      listOfProjects.removeProject(project);
      listOfProjects.updateLocalStorage();
    }
  };
})
