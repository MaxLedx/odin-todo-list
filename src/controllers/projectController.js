import { Project } from "../models/project";
import { InMemoryStorage } from "../services/inMemoryStorage";
import { PersistentStorage } from "../services/persistentStorage";

export class ProjectController {
    #inMemoryStorage;
    #persistentStorage;

    /**
     * 
     * @param {InMemoryStorage} inMemoryStorage 
     * @param {PersistentStorage} persistentStorage 
     */
    constructor(inMemoryStorage, persistentStorage) {
        this.#inMemoryStorage = inMemoryStorage;
        this.#persistentStorage = persistentStorage;
    }

    addProject({ title, description, color }) {
        const project = new Project({ title, description, color });
        this.#inMemoryStorage.addProject(project);
        this.#persistentStorage.save(this.#inMemoryStorage.getAllProjects());
    }
}