class ProjectStorage {
  constructor() {
    this.projectList = [];
  }

  addToProjects(project) {
    this.projectList.push(project);
  }
}

export default ProjectStorage;