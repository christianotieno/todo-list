const updateView = (project) => {
  const li = document.createElement('li');
  li.innerHTML = project.title;
  li.id = project.id;
  li.classList.add('toggle-project');
  const container = document.querySelector('.project-list');

  container.appendChild(li);
};

export default updateView;