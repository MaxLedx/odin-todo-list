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

    addProject(project) {
        this.#projects.push(project);
    }

    getAllProjects() {
        return this.#projects;
    }
}