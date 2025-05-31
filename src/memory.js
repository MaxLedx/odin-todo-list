import { readFromLocalStorage, writeToLocalStorage } from "./localStorageService";
import { createSeedData } from "./seeder";

export class Memory {
    constructor({ onWrite }) {
        this.projects = [];
        this.onWrite = onWrite;
    }

    addTodo(projectId, todo) {
        const project = this.projects.find(project => project.id === projectId);
        if (project !== undefined) {
            project.todos.push(todo);
            this.onWrite(this.projects);
        }
    }

    toggleTodoDone(projectId, todoId) {
        const project = this.projects.find(project => project.id === projectId);
        if (project !== undefined) {
            const todo = project.todos.find(todo => todo.id === todoId);
            if (todo !== undefined) {
                todo.done = !todo.done;
                this.onWrite(this.projects);
            }
        }
    }

    deleteTodo(projectId, todoId) {
        const project = this.projects.find(project => project.id === projectId);
        if (project !== undefined) {
            project.todos = project.todos.filter(todo => todo.id !== todoId);
            this.onWrite(this.projects);
        }
    }

    addProject(project) {
        this.projects.push(project);
        this.onWrite(this.projects);
    }

    deleteProject(id) {
        this.projects = this.projects.filter(project => project.id !== id);
        this.onWrite(this.projects);
    }

    getAllProjects() {
        return this.projects;
    }
}

export function initializeMemory() {
    const projects = readFromLocalStorage();

    if (projects.length === 0) {
        projects.push(createSeedData());
    }

    const memory = new Memory({ onWrite: (projects) => writeToLocalStorage(projects) });

    for (const project of projects) {
        memory.addProject(project);
    }

    return memory;
}