export default class task {
    constructor(title){
        this.title = title;
        this.completed = false;
    }

    getTitle = () => {
        return this.title;
    }
}