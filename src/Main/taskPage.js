import taskDataMod from "./taskData";

export default class taskPage {
    constructor(name){
        this.pageName = name;
        this.addTaskDiv = document.getElementById("addTask__Div");
        this.addTaskButton = document.getElementById("addTask__button");
        this.addTaskName = document.getElementById("addTask__text");

        this.taskList = document.getElementById("tasklist");

        this.content = document.getElementById("content");
        
        
        this.taskData = new taskDataMod();
    }

    //Controls the + button of the task input.
    addTaskEvent = () => {
        this.addTaskButton.addEventListener('click', ()=>{
            
            let taskTitle = this.addTaskName.value;

            if(taskTitle.length > 0 && taskTitle.length < 76){
            //if name is not repeated, save task append into task list.
                if(this.taskData.saveTask(taskTitle, this.pageName)){
                    let taskDiv = CreateNewTaskElements(taskTitle);
                    this.taskList.append(taskDiv);

                    //add event to the delete button
                    this.addDeleteEvent(taskDiv);
                    //add event to the completion button
                    this.addCompletionEvent(taskDiv);
                    //dateEvent
                    this.addDateEvent(taskDiv);
                }
            } else{
                alert("Project name must have between 1 and 90 characters.");
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
        this.displayTasks();
    }

    displayTasks = () => {
        let length = this.taskData.getTasksLength();
        for(let i = 0; i < length; i++){
            let title = this.taskData.getTaskTitleOnIndex(i);
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
            dateInput.value = this.taskData.getTaskDateOnIndex(i);

            //Adding the task to the taskList.
            this.taskList.append(taskDiv);
            this.taskFunctionality(taskDiv);
        }

        //Global Object
        /*for(let i = 0, len = globalTaskArray.length; i < len; i++){
            console.log('Hello');
        }*/
    }

    taskFunctionality = (taskDiv) => {
         //add event to the delete button
         this.addDeleteEvent(taskDiv);
         //add event to the completion button
         this.addCompletionEvent(taskDiv);

         this.addDateEvent(taskDiv);
    }
}

function CreateNewTaskElements(name){
 
    let div = document.createElement('div');
    div.className = "content__task";

    let icon = document.createElement('span');
    icon.className = "contentTask__icon";

    let p = document.createElement('p');
    p.className = "contentTask__text";
    p.textContent = name;

    let date = document.createElement('input');
    date.type = "date";
    date.className = "contentTask__date"

    let button = document.createElement('button');
    button.className = "contentTask__delete";
    button.textContent = "X";

    div.append(icon);
    div.append(p);
    div.append(date);
    div.append(button);

    return div;
}

function CreateTaskPageElements(pageName){
    
    //let section = document.createElement('section');
    //div.className = "content";

    let div = document.createElement('div');
    div.className = "content__page";

    let h2 = document.createElement('h2');
    h2.textContent = pageName;

    let div2 = document.createElement('div');
    div2.className = "content__addTaskContainer";
    div2.id = "addTask__Div";

    let button = document.createElement('button');
    button.className = "content__add";
    button.id = "addTask__button";
    button.textContent = "+";

    let input = document.createElement('input');
    input.className = "content__input";
    input.id = "addTask__text";
    input.type = "text";
    input.maxLength = 75;

    let h3 = document.createElement('h3');
    h3.textContent = "Tasks"

    let div3 = document.createElement('div');
    div3.className = "content__tasklist";
    div3.id = "tasklist";

    div2.append(button);
    div2.append(input);

    div.append(h2);
    div.append(div2);
    div.append(h3);
    div.append(div3);

    return div;
}

/*
function Today(){
    
}
*/