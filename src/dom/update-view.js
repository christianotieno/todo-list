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
        const textWrap = document.createElement('div');
        const title = document.createElement('div');
        const p = document.createElement('p');
        const date = document.createElement('p');

        title.innerHTML = todo.title;
        title.classList.add('title');
        textWrap.classList.add('text-wrap');
        textWrap.appendChild(title);
        p.classList.add('description');
        p.innerHTML = todo.description;
        textWrap.appendChild(p);
        li.appendChild(textWrap);
        if (todo.priority === 'important') { li.classList.add('bg-warning'); }
        if (todo.priority === 'very-important') { li.classList.add('bg-success'); }
        if (todo.priority === 'not-important') { li.classList.add('bg-secondary'); }

        date.classList.add('date');
        date.innerHTML = todo.dueDate;
        li.appendChild(date);
        li.id = todo.id;
        deleteTodo.innerHTML = 'Remove Todo';
        deleteTodo.classList.add('delete-todo');
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

const removeTodo = (todo) => {
  const containerContent = document.querySelector('#todo-list');
  containerContent.removeChild(todo);
};

export {
  updateView, updateProjectList, removeProject, removeTodo,
};