export default class task {
    constructor(title, pageName){
        this.title = title;
        this.completed = false;
        //no use right now
        this.pageName = pageName;
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

    //Does the same than getPageName
    /*getProject = () => {
        return this.pageName;
    }*/

    getPageName = () => {
        return this.pageName;
    }
}