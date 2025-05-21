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

    deleteProject(id) {
        this.#projects = this.#projects.filter(project => project.id !== id);
    }

    getAllProjects() {
        return this.#projects;
    }
}