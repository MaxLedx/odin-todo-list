export class Project {
    constructor(
        {
            title,
            description,
            color,
            id = crypto.randomUUID(),
            todos = []
        }
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.color = color;
        this.todos = todos;
    }
}