import isToday from 'date-fns/isToday'
import isThisWeek from 'date-fns/isThisWeek'
import isThisMonth from 'date-fns/isThisMonth'
import { CreateNewTaskElements, CreateTaskPageElements } from '../htmlScripts/html_taskPage';
import { TaskErrorMessage, deleteErrorMessage } from './taskPageErrMessage';

export default class taskPage {
    constructor(name, taskData){
        this.pageName = name;
        this.addTaskDiv = document.getElementById("addTask__Div");
        this.addTaskButton = document.getElementById("addTask__button");
        this.addTaskName = document.getElementById("addTask__text");

        this.taskList = document.getElementById("tasklist");
        this.content = document.getElementById("content");
        
        this.taskData = taskData;
    }

    //Controls the + button of the task input.
    addTaskEvent = () => {
        this.addTaskButton.addEventListener('click', ()=>{
            
            let taskTitle = this.addTaskName.value;

            if(taskTitle.length > 0 && taskTitle.length < 71){
            //if name is not repeated, save task append into task list.
                let { taskNotRepeated, repeatedName } = this.taskData.saveTask(taskTitle, this.pageName);
                
                if(taskNotRepeated){
                    let taskDiv = CreateNewTaskElements(taskTitle);
                    this.taskList.append(taskDiv);

                    //add event to the delete button
                    this.addDeleteEvent(taskDiv);
                    //add event to the completion button
                    this.addCompletionEvent(taskDiv);
                    //dateEvent
                    this.addDateEvent(taskDiv);

                    deleteErrorMessage();
                }
                else {
                    TaskErrorMessage({ message: `Task "${taskTitle}" is repeated. in ${repeatedName} project` })
                }
            } else{
                TaskErrorMessage({ message: "Project name must have between 1 and 70 characters." })
            }
        })
    }

    addDeleteEvent = (taskDiv) => {
        let taskTitle = taskDiv.getElementsByTagName('p')[0].textContent;
        let deleteButton = taskDiv.getElementsByTagName('button')[0]
        deleteButton.addEventListener('click', () => {
            taskDiv.remove();
            this.taskData.deleteTask(taskTitle);
        })
    }

    //change style.
    addCompletionEvent = (taskDiv) => {
        //Select button O(or icon) to the left of the task.
        let completionButton = taskDiv.getElementsByTagName('span')[0]
        let taskTitle = taskDiv.getElementsByTagName('p')[0].textContent;
        
        completionButton.addEventListener('click', () => {
            this.changeCompletion(taskDiv, taskTitle, completionButton);
        }) 
    }

    addDateEvent = (taskDiv) => {
        let taskTitle = taskDiv.getElementsByTagName('p')[0].textContent;
        let date = taskDiv.getElementsByTagName('input')[0];

        date.addEventListener('change', () => {
            let dateString = taskDiv.getElementsByTagName('input')[0].value;

            this.taskData.setDate(taskTitle, dateString);
        });
    }

    changeCompletion = (taskDiv, taskTitle, completionButton) => {
        //calls the change of completion and gets if status is true or false.
        let completed = this.taskData.changeCompleteStatus(taskTitle);
        if(completed){
            //style a
            completionButton.classList.remove('contentTask__icon');
            completionButton.classList.add('contentTask__icon-active');
            taskDiv.classList.add('contentTask__textdashed');
        }else{
            completionButton.classList.add('contentTask__icon');
            completionButton.classList.remove('contentTask__icon-active');
            taskDiv.classList.remove('contentTask__textdashed');
        }
        
    }

    loadPage = () => {
        this.content.innerHTML = " ";
        this.content.append(CreateTaskPageElements(this.pageName));

        this.addTaskDiv = document.getElementById("addTask__Div");
        this.addTaskButton = document.getElementById("addTask__button");
        this.addTaskName = document.getElementById("addTask__text");
        this.taskList = document.getElementById("tasklist");
        
        this.addTaskEvent();

        //Home page shows all the tasks we have in the array.
        if(this.pageName == 'Home'){
            this.displayAllTasks();
            return 0;
        }
        this.displayMultipleTasks();
    }

