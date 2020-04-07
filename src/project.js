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

  deleteTodo(todo) {
    const id = this.todos.findIndex(todoId => todo === todoId);
    this.todos.splice(id, 1);
  }
}

export default Project;