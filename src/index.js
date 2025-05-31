import "./style.css";
import { DateTime } from "luxon";
import { Project } from "./project";
import { Todo } from "./todo";
import { readFromLocalStorage, writeToLocalStorage } from "./localStorageService";
import { Memory } from "./memory";
import { renderProjects } from "./renderer";
import { showNewProjectModal } from "./newProjectModal";

localStorage.clear();
const memory = initializeMemory();
// Afficher les projets en mémoire dans la sidebar
document.querySelector('#projects-add').addEventListener('click', () => {
    showNewProjectModal((data) => {
        const project = new Project({
            title: data.title,
            description: data.description,
            color: data.color
        });
        console.log(project);
        memory.addProject(project);
        renderProjects(memory);
    });
});
renderProjects(memory);
console.log(memory);

function initializeMemory() {
    const projects = readFromLocalStorage();
    if (projects.length === 0) {
        projects.push(createDefaultProject());
    }
    const memory = new Memory({ onWrite: (projects) => writeToLocalStorage(projects) });
    for (const project of projects) {
        memory.addProject(project);
    }
    return memory;
}

function createDefaultProject() {
    const project = new Project({
        title: 'Default',
        description: 'This the default project to showcase the app',
        color: "#ffffff"
    });
    const todoO = new Todo({
        title: 'Pay the bills',
        description: 'You gotta do what you gotta do',
        dueDate: DateTime.now().plus({ days: 2 }),
        priority: 'high',
    });
    const todo1 = new Todo({
        title: 'Read Think Like A Programmer',
        description: 'This is a book. It is meant to be read. What is reading ?',
        dueDate: DateTime.now().plus({ months: 1 }),
        priority: 'medium',
    });
    project.todos.push(todoO);
    project.todos.push(todo1);
    return project;
}