export function CreateNewTaskElements(name){
 
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

export function CreateTaskPageElements(pageName){
    
    //let section = document.createElement('section');
    //div.className = "content";

    let div = document.createElement('div');
    div.className = "content__page";

    let h2 = document.createElement('h2');
    h2.textContent = pageName;

    let div2err = document.createElement('div');
    div2err.className = "content__addTaskContainer-err";
    div2err.id = "content__addTaskContainer-err";

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
    input.maxLength = 70;

    let h3 = document.createElement('h3');
    h3.textContent = "Tasks"

    let div3 = document.createElement('div');
    div3.className = "content__tasklist";
    div3.id = "tasklist";

    div2.append(button);
    div2.append(input);

    div2err.append(div2);

    div.append(h2);
    div.append(div2err);
    div.append(h3);
    div.append(div3);

    return div;
}