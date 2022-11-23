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
        if(this.taskArray){
            for(let i = 0, length = this.taskArray.length; i < length; i++){
                if(taskTitle == this.taskArray[i].getTitle()) return false;
            }
        }
        let task = new taskMod(taskTitle);
        this.taskArray.push(task);

        return true;
    }

    // TO DO (will change completed from true to false or false to true).
    changeCompleteStatus = () => {

    }

    deleteTask = (taskTitle) => {
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle()){
                this.taskArray.splice(i, 1);
            }
        }
    }
}