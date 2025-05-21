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
        const sideBar = document.querySelector('#sidebar');

        const projects = this.#inMemoryStorage.getAllProjects();
        for (const project of projects) {
            const projectElement = document.createElement('div');
            projectElement.textContent = project.title;
            sideBar.appendChild(projectElement);
        }

        this.#controller.test();
    }
}