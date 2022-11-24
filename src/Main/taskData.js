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
    changeCompleteStatus = (taskTitle) => {
        let completed = true;
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle()) completed = this.taskArray[i].changeCompletion();
        }
        return completed;
    }

    deleteTask = (taskTitle) => {
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            //check if taskarray[i] exists, if we delete 1 entrance of array
            // and we check last element it will throw error we check undefined.
            if(this.taskArray[i]){
                if(taskTitle == this.taskArray[i].getTitle()){
                    this.taskArray.splice(i, 1);
                }
            }
        }
    }
}