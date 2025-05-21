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

    deleteProject(id) {
        this.#projects = this.#projects.filter(project => project.id !== id);
    }

    getAllProjects() {
        return this.#projects;
    }
}