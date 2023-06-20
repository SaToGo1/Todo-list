import './html_addProject.css'

export function CreateAddingProjectNameElements(){
    
    let div = document.createElement('div');
    div.className = "sidebar__container-addingProject sidebar__addProject";
    div.id = "sidebar__addingProject";
    
    let label = document.createElement('label');
    label.for = "sidebar__ProjectNameInput";
    label.textContent = "Project Name:";

    let input = document.createElement('input');
    input.type = "text";
    input.id = "sidebar__ProjectNameInput";
    input.maxLength = 20;
    input.minLength = 1;

    let greenButton = document.createElement('button');
    greenButton.classList.add("sidebar__button", "sidebar__accept");
    greenButton.id = "sidebar__accept";
    greenButton.textContent = "Accept";

    let redButton =  document.createElement('button');
    redButton.classList.add("sidebar__button", "sidebar__cancel");
    redButton.id = "sidebar__cancel";
    redButton.textContent = "Cancel";

    div.append(label);
    div.append(input);
    div.append(greenButton);
    div.append(redButton);

    return div;
}

export function CreateNewProjectElements(projectNameArg=' '){
    let projectName;

    if(projectNameArg == ' '){
        projectName = document.getElementById("sidebar__ProjectNameInput").value;
    }else{
        projectName = projectNameArg;
    }

    let div = document.createElement('div');
    div.className = "sidebar__container";

    let img = document.createElement('img');
    img.src = "./img/tag.svg";
    img.alt = "icon";
    img.className = "sidebar__icon";

    let button = document.createElement('button');
    button.className = "sidebar__button";
    button.textContent = projectName;

    let button2 = document.createElement('button');
    button2.className = "sidebar__delete";
    button2.textContent = "X";

    let popup = document.createElement('span');
    popup.textContent = "testing";
    popup.className = "sidebar__deleteConfirmation-Popup";

    button2.append(popup);
    div.append(img);
    div.append(button);
    div.append(button2);

    return div;
}

export function deleteConfirmationDiv({message, x, y}){
    let div = document.createElement('div');
    div.className = "sidebar__deleteConfirmation";
    div.style.top = `${y - 20}px`
    div.style.left = `${x - 20}px`

    let messageElement = document.createElement('h4');
    messageElement.textContent = message;

    let acceptButton = document.createElement('button');
    acceptButton.textContent = "Accept";
    acceptButton.id = "sidebar__deleteConfirmation-accept"
    let declineButton =  document.createElement('button');
    declineButton.textContent = "Cancel";
    declineButton.id = "sidebar__deleteConfirmation-decline"

    div.append(messageElement);
    div.append(acceptButton);
    div.append(declineButton);

    return div;
}