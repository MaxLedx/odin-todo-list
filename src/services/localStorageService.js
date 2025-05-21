import { Project } from "../models/project";
import { Todo } from "../models/todo";

const KEY = 'projects';

/**
 * 
 * @param {Project[]} projects
 */
export function writeToLocalStorage(projects) {
    localStorage.setItem(KEY, JSON.stringify(projects));
}

/**
 * 
 * @returns {Project[]}
 */
export function readFromLocalStorage() {
    const value = localStorage.getItem(KEY);

    if (value === null) {
        return [];
    }

    const data = JSON.parse(value);

    const projects = [];

    for (const projectData of data) {
        const project = new Project({
            title: projectData.title,
            description: projectData.description,
            color: projectData.color,
            id: projectData.id
        });

        for (const todoData of projectData.todos) {
            const todo = new Todo({
                title: todoData.title,
                description: todoData.description,
                dueDate: todoData.dueDate,
                priority: todoData.priority,
                id: todoData.id,
                done: todoData.done
            });

            project.todos.push(todo);
        }

        projects.push(project);
    }

    return projects;
}