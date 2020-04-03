import Project from './project';
import projectStorage from './projectStorage';

const addProject = (title) => {
  const project = new Project(title);
  // projectStorage.push(project);
  // console.log(projectStorage;
  return project;
};

export default addProject;