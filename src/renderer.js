import { Memory } from "./memory";

/**
 * 
 * @param {Memory} memory 
 */
export function renderProjects(memory) {
    const projectsList = document.querySelector('#projects');
    const projectTitle = document.querySelector('#project-title');
    const projectDescription = document.querySelector('#project-description');
    for (const project of memory.projects) {
        const projectElement = document.createElement('div');

        projectElement.textContent = project.title;
        projectElement.addEventListener('click', () => {
            console.log('click')
            projectTitle.textContent = project.title;
            projectDescription.textContent = project.description;
        });
        // TODO: Setup on delete event listener
        const button = document.createElement('button');
        button.textContent = 'delete'
        button.addEventListener('click', event => {
            event.stopPropagation();
            console.log('del');
            memory.deleteProject(project.id);
            removeAllChildren(projectsList);
            // TODO: clear title, description and todos
            renderProjects(memory);

        });

        projectElement.appendChild(button);
        projectsList.appendChild(projectElement);
    }
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}