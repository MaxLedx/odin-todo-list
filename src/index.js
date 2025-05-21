// import { ProjectController } from './controllers/projectController';
// import { InMemoryStorage } from './infrastructure/inMemoryStorage';
// import { PersistentStorage } from './infrastructure/persistentStorage';
// import { StorageService } from './services/storageService';
// import './style.css';
// import { Renderer } from './views/renderer';
// import { showNewProjectModal } from './views/showNewProjectModal';

import { DateTime } from "luxon";
import { Project } from "./models/project";
import { Todo } from "./models/todo";
import { readFromLocalStorage, writeToLocalStorage } from "./services/localStorageService";

// localStorage.clear();
// const persistentStorage = new PersistentStorage('projects', localStorage);
// const inMemoryStorage = new InMemoryStorage([]);
// const storageService = new StorageService(inMemoryStorage, persistentStorage);
// const renderer = new Renderer(inMemoryStorage);
// const projectController = new ProjectController(storageService, renderer);

// const addProjectButton = document.querySelector('#add-project-button');
// addProjectButton.addEventListener('click', () => showNewProjectModal((val) => {
//     projectController.addProject(val);
// }));

const project = new Project({ title: "Test", description: "Test", color: "#FFFFFF" });
const todo = new Todo({
    title: "T",
    description: "T",
    dueDate: DateTime.now(),
    priority: "low",
});
const todo1 = new Todo({
    title: "T",
    description: "T",
    dueDate: DateTime.now(),
    priority: "low",
});
project.todos.push(todo);
project.todos.push(todo1);
writeToLocalStorage([project]);
const back = readFromLocalStorage();
console.log(back);