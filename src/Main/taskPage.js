import taskDataMod from "./taskData";

export default class taskPage {
    constructor(){
        this.addTaskDiv = document.getElementById("addTask__Div");
        this.addTaskButton = document.getElementById("addTask__button");
        this.addTaskName = document.getElementById("addTask__text");

        this.taskList = document.getElementById("tasklist");
        
        
        this.taskData = new taskDataMod();
        /*if(this.taskArray){
            for(...)
        }*/
    }

    //Controls the + button of the task input.
    addTaskEvent = () => {
        this.addTaskButton.addEventListener('click', ()=>{
            
            let taskTitle = this.addTaskName.value;

            //if name is not repeated, save task append into task list.
            if(this.taskData.saveTask(taskTitle)){
                let taskDiv = CreateNewTaskElements(taskTitle);
                this.taskList.append(taskDiv);
            }
        })
    }

    //Will show the tasks saved in array.
    displayTasks = () => {
        return 1;
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

    let button = document.createElement('button');
    button.className = "contentTask__delete";
    button.textContent = "X";

    div.append(icon);
    div.append(p);
    div.append(button);

    return div;
}