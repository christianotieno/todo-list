const projectInput = document.querySelector('.project-input');

const getProjectInput = () => projectInput.value;

const clearProjectField = () => {
  projectInput.value = '';
};

export { getProjectInput, clearProjectField };