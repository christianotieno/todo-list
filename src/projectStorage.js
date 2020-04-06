import Project from "./project";
import Todo from "./todo";

class ProjectStorage {
  constructor() {
    const storedList = localStorage.getItem('projectList');

    if (storedList) {
      this.projectList = JSON.parse(storedList).map(storedProject => {
        const project = new Project(storedProject.id, storedProject.title, storedProject.todos);
        project.todos.map(storedTodo => { 
          const todo = new Todo(storedTodo.title, storedTodo.description, storedTodo.dueDate, storedTodo.priority); 
          return todo;
        });
        return project;
      });
    } else {
      this.projectList = [];
    }
  }

  addToProjects(project) {
    this.projectList.push(project);
  }

  removeProject(project) {
    const id = this.projectList.findIndex(project);
    this.projectList.splice(id, 1);
  }

  updateLocalStorage() {
    localStorage.setItem('projectList', JSON.stringify(this.projectList));
  }
}

export default ProjectStorage;