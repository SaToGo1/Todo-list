export default class taskPage {
    constructor(){
        this.addTaskDiv = document.getElementById("addTask__Div");
        this.addTaskButton = document.getElementById("addTask__button");
        this.addTaskName = document.getElementById("addTask__text");

        this.taskList = document.getElementById("tasklist");
        
    }

    addTaskEvent = () => {
        this.addTaskButton.addEventListener('click', ()=>{
            let taskDiv = CreateNewTaskElements(this.addTaskName.value);

            this.taskList.append(taskDiv);
        })
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