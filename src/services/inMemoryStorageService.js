export class Memory {
    constructor({ onWrite }) {
        this.projects = [];
        this.onWrite = onWrite;
    }

    addProject(project) {
        this.projects.push(project);
        this.onWrite(this.projects);
    }


    addTodo(projectId, todo) {
        const project = this.projects.find(project => project.id === projectId);
        if (project !== undefined) {
            project.todos.push(todo);
            this.onWrite(this.projects);
        }
    }

    deleteTodo(projectId, todoId) {
        const project = this.projects.find(project => project.id === projectId);
        if (project !== undefined) {
            project.todos = project.todos.filter(todo => todo.id !== todoId);
            this.onWrite(this.projects);
        }
    }

    deleteProject(id) {
        this.projects = this.projects.filter(project => project.id !== id);
        this.onWrite(this.projects);
    }

    getAllProjects() {
        return this.projects;
    }
}