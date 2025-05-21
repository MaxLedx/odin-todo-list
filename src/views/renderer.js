import { ProjectController } from "../controllers/projectController";
import { InMemoryStorage } from "../infrastructure/inMemoryStorage";

export class Renderer {
    #inMemoryStorage;
    #controller;
    /**
     * 
     * @param {InMemoryStorage} inMemoryStorage 
     */
    constructor(inMemoryStorage) {
        this.#inMemoryStorage = inMemoryStorage;
    }

    /**
     * 
     * @param {ProjectController} controller 
     */
    setController(controller) {
        this.#controller = controller;
    }

    render() {
        const projectsElement = document.querySelector('#projects');

        while (projectsElement.firstChild) {
            projectsElement.removeChild(projectsElement.lastChild);
        }

        const projects = this.#inMemoryStorage.getAllProjects();
        for (const project of projects) {
            const projectElement = document.createElement('div');
            projectElement.textContent = project.title;
            projectsElement.appendChild(projectElement);
        }

        this.#controller.test();
    }
}