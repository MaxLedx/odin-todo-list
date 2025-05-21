export class Todo {
    constructor(
        {
            title,
            description,
            dueDate,
            priority,
            id = crypto.randomUUID(),
            done = false
        }
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.done = done;
    }
}