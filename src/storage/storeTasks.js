import Task from "../Main/task";
import { getUser } from "../config/user-config";

const storeTasks = {
    initialLoad: () => {
        let isStoredData = false;
        let taskArray = [];
        let user = getUser();

        if (user) {
            isStoredData = true;
        } else if (localStorage.getItem("taskArray") !== null) {
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
        let user = getUser();

        if (user) {
            let tasks = JSON.stringify(taskArray);
            store({user, tasks})
            console.log('save task user logged')
        } else {
            localStorage.setItem("taskArray", JSON.stringify(taskArray));
        }
    }
}

export default storeTasks;
