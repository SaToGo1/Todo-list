import taskMod from "./task";
import format from 'date-fns';


export default class taskData {
    constructor(){        
        this.taskArray = [];
    }

    //TO DO( return boolean and false if title repeated.)
    saveTask = (taskTitle, project) => {
        if(this.taskArray){
            for(let i = 0, length = this.taskArray.length; i < length; i++){
                if(taskTitle == this.taskArray[i].getTitle()) return false;
            }
        }
        let task = new taskMod(taskTitle, project);
        this.taskArray.push(task);

        //global task array
        globalTaskArray.push(task);
        

        return true;
    }

    //change completed from true to false or false to true.
    changeCompleteStatus = (taskTitle) => {
        let completed = true;
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle()) completed = this.taskArray[i].changeCompletion();
        }

        //global task array
        for(let i = 0, length = globalTaskArray.length; i < length; i++){
            if(taskTitle == globalTaskArray[i].getTitle()) globalTaskArray[i].changeCompletion();
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

        //globalTaskArray
        for(let i = 0, length = globalTaskArray.length; i < length; i++){
            if(taskTitle == globalTaskArray[i].getTitle()){
                globalTaskArray.splice(i, 1);
            }
        }
    }

    getTasksLength = () => {
        return this.taskArray.length;
    }

    getTaskTitleOnIndex = (i) => {
        return this.taskArray[i].getTitle();
    }

    getTaskDateOnIndex = (i) => {
        return this.taskArray[i].getDate();
    }

    getCompleteStatus = (taskTitle) => {
        let completed = true;
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle()) completed = this.taskArray[i].getCompletion();
        }
        return completed;
    }

   setDate = (taskTitle, date) => {

        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle()) this.taskArray[i].setDate(date);
        }

        //globalTaskArray
        for(let i = 0, length = globalTaskArray.length; i < length; i++){
            if(taskTitle == globalTaskArray[i].getTitle()){
                this.taskArray[i].setDate(date);
            }
        }
    }

    getDate = (taskTitle) => {
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle())  return this.taskArray[i].getDate();
        }
    }
}