export default class taskPage {
    constructor(){
        this.addTaskDiv = document.getElementById("addTaskDiv");
        //this.addTaskButton = this.addTaskDiv.childNodes[0];
        //this.addTaskName = this.addTaskDiv.childNodes[1];
        
    }

    addTaskEvent = () => {

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
    p.className = "contentTask__delete";
    p.textContent = "X";

    div.append(icon);
    div.append(p);
    div.append(button);

    return div;
}