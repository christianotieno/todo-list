import addProject from '../controller';
import { updateView, updateProjectList } from './update-view';
import { getProjectInput, clearProjectField } from './project-input';
import { getTodoInput, clearTodoField } from './todo-input';
import {
  toggleTodoForm, todoListner, projectListner, editTodoListner, checkedListner,
} from './todo-view';
import ProjectStorage from '../project-storage';
import Todo from '../todo';

const addProjectButton = document.getElementById('add-project');
const addTodoButton = document.getElementById('add-todo');
const toggleForm = document.getElementById('toggle-todo-form');
const updateTodo = document.getElementById('update-todo');

const listOfProjects = new ProjectStorage();

toggleForm.onclick = () => {
  toggleTodoForm();
};

addProjectButton.onclick = () => {
  const projectInput = getProjectInput();
  if (projectInput) {
    const project = addProject(projectInput);
    listOfProjects.addToProjects(project);
    updateView(project);
    listOfProjects.updateLocalStorage();
    clearProjectField();
    projectListner(listOfProjects);
  }
};

addTodoButton.onclick = () => {
  const todoInput = getTodoInput();
  if (todoInput) {
    const todoStore = new Todo(todoInput.todoTitleInput,
      todoInput.todoDescriptionInput, todoInput.todoDateInput, todoInput.todoPriorityInput);
    const listItem = document.createElement('li');
    listItem.innerHTML = todoStore.title;

    document.getElementById('todo-list').appendChild(listItem);
    const projectId = addTodoButton.parentElement
      .parentElement.parentElement.parentElement.parentElement.id;
    listOfProjects.projectList.map(project => {
      if (projectId === project.id.toString()) {
        project.addTodo(todoStore, listOfProjects);
        updateProjectList(project.id, listOfProjects);
      }
      return false;
    });
    clearTodoField();
    listOfProjects.updateLocalStorage();
    todoListner(listOfProjects);
    editTodoListner(listOfProjects);
    checkedListner();
  }
};

const toggleProject = document.querySelector('.project-list');

toggleProject.addEventListener('click', (element) => {
  if (element.target.parentElement === toggleProject) {
    const dropdown = document.querySelector('.dropdown-content');
    element.target.appendChild(dropdown);
    dropdown.style.display = 'block';
    const project = listOfProjects
      .projectList.find(project => project.id.toString() === element.target.id);
    updateProjectList(project.id, listOfProjects);
    clearTodoField();
    document.getElementById('update-todo').removeAttribute('data-id');
    document.getElementById('update-todo').classList.add('d-none');
    todoListner(listOfProjects);
    editTodoListner(listOfProjects);
    checkedListner();
  }
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

        const projectId = addTodoButton.parentElement.parentElement
          .parentElement.parentElement.parentElement.id;
        updateProjectList(Number(projectId), listOfProjects);
        clearTodoField();
        toggleTodoForm();
        todoListner(listOfProjects);
        editTodoListner(listOfProjects);
        checkedListner();
        listOfProjects.updateLocalStorage();
        document.getElementById('update-todo').removeAttribute('data-id');
        document.getElementById('update-todo').classList.add('d-none');
      }
      return false;
    });
    return false;
  });
};


listOfProjects.projectList.map(project => {
  updateView(project);
  projectListner(listOfProjects);
  return false;
});
