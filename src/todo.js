export class Todo {
    #id = crypto.randomUUID();
    #done = false;
    #title;
    #description;
    #dueDate;
    #priority;

    constructor(title, description, dueDate, priority) {
        this.#title = title;
        this.#description = description;
        this.#dueDate = dueDate;
        this.#priority = priority;
    }

    get id() {
        return this.#id;
    }

    get done() {
        return this.#done;
    }

    toggleDone() {
        this.#done = !this.#done;
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

    get dueDate() {
        return this.#dueDate;
    }

    set dueDate(value) {
        this.#dueDate = value;
    }

    get priority() {
        return this.#priority;
    }

    set priority(value) {
        this.#priority = value;
    }
}