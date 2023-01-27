import taskMod from "./task";


export default class taskData {
    constructor(){        
        this.taskArray = [];
    }

    //TO DO( return boolean and false if title repeated.)
    saveTask = (taskTitle, pageName) => {
        if(this.taskArray){
            for(let i = 0, length = this.taskArray.length; i < length; i++){
                //dont save task if Task is Repeated   
                if(taskTitle == this.taskArray[i].getTitle()){
                    alert("Task is repeated. in pageName: "+ this.taskArray[i].getPageName());    
                    return false;
                } 
            }
        }
        let task = new taskMod(taskTitle, pageName);
        this.taskArray.push(task);
        return true;
    }

    //change completed from true to false or false to true.
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
            this.deleteTask(title);
        })
    }
}