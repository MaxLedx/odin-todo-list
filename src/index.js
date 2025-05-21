import { ProjectController } from './controllers/projectController';
import { InMemoryStorage } from './infrastructure/inMemoryStorage';
import { PersistentStorage } from './infrastructure/persistentStorage';
import { StorageService } from './services/storageService';
import './style.css';
import { Renderer } from './views/renderer';
import { showNewProjectModal } from './views/showNewProjectModal';

localStorage.clear();
const persistentStorage = new PersistentStorage('projects', localStorage);
const inMemoryStorage = new InMemoryStorage([]);
const storageService = new StorageService(inMemoryStorage, persistentStorage);
const renderer = new Renderer(inMemoryStorage);
const projectController = new ProjectController(storageService, renderer);

const addProjectButton = document.querySelector('#add-project-button');
addProjectButton.addEventListener('click', () => showNewProjectModal((val) => {
    projectController.addProject(val);
}));