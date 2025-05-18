export class Project {
    #id = crypto.randomUUID();
    #title;
    #description;
    #color;
    #todos = [];

    constructor(title, description, color) {
        this.#title = title;
        this.#description = description;
        this.#color = color;
    }

    get id() {
        return this.#id;
    }

    get title() {
        return this.#title;
    }

    set title(value) {
        this.#title = value;
    }

    get description() {
        return this.#description;
    }

    set description(value) {
        this.#description = value;
    }

    get color() {
        return this.#color;
    }

    set color(value) {
        this.#color = value;
    }

    addTodo(todo) {
        this.#todos.push(todo);
    }

    getTodo(id) {
        return this.#todos.find(t => t.id === id);
    }

    deleteTodo(id) {
        this.#todos = this.#todos.filter(t => t.id !== id);
    }
}