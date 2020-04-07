const updateView = (project) => {
  const li = document.createElement('li');
  const deleteProject = document.createElement('button');

  li.innerHTML = project.title;
  li.id = project.id;
  deleteProject.innerHTML = 'Remove Project';
  deleteProject.classList.add('delete-project', 'btn-danger');
  li.appendChild(deleteProject);
  li.classList.add('toggle-project');

  const container = document.querySelector('.project-list');
  container.appendChild(li);
};

const updateProjectList = (id, listOfProjects) => {
  document.getElementById('todo-list').innerHTML = '';

  listOfProjects.projectList.map(project => {
    if (id === project.id) {
      project.todos.map(todo => {
        const li = document.createElement('li');
        const deleteTodo = document.createElement('button');
        li.innerHTML = todo.title;
        li.id = todo.id;
        deleteTodo.innerHTML = 'Remove Todo';
        deleteTodo.classList.add = 'delete-todo';
        li.appendChild(deleteTodo);
        document.getElementById('todo-list').appendChild(li);
        return false;
      });
    }
    return false;
  });
};

const removeProject = (project) => {
  const container = document.querySelector('.project-list');
  container.removeChild(project);
};

export { updateView, updateProjectList, removeProject };