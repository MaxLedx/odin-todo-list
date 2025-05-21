import { InMemoryStorage } from "../services/inMemoryStorage";

export class Renderer {
    #inMemoryStorage;

    /**
     * 
     * @param {InMemoryStorage} inMemoryStorage 
     */
    constructor(inMemoryStorage) {
        this.#inMemoryStorage = inMemoryStorage;
    }

    render() {
        const sideBar = document.querySelector('#sidebar');

        const projects = this.#inMemoryStorage.getAllProjects();
        for (const project of projects) {
            const projectElement = document.createElement('div');
            projectElement.textContent = project.title;
            sideBar.appendChild(projectElement);
        }
    }
}