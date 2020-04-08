const getProjectInput = () => {
  const projectInput = document.querySelector('.project-input').value;
  let value = false;

  const emptyCheckDiv = document.querySelector('#project-empty-check');
  if (projectInput === '') {
    emptyCheckDiv.classList.remove('d-none');
    setTimeout(() => { emptyCheckDiv.classList.add('d-none'); }, 3000);
    value = false;
  } else {
    value = projectInput;
  }
  return value;
};

const clearProjectField = () => {
  document.querySelector('.project-input').value = '';
};

export { getProjectInput, clearProjectField };