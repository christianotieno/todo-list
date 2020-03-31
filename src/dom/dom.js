import addProject from '../controller';
import updateView from './update-view';
import { getProjectInput, clearProjectField } from './project-input';
import { getTodoInput, clearTodoField } from './todo-input';
import Todo from '../todo';

const addProjectButton = document.getElementById('add-project');
const addTodoButton = document.getElementById('add-todo');

addProjectButton.onclick = () => {
  const projectInput = getProjectInput();
  const btn = document.createElement('button');
  btn.innerHTML = '';

  const li = document.createElement('li');
  btn.innerHTML = addProject(projectInput).title;
  li.appendChild(btn);

  const projectList = document.querySelector('.project-list');
  updateView(projectList, li);
  clearProjectField();
};

addTodoButton.onclick = () => {
  const todoInput = getTodoInput();
  const todoStore = new Todo(todoInput);
  // push the todo values to its parent project
  clearTodoField();
};