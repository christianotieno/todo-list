/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n\n\nconst addProject = (title) => {\n  const project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title);\n  return project;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addProject);\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/dom/dom.js":
/*!************************!*\
  !*** ./src/dom/dom.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n/* harmony import */ var _update_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-view */ \"./src/dom/update-view.js\");\n/* harmony import */ var _project_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-input */ \"./src/dom/project-input.js\");\n/* harmony import */ var _todo_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-input */ \"./src/dom/todo-input.js\");\n/* harmony import */ var _todo_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-view */ \"./src/dom/todo-view.js\");\n/* harmony import */ var _project_storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../project-storage */ \"./src/project-storage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todo */ \"./src/todo.js\");\n\n\n\n\n\n\n\n\nconst addProjectButton = document.getElementById('add-project');\nconst addTodoButton = document.getElementById('add-todo');\nconst toggleForm = document.getElementById('toggle-todo-form');\nconst updateTodo = document.getElementById('update-todo');\n\nconst listOfProjects = new _project_storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\ntoggleForm.onclick = () => {\n  Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"toggleTodoForm\"])();\n};\n\naddProjectButton.onclick = () => {\n  const projectInput = Object(_project_input__WEBPACK_IMPORTED_MODULE_2__[\"getProjectInput\"])();\n  if (projectInput) {\n    const project = Object(_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectInput);\n    listOfProjects.addToProjects(project);\n    Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateView\"])(project);\n    listOfProjects.updateLocalStorage();\n    Object(_project_input__WEBPACK_IMPORTED_MODULE_2__[\"clearProjectField\"])();\n    Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"projectListner\"])(listOfProjects);\n  }\n};\n\naddTodoButton.onclick = () => {\n  const todoInput = Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"getTodoInput\"])();\n  if (todoInput) {\n    const todoStore = new _todo__WEBPACK_IMPORTED_MODULE_6__[\"default\"](todoInput.todoTitleInput,\n      todoInput.todoDescriptionInput, todoInput.todoDateInput, todoInput.todoPriorityInput);\n    const listItem = document.createElement('li');\n    listItem.innerHTML = todoStore.title;\n\n    document.getElementById('todo-list').appendChild(listItem);\n    const projectId = addTodoButton.parentElement\n      .parentElement.parentElement.parentElement.parentElement.id;\n    listOfProjects.projectList.map(project => {\n      if (projectId === project.id.toString()) {\n        project.addTodo(todoStore, listOfProjects);\n        Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateProjectList\"])(project.id, listOfProjects);\n      }\n      return false;\n    });\n    Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"clearTodoField\"])();\n    listOfProjects.updateLocalStorage();\n    Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"todoListner\"])(listOfProjects);\n    Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"editTodoListner\"])(listOfProjects);\n    Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"checkedListner\"])();\n  }\n};\n\nconst toggleProject = document.querySelector('.project-list');\n\ntoggleProject.addEventListener('click', (element) => {\n  if (element.target.parentElement === toggleProject) {\n    const dropdown = document.querySelector('.dropdown-content');\n    element.target.appendChild(dropdown);\n    dropdown.style.display = 'block';\n    const project = listOfProjects\n      .projectList.find(project => project.id.toString() === element.target.id);\n    Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateProjectList\"])(project.id, listOfProjects);\n    Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"clearTodoField\"])();\n    document.getElementById('update-todo').removeAttribute('data-id');\n    document.getElementById('update-todo').classList.add('d-none');\n    Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"todoListner\"])(listOfProjects);\n    Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"editTodoListner\"])(listOfProjects);\n    Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"checkedListner\"])();\n  }\n});\n\n\nupdateTodo.onclick = () => {\n  listOfProjects.projectList.map(project => {\n    project.todos.map(todo => {\n      if (todo.id.toString() === updateTodo.dataset.id) {\n        const todoUpdated = Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"getTodoInput\"])();\n        todo.title = todoUpdated.todoTitleInput;\n        todo.description = todoUpdated.todoDescriptionInput;\n        todo.dueDate = todoUpdated.todoDateInput;\n        todo.priority = todoUpdated.todoPriorityInput;\n\n        const projectId = addTodoButton.parentElement.parentElement\n          .parentElement.parentElement.parentElement.id;\n        Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateProjectList\"])(Number(projectId), listOfProjects);\n        Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"clearTodoField\"])();\n        Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"toggleTodoForm\"])();\n        listOfProjects.updateLocalStorage();\n        document.getElementById('update-todo').removeAttribute('data-id');\n        document.getElementById('update-todo').classList.add('d-none');\n      }\n      return false;\n    });\n    return false;\n  });\n};\n\n\nlistOfProjects.projectList.map(project => {\n  Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateView\"])(project);\n  Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"projectListner\"])(listOfProjects);\n  return false;\n});\n\n\n//# sourceURL=webpack:///./src/dom/dom.js?");

