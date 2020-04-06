import Project from './project';
import projectStorage from './project-storage';

const addProject = (title) => {
  const project = new Project(title);
  // projectStorage.push(project);
  // console.log(projectStorage;
  return project;
};

export default addProject;