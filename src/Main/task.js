export default class task {
    constructor(title){
        this.title = title;
        this.completed = false;
    }

    getTitle = () => {
        return this.title;
    }

    changeCompletion = () => {
        this.completed = !this.completed;
        return this.completed;
    }
}