const projectInput = document.querySelector('.project-input');

const getProjectInput = () => {
  let value = false;

  const emptyCheckDiv = document.querySelector('#project-empty-check');
  if (projectInput.value === '') {
    emptyCheckDiv.classList.remove('d-none');
    setTimeout(() => { emptyCheckDiv.classList.add('d-none'); }, 3000);
    value = false;
  } else {
    value = projectInput.value;
  }
  return value;
};

const clearProjectField = () => {
  projectInput.value = '';
};

export { getProjectInput, clearProjectField };