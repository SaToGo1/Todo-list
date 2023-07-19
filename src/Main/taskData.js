//import task from "./task";
import taskMod from "./task";
import storeTasks from "../storage/storeTasks"

export default class taskData {
    constructor(){        
        this.taskArray = [];
        let { isStoredData, taskArray } = storeTasks.initialLoad()
        if (isStoredData) this.taskArray = [...taskArray];

    }

    saveTask = (taskTitle, pageName) => {
        if(this.taskArray){
            for(let i = 0, length = this.taskArray.length; i < length; i++){
                //dont save task if Task is Repeated   
                if(taskTitle == this.taskArray[i].getTitle()){
                    let pageName = this.taskArray[i].getPageName();
                    console.log("Task is repeated. in pageName: "+ pageName);
                    return { 
                        taskNotRepeated: false,
                        repeatedName: pageName
                    };
                } 
            }
        }
        let task = new taskMod(taskTitle, pageName);
        this.taskArray.push(task);

        storeTasks.saveNewTaskArray(this.taskArray);
        return { taskNotRepeated: true, repeatedName: undefined };
    }

    //change completed from true to false or false to true.
    changeCompleteStatus = (taskTitle) => {
        let completed = true;
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle()) completed = this.taskArray[i].changeCompletion();
        }

        storeTasks.saveNewTaskArray(this.taskArray);
        return completed;
    }

    deleteTask = ({ taskTitle, deleteAll = false }) => {
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            //check if taskarray[i] exists, if we delete 1 entrance of array
            // and we check last element it will throw error we check undefined.
            if(this.taskArray[i]){
                if(taskTitle == this.taskArray[i].getTitle()){
                    this.taskArray.splice(i, 1);
                }
            }
        }

        // if we are deleting all the tasks we will deal with local
        // storage in delete all function so it don't trigger multiple
        // local storage operations in a row.
        if(!deleteAll){
            storeTasks.saveNewTaskArray(this.taskArray);
        }
    }

    getTasksLength = () => {
        return this.taskArray.length;
    }

    getTaskTitleOnIndex = (i) => {
        return this.taskArray[i].getTitle();
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

        storeTasks.saveNewTaskArray(this.taskArray);
    }

    getDate = (taskTitle) => {
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle())  return this.taskArray[i].getDate();
        }
    }

    //equal to getProject
    getPageName = (taskTitle) => {
        for(let i = 0, length = this.taskArray.length; i < length; i++){
            if(taskTitle == this.taskArray[i].getTitle())  return this.taskArray[i].getPageName();
        }
    }

    deleteAllTaskFromAPage = (pageName) => {
        let taskTitleArray = [];

        this.taskArray.forEach(task => {
            if(pageName == task.getPageName()) taskTitleArray.push(task.getTitle());
        })

        taskTitleArray.forEach( title => {
            this.deleteTask({ taskTitle: title, deleteAll: true });
        })

        storeTasks.saveNewTaskArray(this.taskArray);
    }

    loadTasks = () => {
        let { isStoredData, taskArray } = storeTasks.initialLoad()
        if (isStoredData) this.taskArray = [...taskArray];
    }
}