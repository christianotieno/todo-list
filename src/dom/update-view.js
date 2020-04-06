const updateView = (project) => {
  const li = document.createElement('li');
  const deleteProject = document.createElement('button');

  li.innerHTML = project.title;
  li.id = project.id;
  deleteProject.innerHTML = 'Remove Project';
  li.appendChild(deleteProject).classList.add('btn-danger');
  li.classList.add('toggle-project');

  const container = document.querySelector('.project-list');
  container.appendChild(li);
};

const updateProjectList = (id, listOfProjects) => {
  document.getElementById('todo-list').innerHTML = '';
  const deleteTodo = document.createElement('button');

  listOfProjects.projectList.map(project => {
    if (id === project.id) {
      project.todos.map(todo => {
        const li = document.createElement('li');
        li.innerHTML = todo.title;
        li.id = todo.id;
        deleteTodo.innerHTML = 'Remove Todo';
        li.appendChild(deleteTodo);
        document.getElementById('todo-list').appendChild(li);
      });
    }
  });
};

export { updateView, updateProjectList };