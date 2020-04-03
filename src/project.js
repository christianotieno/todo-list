class Project {
  constructor(title) {
    this.id = Math.floor(Math.random() * 10000);
    this.title = title;
    this.todos = [];
  }

  addTodo(todo) {
    this.todos.push(todo);
  }
}

export default Project;