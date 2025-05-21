import { Todo } from "./todo";

export class Project {
    constructor({ title, description, color }) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.description = description;
        this.color = color;
        this.todos = [];
    }

    /**
     * 
     * @param {Todo} todo 
     */
    addTodo(todo) {
        this.todos.push(todo);
    }
}