    displayMultipleTasks = () => {
        let length = this.taskData.getTasksLength();
        for(let i = 0; i < length; i++){
            let title = this.taskData.getTaskTitleOnIndex(i);
            let pageName = this.taskData.getPageName(title);
            if(pageName == this.pageName) this.displayTask(title);
        }

        //Specific display
        this.Today();
        this.Week();
        this.Month();
    }

    displayTask = (title) => {
        let taskDiv = CreateNewTaskElements(title);
    
        //checking completion
        let completedTask = this.taskData.getCompleteStatus(title);
        let completionButton = taskDiv.getElementsByTagName('span')[0];
        //if the task is complete apply complete style.
        if(completedTask){
            completionButton.classList.remove('contentTask__icon');
            completionButton.classList.add('contentTask__icon-active');
            taskDiv.classList.add('contentTask__textdashed');
        }
    
        //checking Date
        let dateInput = taskDiv.getElementsByTagName('input')[0];
        dateInput.value = this.taskData.getDate(title);
    
        //Adding the task to the taskList.
        this.taskList.append(taskDiv);
        this.taskFunctionality(taskDiv);
    }

    taskFunctionality = (taskDiv) => {
        //add event to the delete button.
        this.addDeleteEvent(taskDiv);
        
        //add event to the completion button.
        this.addCompletionEvent(taskDiv);
        
        //add event for the date input. 
        this.addDateEvent(taskDiv);
    }

    //look for tasks that their date is today and add them to today page
    Today = () => {
        //page Name is today
        if(!(this.pageName == "Today")){
            return ;
        }
        
        //Empty string, there are no tasks
        if(this.taskData.getTasksLength() == 0){
            return ;
        }

        for(let i = 0, len = this.taskData.getTasksLength(); i < len; i++){
            let taskTitle = this.taskData.getTaskTitleOnIndex(i);
            let dateString = this.taskData.getDate(taskTitle);

            //task has a defined date?
            if(dateString == 'noDate'){
                continue;
            }
            let date = new Date(dateString);

            //we Are on the same day?
            if(!isToday(date)){
                continue;
            }

            this.displayTask(taskTitle);
        }
    }

    //look for tasks that their date is in this week and add them to week page
    Week = () => {
        //page Name is week
        if(!(this.pageName == "Week")){
            return ;
        }
        
        //Empty string, there are no tasks
        if(this.taskData.getTasksLength() == 0){
            return ;
        }

        for(let i = 0, len = this.taskData.getTasksLength(); i < len; i++){
            let taskTitle = this.taskData.getTaskTitleOnIndex(i);
            let dateString = this.taskData.getDate(taskTitle);

            //task has a defined date?
            if(dateString == 'noDate'){
                continue;
            }
            let date = new Date(dateString);

            //we Are on the same Week?
            if(!isThisWeek(date)){
                continue;
            }

            this.displayTask(taskTitle);
        }
    }

    //look for tasks that their date is in this week and add them to week page
    Month = () => {
        //page Name is month
        if(!(this.pageName == "Month")){
            return ;
        }
        
        //Empty string, there are no tasks
        if(this.taskData.getTasksLength() == 0){
            return ;
        }

        for(let i = 0, len = this.taskData.getTasksLength(); i < len; i++){
            let taskTitle = this.taskData.getTaskTitleOnIndex(i);
            let dateString = this.taskData.getDate(taskTitle);

            //task has a defined date?
            if(dateString == 'noDate'){
                continue;
            }
            let date = new Date(dateString);

            //we Are on the same Month?
            if(!isThisMonth(date)){
                continue;
            }

            this.displayTask(taskTitle);
        }
    }

    deleteAllTasksInPage = (projectName) => {
        this.taskData.deleteAllTaskFromAPage(projectName);
    }

    displayAllTasks = () => {
        let length = this.taskData.getTasksLength();
        for(let i = 0; i < length; i++){
            let title = this.taskData.getTaskTitleOnIndex(i);
            this.displayTask(title);
        }
    }
}
