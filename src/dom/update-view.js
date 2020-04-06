const updateView = (project) => {
  const li = document.createElement('li');
  li.innerHTML = project.title;
  li.id = project.id;
  li.classList.add('toggle-project');
  const container = document.querySelector('.project-list');

  project.todos.map(todo => {
    const li = document.createElement('li');
    li.innerHTML = todo.title;
    li.id = todo.id;
    document.getElementById('todo-list').appendChild(li);
  });

  container.appendChild(li);
};

const updateProjectList = (id, listOfProjects) => {
  document.getElementById('todo-list').innerHTML = '';

  listOfProjects.projectList.map(project => {
    if (id === project.id.toString()) {

      project.todos.map(todo => {
        const li = document.createElement('li');
        li.innerHTML = todo.title;
        li.id = todo.id;
        document.getElementById('todo-list').appendChild(li);
      });
      
    }
  });
};

export { updateView, updateProjectList };