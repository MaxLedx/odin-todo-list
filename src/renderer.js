import { DateTime } from "luxon";
import { showNewTodoModal } from "./newTodoModal";
import { Todo } from "./todo";
import { State } from "./state";
import { showNewProjectModal } from "./newProjectModal";
import { Project } from "./project";

export class Renderer {
    /**
     * 
     * @param {State} state 
     */
    constructor(state) {
        this.state = state;
        this.addProjectButton = document.querySelector('#projects-add');
        this.addProjectButton.addEventListener('click', () => this.#addNewProject());
        this.addTodoButton = document.querySelector('#projects-todo-add');
        this.addTodoButton.addEventListener('click', () => this.#addNewTodo());
        this.projectsElement = document.querySelector('#projects');
        this.projectTitleElement = document.querySelector('#project-title')
        this.projectDescriptionElement = document.querySelector('#project-description');
        this.todosElement = document.querySelector('#project-todos-list');
    }

    renderProjects() {
        removeAllChildren(this.projectsElement);
        for (const project of this.state.memory.projects) {
            const projectElement = document.createElement('div');
            projectElement.addEventListener('click', () => this.#displayProject(project));
            this.projectsElement.appendChild(projectElement);
            const projectTitle = document.createElement('p');
            projectTitle.textContent = project.title;
            projectElement.appendChild(projectTitle);
            const deleteProjectButton = document.createElement('button');
            deleteProjectButton.textContent = 'Delete';
            deleteProjectButton.addEventListener('click', event => {
                event.stopPropagation();
                this.#deleteProject(project.id);
            });
            projectElement.appendChild(deleteProjectButton);
        }
    }

    #addNewProject() {
        showNewProjectModal(data => {
            const project = new Project({
                title: data.title,
                description: data.description,
                color: data.color
            });
            this.state.memory.addProject(project);
            this.renderProjects();
        });
    }

    #displayProject(project) {
        this.state.currentSelectedProject = project.id;
        this.projectTitleElement.textContent = project.title;
        this.projectDescriptionElement.textContent = project.description;
        removeAllChildren(this.todosElement);
        for (const todo of project.todos) {
            console.log(todo);
            const todoElement = document.createElement('div');
            const checkBox = document.createElement('input');
            checkBox.setAttribute('type', 'checkbox');
            checkBox.checked = todo.done;
            todoElement.appendChild(checkBox);
            const todoTitle = document.createElement('h2');
            todoTitle.textContent = todo.title;
            todoElement.appendChild(todoTitle);
            const todoDescription = document.createElement('p');
            todoDescription.textContent = todo.description;
            todoElement.appendChild(todoDescription);
            const dueDate = document.createElement('div');
            dueDate.textContent = todo.dueDate;
            todoElement.appendChild(dueDate);
            const priority = document.createElement('div');
            priority.textContent = todo.priority;
            todoElement.appendChild(priority);
            checkBox.addEventListener('click', () => this.state.memory.toggleTodoDone(project.id, todo.id));
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => this.#deleteTodo(todo.id));
            todoElement.appendChild(deleteButton);
            this.todosElement.appendChild(todoElement);
        }
    }

    #deleteProject(id) {
        this.state.memory.deleteProject(id);
        this.renderProjects();
        if (this.state.currentSelectedProject === id) {
            this.state.currentSelectedProject = null;
            this.projectTitleElement.textContent = '';
            this.projectDescriptionElement.textContent = '';
            removeAllChildren(this.todosElement);
        }
    }

    #addNewTodo() {
        showNewTodoModal(data => {
            const todo = new Todo({
                title: data.title,
                description: data.description,
                dueDate: DateTime.fromFormat(data.dueDate, 'yyyy-MM-dd'),
                priority: data.priority
            });
            this.state.memory.addTodo(this.state.currentSelectedProject, todo);
            const project = this.state.memory.getProject(this.state.currentSelectedProject);
            this.#displayProject(project);
        });
    }

    #deleteTodo(id) {
        this.state.memory.deleteTodo(this.state.currentSelectedProject, id);
        const project = this.state.memory.getProject(this.state.currentSelectedProject);
        this.#displayProject(project);
    }
}

function removeAllChildren(element) {
    while (element.firstChild) {
        element.removeChild(element.lastChild);
    }
}