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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectStorage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectStorage */ \"./src/projectStorage.js\");\n\n\n\nconst addProject = (title) => {\n  const project = new _project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](title);\n  // projectStorage.push(project);\n  // console.log(projectStorage;\n  return project;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (addProject);\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/dom/dom.js":
/*!************************!*\
  !*** ./src/dom/dom.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _controller__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../controller */ \"./src/controller.js\");\n/* harmony import */ var _update_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./update-view */ \"./src/dom/update-view.js\");\n/* harmony import */ var _project_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project-input */ \"./src/dom/project-input.js\");\n/* harmony import */ var _todo_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-input */ \"./src/dom/todo-input.js\");\n/* harmony import */ var _todo_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-view */ \"./src/dom/todo-view.js\");\n/* harmony import */ var _projectStorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../projectStorage */ \"./src/projectStorage.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../todo */ \"./src/todo.js\");\n\n\n\n\n\n\n\n\nconst addProjectButton = document.getElementById('add-project');\nconst addTodoButton = document.getElementById('add-todo');\nconst toggleForm = document.getElementById('toggle-todo-form');\nconst todoList = document.getElementById('todo-list');\nconst updateTodo = document.getElementById('update-todo');\n\nconst listOfProjects = new _projectStorage__WEBPACK_IMPORTED_MODULE_5__[\"default\"]();\n\ntoggleForm.onclick = () => {\n  Object(_todo_view__WEBPACK_IMPORTED_MODULE_4__[\"toggleTodoForm\"])();\n};\n\naddProjectButton.onclick = () => {\n  const projectInput = Object(_project_input__WEBPACK_IMPORTED_MODULE_2__[\"getProjectInput\"])();\n  const project = Object(_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(projectInput);\n  listOfProjects.addToProjects(project);\n  Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateView\"])(project);\n  Object(_project_input__WEBPACK_IMPORTED_MODULE_2__[\"clearProjectField\"])();\n};\n\naddTodoButton.onclick = () => {\n  const todoInput = Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"getTodoInput\"])();\n  const todoStore = new _todo__WEBPACK_IMPORTED_MODULE_6__[\"default\"](todoInput.todoTitleInput,\n    todoInput.todoDescriptionInput, todoInput.todoDateInput, todoInput.todoPriorityInput);\n  const listItem = document.createElement('li');\n  listItem.innerHTML = todoStore.title;\n\n  document.getElementById('todo-list').appendChild(listItem);\n  const projectId = addTodoButton.parentElement.parentElement.parentElement.parentElement.id;\n  const project = addTodoButton.parentElement.parentElement.parentElement.parentElement;\n  listOfProjects.projectList.map(project => {\n    if (projectId === project.id.toString()) {\n      project.addTodo(todoStore);\n    }\n  });\n\n  Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateProjectList\"])(project.id, listOfProjects);\n  Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"clearTodoField\"])();\n};\n\nconst defaultProject = Object(_controller__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('Get Started');\nObject(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateView\"])(defaultProject);\nlistOfProjects.addToProjects(defaultProject)\n\nconst toggleProject = document.querySelector('.project-list');\n\ntoggleProject.addEventListener('click', (element) => {\n  if (element.target.parentElement === toggleProject) {\n    const dropdown = document.querySelector('.dropdown-content');\n    element.target.appendChild(dropdown);\n    dropdown.style.display = 'block';\n\n    Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateProjectList\"])(element.target.id, listOfProjects);\n    Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"clearTodoField\"])();\n    document.getElementById('update-todo').removeAttribute('data-id');\n    document.getElementById('update-todo').classList.add('d-none');\n  }\n});\n\ntodoList.addEventListener('click', (element) => {\n\n  listOfProjects.projectList.map(project => {\n    project.todos.map(todo => {\n      if (todo.id.toString() === element.target.id) {\n        document.querySelector('#todo-title').value = todo.title;\n        document.querySelector('#todo-description').value = todo.description;\n        document.querySelector('#todo-date').value = todo.dueDate;\n        document.getElementById('update-todo').classList.remove('d-none');\n        document.getElementById('update-todo').setAttribute('data-id', todo.id.toString());\n      }\n    });\n  });\n});\n\nupdateTodo.onclick = () => {\n\n  listOfProjects.projectList.map(project => {\n    project.todos.map(todo => {\n      if (todo.id.toString() === updateTodo.dataset.id) {\n        const todoUpdated = Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"getTodoInput\"])();\n        todo.title = todoUpdated.todoTitleInput;\n        todo.description = todoUpdated.todoDescriptionInput;\n        todo.dueDate = todoUpdated.todoDateInput;\n        todo.priority = todoUpdated.todoPriorityInput;\n\n        const projectId = addTodoButton.parentElement.parentElement.parentElement.parentElement.id;\n        Object(_update_view__WEBPACK_IMPORTED_MODULE_1__[\"updateProjectList\"])(projectId, listOfProjects);\n        Object(_todo_input__WEBPACK_IMPORTED_MODULE_3__[\"clearTodoField\"])();\n        document.getElementById('update-todo').removeAttribute('data-id');\n        document.getElementById('update-todo').classList.add('d-none');\n      }\n    });\n  });\n}\n\n\n//# sourceURL=webpack:///./src/dom/dom.js?");

