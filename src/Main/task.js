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

    setCompletion = (completion) => {
        this.completed = completion;
    }

    getDate = () =>{
        return this.date;
    }

    setDate = (date) => {
        this.date = date; 
    }

    getPageName = () => {
        return this.pageName;
    }

    setPageName = (pageName) => {
        this.pageName = pageName;
    }
}