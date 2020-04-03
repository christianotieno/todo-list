import addProject from '../controller';
import updateView from './update-view';
import { getProjectInput, clearProjectField } from './project-input';
import { getTodoInput, clearTodoField } from './todo-input';
import { toggleTodoForm } from './todo-view';
import ProjectStorage from '../projectStorage';
import Todo from '../todo';

const addProjectButton = document.getElementById('add-project');
const addTodoButton = document.getElementById('add-todo');
const toggleForm = document.getElementById('toggle-todo-form');

const listOfProjects = new ProjectStorage();

toggleForm.onclick = () => {
  toggleTodoForm();
};

addProjectButton.onclick = () => {
  const projectInput = getProjectInput();
  const project = addProject(projectInput);
  listOfProjects.addToProjects(project);
  updateView(project);
  clearProjectField();
};

addTodoButton.onclick = () => {
  const todoInput = getTodoInput();
  const todoStore = new Todo(todoInput.todoTitleInput,
    todoInput.todoDescriptionInput, todoInput.todoDateInput, todoInput.todoPriorityInput);
  const listItem = document.createElement('li');
  listItem.innerHTML = todoStore.title;
  // console.log(todoStore);
  document.getElementById('todo-list').appendChild(listItem);
  const projectId = addTodoButton.parentElement.parentElement.parentElement.parentElement.id;

  for (let i = 0; i < listOfProjects.projectList.length; i++) {
    if (projectId === listOfProjects.projectList[i].id.toString()) {
      listOfProjects.projectList[i].addTodo(todoStore);
    }
  }
  console.log(listOfProjects);
  clearTodoField();
};

updateView(addProject('Get Started'));

const toggleProject = document.querySelector('.project-list');

toggleProject.addEventListener('click', (element) => {
  if (element.target.parentElement === toggleProject) {
    const dropdown = document.querySelector('.dropdown-content');
    element.target.appendChild(dropdown);
    dropdown.style.display = 'block';
  }
});