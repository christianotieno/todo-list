import addProject from '../controller';
import updateView from './update-view';
import { getProjectInput, clearProjectField } from './project-input';
import { getTodoInput, clearTodoField } from './todo-input';
import { toggleTodoForm } from './todo-view';
import Todo from '../todo';

const addProjectButton = document.getElementById('add-project');
const addTodoButton = document.getElementById('add-todo');
const toggleForm = document.getElementById('toggle-todo-form');

toggleForm.onclick = () => {
  toggleTodoForm();
};

addProjectButton.onclick = () => {
  const projectInput = getProjectInput();
  const project = addProject(projectInput);

  updateView(project);
  clearProjectField();
};

addTodoButton.onclick = () => {
  const todoInput = getTodoInput();
  const todoStore = new Todo(todoInput.todoTitleInput, todoInput.todoDescriptionInput, todoInput.todoDateInput, todoInput.todoPriorityInput);

  const listItem = document.createElement('li');
  listItem.innerHTML = todoStore.title;
  console.log(todoStore);
  // const todoData = document.getElementById('todo-list').appendChild(listItem);
  // const projectId = addTodoButton.parentElement.parentElement.parentElement.parentElement.id;

  // console.log(projectId);

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