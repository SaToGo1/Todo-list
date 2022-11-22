import taskMod from "./task";

export default class taskData {
    constructor(){        
        this.taskArray = [];
        /*if(this.taskArray){
            for(...)
        }*/
    }

    //TO DO( return boolean and false if title repeated.)
    saveTask = (taskTitle) => {
        let task = new taskMod(taskTitle);
        this.taskArray.push(task);

    }

    // TO DO (will change completed from true to false or false to true).
    changeCompleteStatus = () => {

    }
}