import Project from './project';

const addProject = (title) => {
  const project = new Project(title);
  return project;
};

export default addProject;