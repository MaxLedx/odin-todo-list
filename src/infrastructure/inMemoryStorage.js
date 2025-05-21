import { Project } from '../models/project'

export class InMemoryStorage {
    #projects;

    /**
     * 
     * @param {Project[]} projects 
     */
    constructor(projects) {
        this.#projects = projects;
    }

    saveProject(project) {
        this.#projects.push(project);
    }


    addTodo(projectId, todo) {
        const project = this.#projects.find(project => project.id === projectId);
        if (project !== undefined) {
            project.addTodo(todo);
        }
    }

    deleteTodo(projectId, todoId) {
        const project = this.#projects.find(project => project.id === projectId);
        if (project !== undefined) {
            project.todos = project.todos.filter(todo => todo.id !== todoId);
        }
    }

    deleteProject(id) {
        this.#projects = this.#projects.filter(project => project.id !== id);
    }

    getAllProjects() {
        return this.#projects;
    }
}