import './style.css';
import { showNewProjectModal } from './views/showNewProjectModal';

const addProjectButton = document.querySelector('#add-project-button');
addProjectButton.addEventListener('click', () => showNewProjectModal((val) => console.log(val)));