import { DateTime } from "luxon";
import { Memory } from "./memory";
import { showNewTodoModal } from "./newTodoModal";
import { Todo } from "./todo";

/**
 * 
 * @param {Memory} memory 
 */
export function renderProjects(memory) {
    const projectsList = document.querySelector('#projects');
    removeAllChildren(projectsList);
    const projectTitle = document.querySelector('#project-title');
    const projectDescription = document.querySelector('#project-description');
    const todos = document.querySelector('#project-todos-list');
    for (const project of memory.projects) {
        console.log(project);
        const projectElement = document.createElement('div');

        projectElement.textContent = project.title;

        projectElement.addEventListener('click', () => {
            console.log('in setp')
            removeAllChildren(todos);
            projectTitle.textContent = project.title;
            projectDescription.textContent = project.description;
            const addTodoButton = document.createElement('button');
            addTodoButton.textContent = 'Add Todo';
            addTodoButton.addEventListener('click', () => {
                showNewTodoModal((data) => {
                    const todo = new Todo({
                        title: data.title,
                        description: data.description,
                        dueDate: DateTime.fromFormat(data.dueDate, 'yyyy-MM-dd'),
                        priority: data.priority
                    });
                    memory.addTodo(project.id, todo);
                    renderProjects(memory);
                    projectElement.click();
                });
            });
            todos.appendChild(addTodoButton);
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
                checkBox.addEventListener('click', () => memory.toggleTodoDone(project.id, todo.id));
                todos.appendChild(todoElement);
            }
        });

        const button = document.createElement('button');
        button.textContent = 'delete'
        button.addEventListener('click', event => {
            event.stopPropagation();
            memory.deleteProject(project.id);
            removeAllChildren(projectsList);
            projectTitle.textContent = '';
            projectDescription.textContent = '';
            removeAllChildren(todos);
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