import addProject from '../controller';
import updateView from './update-view';
import { getProjectInput, clearField } from './project-input';

const addBtn = document.getElementById('add-project');

addBtn.onclick = () => {
  const projectInput = getProjectInput();
  const li = document.createElement('li');
  li.innerHTML = addProject(projectInput).title;
  const projectList = document.querySelector('.project-list');
  updateView(projectList, li);
  clearField();
};