/***/ }),

/***/ "./src/dom/project-input.js":
/*!**********************************!*\
  !*** ./src/dom/project-input.js ***!
  \**********************************/
/*! exports provided: getProjectInput, clearProjectField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProjectInput\", function() { return getProjectInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearProjectField\", function() { return clearProjectField; });\nconst projectInput = document.querySelector('.project-input');\n\nconst getProjectInput = () => projectInput.value;\n\nconst clearProjectField = () => {\n  projectInput.value = '';\n};\n\n\n\n//# sourceURL=webpack:///./src/dom/project-input.js?");

/***/ }),

/***/ "./src/dom/todo-input.js":
/*!*******************************!*\
  !*** ./src/dom/todo-input.js ***!
  \*******************************/
/*! exports provided: getTodoInput, clearTodoField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getTodoInput\", function() { return getTodoInput; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clearTodoField\", function() { return clearTodoField; });\n\nconst getTodoInput = () => {\n  const todoTitleInput = document.querySelector('#todo-title').value;\n  const todoDescriptionInput = document.querySelector('#todo-description').value;\n  const todoDateInput = document.querySelector('#todo-date').value;\n  let todoPriorityInput = '';\n\n  const radioInputs = document.getElementsByName('priority');\n  \n  radioInputs.forEach(input => {\n    if (input.checked) {\n      todoPriorityInput = input.value;\n    }\n  })\n\n  return {\n    todoTitleInput, todoDescriptionInput, todoDateInput, todoPriorityInput,\n  };\n};\n\nconst clearTodoField = () => {\n  document.querySelector('#todo-title').value = '';\n  document.querySelector('#todo-description').value = '';\n  document.querySelector('#todo-date').value = '';\n};\n\n\n\n//# sourceURL=webpack:///./src/dom/todo-input.js?");

/***/ }),

/***/ "./src/dom/todo-view.js":
/*!******************************!*\
  !*** ./src/dom/todo-view.js ***!
  \******************************/
/*! exports provided: toggleTodoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toggleTodoForm\", function() { return toggleTodoForm; });\nconst toggleTodoForm = () => {\n  const form = document.getElementById('todo-form');\n  const toggleForm = document.getElementById('toggle-todo-form');\n\n  if (form.style.display === 'block') {\n    form.style.display = 'none';\n    toggleForm.innerHTML = 'Add Your Todos here';\n  } else {\n    form.style.display = 'block';\n    toggleForm.innerHTML = 'Close form';\n  }\n};\n\n\n\n//# sourceURL=webpack:///./src/dom/todo-view.js?");

/***/ }),

/***/ "./src/dom/update-view.js":
/*!********************************!*\
  !*** ./src/dom/update-view.js ***!
  \********************************/
/*! exports provided: updateView, updateProjectList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateView\", function() { return updateView; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"updateProjectList\", function() { return updateProjectList; });\nconst updateView = (project) => {\n  const li = document.createElement('li');\n  li.innerHTML = project.title;\n  li.id = project.id;\n  li.classList.add('toggle-project');\n  const container = document.querySelector('.project-list');\n\n  container.appendChild(li);\n};\n\nconst updateProjectList = (id, listOfProjects) => {\n  document.getElementById('todo-list').innerHTML = '';\n\n  listOfProjects.projectList.map(project => {\n    if (id === project.id.toString()) {\n\n      project.todos.map(todo => {\n        const li = document.createElement('li');\n        li.innerHTML = todo.title;\n        li.id = todo.id;\n        document.getElementById('todo-list').appendChild(li);\n      });\n      \n    }\n  });\n};\n\n\n\n//# sourceURL=webpack:///./src/dom/update-view.js?");

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

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Project {\n  constructor(title) {\n    this.id = Math.floor(Math.random() * 10000);\n    this.title = title;\n    this.todos = [];\n  }\n\n  addTodo(todo) {\n    this.todos.push(todo);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Project);\n\n//# sourceURL=webpack:///./src/project.js?");

/***/ }),

/***/ "./src/projectStorage.js":
/*!*******************************!*\
  !*** ./src/projectStorage.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ProjectStorage {\n  constructor() {\n    this.projectList = [];\n  }\n\n  addToProjects(project) {\n    this.projectList.push(project);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProjectStorage);\n\n//# sourceURL=webpack:///./src/projectStorage.js?");

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