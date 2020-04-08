class Todo {
  constructor(title, description, dueDate, priority) {
    this.id = Math.floor(Math.random() * 100000);
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export default Todo;