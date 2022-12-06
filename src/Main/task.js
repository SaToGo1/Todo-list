export default class task {
    constructor(title, project){
        this.title = title;
        this.completed = false;
        //no use right now
        this.project = project;
        this.date = 'noDate';
    }

    getTitle = () => {
        return this.title;
    }

    changeCompletion = () => {
        this.completed = !this.completed;
        return this.completed;
    }

    getCompletion = () => {
        return this.completed;
    }

    setDate = (date) => {
        this.date = date; 
    }

    getDate = () =>{
        return this.date;
    }
}