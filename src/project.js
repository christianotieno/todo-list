import ProjectStorage from './projectStorage';

class Project {
  constructor(id = Math.floor(Math.random() * 10000), title, todos = []) {
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