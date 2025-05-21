import { Project } from "../models/project";

export class PersistentStorage {
    #key;
    #storage;

    /**
     * 
     * @param {string} key 
     * @param {Storage} storage 
     */
    constructor(key, storage) {
        this.#key = key;
        this.#storage = storage;
    }

    /**
     * 
     * @param {Project} projects 
     */
    save(projects) {
        this.#storage.setItem(this.#key, JSON.stringify(projects));
    }
}