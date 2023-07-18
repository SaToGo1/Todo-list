import Task from "../Main/task";

const storeTasks = {
    initialLoad: () => {
        let isStoredData = false;
        let taskArray = [];

        
        if (localStorage.getItem("taskArray") !== null) {
            let task;
            isStoredData = true;
            JSON.parse(localStorage.getItem("taskArray"), (key, value) => {
    
                if(key == 'title'){
                    task = new Task(value);
                }
    
                if(key == 'completed'){
                    task.setCompletion(value);
                }
    
                if(key == 'pageName'){
                    task.setPageName(value);
                }
    
                if(key == 'date'){
                    task.setDate(value);
                    taskArray.push(task);
                }
            })
        }

        return {
            isStoredData,
            taskArray
        }
    },

    saveNewTaskArray: (taskArray) => {
        localStorage.setItem("taskArray", JSON.stringify(taskArray));
    }
}

export default storeTasks;
