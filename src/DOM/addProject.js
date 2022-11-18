export default class addProject {
    constructor(){
        this.addProjectButton = document.getElementById("addProject");
        this.addProjectButtonContainer = document.getElementById("addProjectContainer");

        //Confusing name (?)
        this.addProjectSidebarContainer = document.getElementById("sidebar__projects");
    }

    addProjectClick = (action) => {
        this.addProjectButton.addEventListener('click', ()=>{
            let addingProjectDiv = CreateAddingProjectNameElements();

            this.addProjectButtonContainer.style.display = 'none';
            this.addProjectSidebarContainer.append(addingProjectDiv);

            
            let greenButton = document.getElementById("sidebar__accept");
            let redButton = document.getElementById("sidebar__cancel");

            // Cancel new project and show again add Project button
            //redButton.addEventListener('click', this.addAcceptCancelClick(redButton, greenButton));

            //Event for the accept button(green) -> create a new project
            greenButton.addEventListener('click', ()=>{
                this.addAcceptClick(addingProjectDiv)
            }); 
            
        })
    }

    // TODO create addEventListeners for New Project buttons.
    addAcceptClick = (addingProjectDiv) => {

        //Create div with new project and add to the DOM.
        let newProjectDiv = CreateNewProjectElements();
        this.addProjectSidebarContainer.append(newProjectDiv);

        //Put add project button as last item in the sidebar project section.
        this.addProjectButtonContainer.parentNode.appendChild(this.addProjectButtonContainer);

        //display add project button as visible again.
        this.addProjectButtonContainer.style.display = 'initial';

        //delete adding project DIV.
        addingProjectDiv.remove();
    }
    
}

function CreateAddingProjectNameElements(){
    
    let div = document.createElement('div');
    div.className = "sidebar__container-addingProject sidebar__addProject";
    div.id = "sidebar__addingProject";
    
    let label = document.createElement('label');
    label.for = "sidebar__ProjectNameInput";
    label.textContent = "Project Name:";

    let input = document.createElement('input');
    input.type = "text";
    input.id = "sidebar__ProjectNameInput";

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

function CreateNewProjectElements(){
    
    let projectName = document.getElementById("sidebar__ProjectNameInput").value;

    let div = document.createElement('div');
    div.className = "sidebar__container";

    let img = document.createElement('img');
    img.src = "./img/icon.svg";
    img.alt = "icon";
    img.className = "sidebar__icon";

    let button = document.createElement('button');
    button.className = "sidebar__button";
    button.textContent = projectName;

    let button2 = document.createElement('button');
    button2.className = "sidebar__delete";
    button2.textContent = "X";

    div.append(img);
    div.append(button);
    div.append(button2);

    return div;
}