/***/ }),

/***/ "./src/dom/project-input.js":
/*!**********************************!*\
  !*** ./src/dom/project-input.js ***!
  \**********************************/
/*! exports provided: getProjectInput, clearProjectField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectInput\", function() { return getProjectInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjectField\", function() { return clearProjectField; });\nconst getProjectInput = () => {\n  const projectInput = document.querySelector('.project-input').value;\n  let value = false;\n\n  const emptyCheckDiv = document.querySelector('#project-empty-check');\n  if (projectInput === '') {\n    emptyCheckDiv.classList.remove('d-none');\n    setTimeout(() => { emptyCheckDiv.classList.add('d-none'); }, 3000);\n    value = false;\n  } else {\n    value = projectInput;\n  }\n  return value;\n};\n\nconst clearProjectField = () => {\n  document.querySelector('.project-input').value = '';\n};\n\n\n\n//# sourceURL=webpack:///./src/dom/project-input.js?");

/***/ }),

/***/ "./src/dom/todo-input.js":
/*!*******************************!*\
  !*** ./src/dom/todo-input.js ***!
  \*******************************/
/*! exports provided: getTodoInput, clearTodoField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoInput\", function() { return getTodoInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearTodoField\", function() { return clearTodoField; });\n\nconst getTodoInput = () => {\n  const todoTitleInput = document.querySelector('#todo-title').value;\n  const todoDescriptionInput = document.querySelector('#todo-description').value;\n  const todoDateInput = document.querySelector('#todo-date').value;\n  let todoPriorityInput = '';\n\n  const radioInputs = document.getElementsByName('priority');\n\n  radioInputs.forEach(input => {\n    if (input.checked) {\n      todoPriorityInput = input.value;\n    }\n  });\n  let value = false;\n  const emptyCheckDiv = document.querySelector('#todo-empty-check');\n  if (todoTitleInput === '' || todoDescriptionInput === '' || todoDateInput === '') {\n    emptyCheckDiv.classList.remove('d-none');\n    setTimeout(() => { emptyCheckDiv.classList.add('d-none'); }, 3000);\n  } else {\n    value = {\n      todoTitleInput, todoDescriptionInput, todoDateInput, todoPriorityInput,\n    };\n  }\n  return value;\n};\n\nconst clearTodoField = () => {\n  document.querySelector('#todo-title').value = '';\n  document.querySelector('#todo-description').value = '';\n  document.querySelector('#todo-date').value = '';\n};\n\n\n\n//# sourceURL=webpack:///./src/dom/todo-input.js?");

/***/ }),

/***/ "./src/dom/todo-view.js":
/*!******************************!*\
  !*** ./src/dom/todo-view.js ***!
  \******************************/
