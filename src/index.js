import "./style.css";
import { Project } from "./project";
import { renderProjects } from "./renderer";
import { showNewProjectModal } from "./newProjectModal";
import { initializeMemory } from "./memory";

// Créer un objet state qui contient le dernier project sélectionné et la mémoire

localStorage.clear();
const memory = initializeMemory();
// Afficher les projets en mémoire dans la sidebar
document.querySelector('#projects-add').addEventListener('click', () => {
    showNewProjectModal((data) => {
        const project = new Project({
            title: data.title,
            description: data.description,
            color: data.color
        });
        console.log(project);
        memory.addProject(project);
        renderProjects(memory);
    });
});
renderProjects(memory);