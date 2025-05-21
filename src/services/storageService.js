import { InMemoryStorage } from "../infrastructure/inMemoryStorage";
import { PersistentStorage } from "../infrastructure/persistentStorage";
import { Project } from "../models/project";

export class StorageService {
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

    /**
     * 
     * @param {Project} project 
     */
    saveProject(project) {
        this.#inMemoryStorage.saveProject(project);
        this.#persistData();
    }

    addTodo(projectId, todo) {
        this.#inMemoryStorage.addTodo(projectId, todo);
        this.#persistData();
    }

    deleteProject(id) {
        this.#inMemoryStorage.deleteProject(id);
        this.#persistData();
    }

    #persistData() {
        this.#persistentStorage.save(this.#inMemoryStorage.getAllProjects());
    }
}