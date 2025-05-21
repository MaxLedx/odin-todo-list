import { Project } from "../models/project";
import { StorageService } from "../services/storageService";
import { Renderer } from "../views/renderer";

export class ProjectController {
    #storageService;
    #renderer;

    /**
     * 
     * @param {StorageService} storageService 
     * @param {Renderer} renderer 
     */
    constructor(storageService, renderer) {
        this.#storageService = storageService;
        this.#renderer = renderer;
        this.#renderer.setController(this);
    }

    addProject({ title, description, color }) {
        const project = new Project({ title, description, color });
        this.#storageService.saveProject(project);
        this.#renderer.render();
    }

    deleteProject(id) {
        this.#storageService.deleteProject(id);
        this.#renderer.render();
    }
}