/*! exports provided: toggleTodoForm, todoListner, projectListner, editTodoListner, checkedListner */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleTodoForm\", function() { return toggleTodoForm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"todoListner\", function() { return todoListner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectListner\", function() { return projectListner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editTodoListner\", function() { return editTodoListner; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"checkedListner\", function() { return checkedListner; });\n/* harmony import */ var _update_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./update-view */ \"./src/dom/update-view.js\");\n/* harmony import */ var _todo_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-input */ \"./src/dom/todo-input.js\");\n\n\n\nconst toggleTodoForm = () => {\n  const form = document.getElementById('todo-form');\n  const toggleForm = document.getElementById('toggle-todo-form');\n\n  if (form.style.display === 'block') {\n    form.style.display = 'none';\n    toggleForm.innerHTML = 'Add Your Todos here';\n  } else {\n    Object(_todo_input__WEBPACK_IMPORTED_MODULE_1__[\"clearTodoField\"])();\n    form.style.display = 'block';\n    toggleForm.innerHTML = 'Close form';\n  }\n};\n\nconst todoListner = (listOfProjects) => {\n  const deleteTodo = document.querySelectorAll('.delete-todo');\n  deleteTodo.forEach(deleteTodoBtn => {\n    deleteTodoBtn.onclick = (e) => {\n      if (e.target.nodeName === 'BUTTON') {\n        const project = listOfProjects.projectList.find(\n          project => e.target.parentElement.parentElement\n            .parentElement.parentElement.parentElement.id === project.id.toString(),\n        );\n        const todo = project.todos.find(todo => e.target.parentElement.id === todo.id.toString());\n        project.deleteTodo(todo);\n        listOfProjects.updateLocalStorage();\n        Object(_update_view__WEBPACK_IMPORTED_MODULE_0__[\"removeTodo\"])(e.target.parentElement);\n      }\n    };\n  });\n};\n\nconst projectListner = (listOfProjects) => {\n  const deleteProject = document.querySelectorAll('.delete-project');\n\n  deleteProject.forEach(deleteProjectBtn => {\n    deleteProjectBtn.onclick = (e) => {\n      if (e.target.nodeName === 'BUTTON') {\n        const project = listOfProjects.projectList\n          .find(project => e.target.parentElement.id === project.id.toString());\n        listOfProjects.removeProject(project);\n        listOfProjects.updateLocalStorage();\n        Object(_update_view__WEBPACK_IMPORTED_MODULE_0__[\"removeProject\"])(e.target.parentElement);\n      }\n    };\n  });\n};\n\nconst editTodoListner = (listOfProjects) => {\n  const editTodos = document.querySelectorAll('.edit-todo');\n\n  editTodos.forEach(editTodo => {\n    editTodo.addEventListener('click', (element) => {\n      listOfProjects.projectList.map(project => {\n        project.todos.map(todo => {\n          if (todo.id.toString() === element.target.parentElement.id) {\n            toggleTodoForm();\n            document.querySelector('#todo-title').value = todo.title;\n            document.querySelector('#todo-description').value = todo.description;\n            document.querySelector('#todo-date').value = todo.dueDate;\n            document.getElementById('update-todo').classList.remove('d-none');\n            document.getElementById('update-todo').setAttribute('data-id', todo.id.toString());\n          }\n          return false;\n        });\n        return false;\n      });\n    });\n  });\n};\n\nconst checkedListner = () => {\n  const checkTodos = document.querySelectorAll('.title');\n\n  checkTodos.forEach(checkTodo => {\n    checkTodo.addEventListener('click', (element) => {\n      if (element.target.style.textDecoration === 'line-through') {\n        element.target.style.textDecoration = 'none';\n      } else {\n        element.target.style.textDecoration = 'line-through';\n      }\n    });\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/dom/todo-view.js?");

/***/ }),

/***/ "./src/dom/update-view.js":
/*!********************************!*\
  !*** ./src/dom/update-view.js ***!
  \********************************/
