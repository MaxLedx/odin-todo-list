export class State {
    constructor({ memory, currentSelectedProject = null }) {
        this.memory = memory;
        this.currentSelectedProject = currentSelectedProject;
    }
}