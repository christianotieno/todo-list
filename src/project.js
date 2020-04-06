import ProjectStorage from './project-storage';

class Project {
  constructor(title, id = Math.floor(Math.random() * 10000), todos = []) {
    this.id = id;
    this.title = title;
    this.todos = todos;
  }

  addTodo(todo, listOfProjects) {
    this.todos.push(todo);
    listOfProjects.updateLocalStorage();
  }
}

export default Project;