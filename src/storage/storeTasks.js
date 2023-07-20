import Task from "../Main/task";
import { getUser } from "../config/user-config";
import { get, store } from "../services/firestore";

const storeTasks = {
    initialLoad: async () => {
        let isStoredData = false;
        let taskArray = [];
        let user = getUser();
        let userData = null;

        if (user) {
            let task;
            isStoredData = true;
            userData = await get({user})
            let tasks = userData.tasks
            if (tasks !== '') {
                JSON.parse(tasks, (key, value) => {
    
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
        } else {
            localStorage.setItem("taskArray", JSON.stringify(taskArray));
        }
    }
}

export default storeTasks;