/*! exports provided: updateView, updateProjectList, removeProject, removeTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateView\", function() { return updateView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProjectList\", function() { return updateProjectList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeProject\", function() { return removeProject; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"removeTodo\", function() { return removeTodo; });\nconst updateView = (project) => {\n  const li = document.createElement('li');\n  const deleteProject = document.createElement('button');\n\n  li.innerHTML = project.title;\n  li.id = project.id;\n  deleteProject.innerHTML = 'Remove Project';\n  deleteProject.classList.add('delete-project', 'btn-danger');\n  li.appendChild(deleteProject);\n  li.classList.add('toggle-project');\n\n  const container = document.querySelector('.project-list');\n  container.appendChild(li);\n};\n\nconst updateProjectList = (id, listOfProjects) => {\n  document.getElementById('todo-list').innerHTML = '';\n\n  listOfProjects.projectList.map(project => {\n    if (id === project.id) {\n      project.todos.map(todo => {\n        const li = document.createElement('li');\n        const editTodo = document.createElement('button');\n        const deleteTodo = document.createElement('button');\n        const textWrap = document.createElement('div');\n        const title = document.createElement('div');\n        const p = document.createElement('p');\n        const date = document.createElement('p');\n\n        title.innerHTML = todo.title;\n        title.classList.add('title');\n        textWrap.classList.add('text-wrap');\n        textWrap.appendChild(title);\n        p.classList.add('description');\n        p.innerHTML = todo.description;\n        textWrap.appendChild(p);\n        li.appendChild(textWrap);\n        if (todo.priority === 'important') { li.classList.add('bg-warning'); }\n        if (todo.priority === 'very-important') { li.classList.add('bg-success'); }\n        if (todo.priority === 'not-important') { li.classList.add('bg-secondary'); }\n\n        date.classList.add('date');\n        date.innerHTML = todo.dueDate;\n        li.appendChild(date);\n        li.id = todo.id;\n\n        editTodo.innerHTML = 'Edit';\n        editTodo.classList.add('edit-todo');\n        deleteTodo.innerHTML = 'Remove Todo';\n        deleteTodo.classList.add('delete-todo');\n        li.appendChild(editTodo);\n        li.appendChild(deleteTodo);\n        document.getElementById('todo-list').appendChild(li);\n        return false;\n      });\n    }\n    return false;\n  });\n};\n\nconst removeProject = (project) => {\n  const container = document.querySelector('.project-list');\n  container.removeChild(project);\n};\n\nconst removeTodo = (todo) => {\n  const containerContent = document.querySelector('#todo-list');\n  containerContent.removeChild(todo);\n};\n\n\n\n//# sourceURL=webpack:///./src/dom/update-view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.scss */ \"./src/main.scss\");\n/* harmony import */ var _main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _dom_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom/dom */ \"./src/dom/dom.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/main.scss":
/*!***********************!*\
  !*** ./src/main.scss ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/main.scss?");

/***/ }),

/***/ "./src/project-storage.js":
/*!********************************!*\
  !*** ./src/project-storage.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo */ \"./src/todo.js\");\n\n\n\nclass ProjectStorage {\n  constructor() {\n    const storedList = localStorage.getItem('projectList');\n\n    if (storedList) {\n      this.projectList = JSON.parse(storedList).map(storedProject => {\n        const project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](storedProject.title, storedProject.id, storedProject.todos);\n        project.todos.map(storedTodo => {\n          const todo = new _todo__WEBPACK_IMPORTED_MODULE_1__[\"default\"](storedTodo.title,\n            storedTodo.description, storedTodo.dueDate, storedTodo.priority);\n          return todo;\n        });\n        return project;\n      });\n    } else {\n      this.projectList = [];\n    }\n  }\n\n  addToProjects(project) {\n    this.projectList.push(project);\n  }\n\n  removeProject(project) {\n    const id = this.projectList.findIndex(projectId => project === projectId);\n    this.projectList.splice(id, 1);\n  }\n\n  updateLocalStorage() {\n    localStorage.setItem('projectList', JSON.stringify(this.projectList));\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectStorage);\n\n//# sourceURL=webpack:///./src/project-storage.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\n  constructor(title, id = Math.floor(Math.random() * 10000), todos = []) {\n    this.id = id;\n    this.title = title;\n    this.todos = todos;\n  }\n\n  addTodo(todo, listOfProjects) {\n    this.todos.push(todo);\n    listOfProjects.updateLocalStorage();\n  }\n\n  deleteTodo(todo) {\n    const id = this.todos.findIndex(todoId => todo === todoId);\n    this.todos.splice(id, 1);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Todo {\n  constructor(title, description, dueDate, priority) {\n    this.id = Math.floor(Math.random() * 100000);\n    this.title = title;\n    this.description = description;\n    this.dueDate = dueDate;\n    this.priority = priority;\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Todo);\n\n//# sourceURL=webpack:///./src/todo.js?");

/***/ })

/******/ });