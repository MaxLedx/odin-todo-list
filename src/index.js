import { ProjectController } from './controllers/projectController';
import { InMemoryStorage } from './services/inMemoryStorage';
import { PersistentStorage } from './services/persistentStorage';
import './style.css';
import { Renderer } from './views/renderer';
import { showNewProjectModal } from './views/showNewProjectModal';

localStorage.clear();
const persistentStorage = new PersistentStorage('projects', localStorage);
const inMemoryStorage = new InMemoryStorage([]);
const projectController = new ProjectController(inMemoryStorage, persistentStorage);
const renderer = new Renderer(inMemoryStorage);

const addProjectButton = document.querySelector('#add-project-button');
addProjectButton.addEventListener('click', () => showNewProjectModal((val) => {
    projectController.addProject(val);
    renderer.render();
}));