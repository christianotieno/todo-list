const input = document.querySelector('.project-input');

const getProjectInput = () => input.value;

const clearField = () => {
  input.value = '';
};

export { getProjectInput, clearField };