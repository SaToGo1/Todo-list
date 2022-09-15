export default class addProject {
    constructor(){
        this.addProjectButton = document.getElementById("addProject");
        this.addProjectContainer = document.getElementById("addProjectContainer");
        this.addProjectAccept = document.getElementById("sidebar__accept");
        this.addProjectCancel = document.getElementById("sidebar__cancel");
    }

    addProjectClick = (action) => {
        this.addProjectButton.addEventListener('click', ()=>{
            this.addProjectContainer.innerHTML = HTMLTemplateAddProjectName();
        })
    }
  
}


//addProjectContainer
//addProject


function HTMLTemplateAddProjectName(){
    
    return `
    <div>
        <input type=text>
    </div>`
}