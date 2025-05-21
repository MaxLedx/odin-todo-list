import { DateTime } from "luxon";
import { Project } from "./models/project";
import { Todo } from "./models/todo";
import { readFromLocalStorage, writeToLocalStorage } from "./services/localStorageService";
import { Memory } from "./services/inMemoryStorageService";


const memory = initializeMemory();
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