(()=>{"use strict";var __webpack_modules__={910:(e,t,a)=>{a.d(t,{Z:()=>i});class n{constructor(e){this.title=e,this.completed=!1}getTitle=()=>this.title;changeCompletion=()=>(this.completed=!this.completed,this.completed);getCompletion=()=>this.completed}class s{constructor(){this.taskArray=[]}saveTask=e=>{if(this.taskArray)for(let t=0,a=this.taskArray.length;t<a;t++)if(e==this.taskArray[t].getTitle())return!1;let t=new n(e);return this.taskArray.push(t),!0};changeCompleteStatus=e=>{let t=!0;for(let a=0,n=this.taskArray.length;a<n;a++)e==this.taskArray[a].getTitle()&&(t=this.taskArray[a].changeCompletion());return t};deleteTask=e=>{for(let t=0,a=this.taskArray.length;t<a;t++)this.taskArray[t]&&e==this.taskArray[t].getTitle()&&this.taskArray.splice(t,1)};getTasksLength=()=>this.taskArray.length;getTaskTitleOnIndex=e=>this.taskArray[e].getTitle();getCompleteStatus=e=>{let t=!0;for(let a=0,n=this.taskArray.length;a<n;a++)e==this.taskArray[a].getTitle()&&(t=this.taskArray[a].getCompletion());return t}}class i{constructor(e){this.pageName=e,this.addTaskDiv=document.getElementById("addTask__Div"),this.addTaskButton=document.getElementById("addTask__button"),this.addTaskName=document.getElementById("addTask__text"),this.taskList=document.getElementById("tasklist"),this.content=document.getElementById("content"),this.taskData=new s}addTaskEvent=()=>{this.addTaskButton.addEventListener("click",(()=>{let e=this.addTaskName.value;if(e.length>0&&e.length<91){if(this.taskData.saveTask(e)){let t=d(e);this.taskList.append(t),this.addDeleteEvent(t),this.addCompletionEvent(t)}}else alert("Project name must have between 1 and 90 characters.")}))};addDeleteEvent=e=>{let t=e.getElementsByTagName("p")[0].textContent;e.getElementsByTagName("button")[0].addEventListener("click",(()=>{e.remove(),this.taskData.deleteTask(t)}))};addCompletionEvent=e=>{let t=e.getElementsByTagName("span")[0],a=e.getElementsByTagName("p")[0].textContent;t.addEventListener("click",(()=>{this.changeCompletion(e,a,t)}))};changeCompletion=(e,t,a)=>{this.taskData.changeCompleteStatus(t)?(a.classList.remove("contentTask__icon"),a.classList.add("contentTask__icon-active"),e.classList.add("contentTask__textdashed")):(a.classList.add("contentTask__icon"),a.classList.remove("contentTask__icon-active"),e.classList.remove("contentTask__textdashed"))};loadPage=()=>{this.content.innerHTML=" ",this.content.append(function(e){let t=document.createElement("div");t.className="content__page";let a=document.createElement("h2");a.textContent=e;let n=document.createElement("div");n.className="content__addTaskContainer",n.id="addTask__Div";let s=document.createElement("button");s.className="content__add",s.id="addTask__button",s.textContent="+";let i=document.createElement("input");i.className="content__input",i.id="addTask__text",i.type="text",i.maxLength=90;let d=document.createElement("h3");d.textContent="Tasks";let r=document.createElement("div");return r.className="content__tasklist",r.id="tasklist",n.append(s),n.append(i),t.append(a),t.append(n),t.append(d),t.append(r),t}(this.pageName)),this.addTaskDiv=document.getElementById("addTask__Div"),this.addTaskButton=document.getElementById("addTask__button"),this.addTaskName=document.getElementById("addTask__text"),this.taskList=document.getElementById("tasklist"),this.addTaskEvent(),this.displayTasks()};displayTasks=()=>{let e=this.taskData.getTasksLength();for(let t=0;t<e;t++){let e=this.taskData.getTaskTitleOnIndex(t),a=d(e),n=this.taskData.getCompleteStatus(e),s=a.getElementsByTagName("span")[0];n&&(s.classList.remove("contentTask__icon"),s.classList.add("contentTask__icon-active"),a.classList.add("contentTask__textdashed")),this.taskList.append(a),this.taskFunctionality(a)}};taskFunctionality=e=>{this.addDeleteEvent(e),this.addCompletionEvent(e)}}function d(e){let t=document.createElement("div");t.className="content__task";let a=document.createElement("span");a.className="contentTask__icon";let n=document.createElement("p");n.className="contentTask__text",n.textContent=e;let s=document.createElement("button");return s.className="contentTask__delete",s.textContent="X",t.append(a),t.append(n),t.append(s),t}},361:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _Main_taskPage__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(910);const __WEBPACK_DEFAULT_EXPORT__=class{constructor(){this.home=new _Main_taskPage__WEBPACK_IMPORTED_MODULE_0__.Z("Home"),this.today=new _Main_taskPage__WEBPACK_IMPORTED_MODULE_0__.Z("Today"),this.week=new _Main_taskPage__WEBPACK_IMPORTED_MODULE_0__.Z("Week"),this.month=new _Main_taskPage__WEBPACK_IMPORTED_MODULE_0__.Z("Month")}initialize=()=>{this.home.loadPage();let sidebarTimes=document.getElementById("sidebar__times"),sidebarButtonArray=sidebarTimes.getElementsByClassName("sidebar__container");for(let i=0,len=sidebarButtonArray.length;i<len;i++){let pageButton=sidebarButtonArray[i];pageButton.addEventListener("click",(()=>{eval("this."+pageButton.textContent.toLowerCase()).loadPage()}))}let sidebarContainerArray=document.getElementsByClassName("sidebar__container");for(let e=0,t=sidebarContainerArray.length;e<t;e++){let t=sidebarContainerArray[e];t.addEventListener("click",(()=>{for(let e=0,t=sidebarContainerArray.length;e<t;e++)sidebarContainerArray[e].classList.remove("sidebar__container-active");t.classList.add("sidebar__container-active")}))}}}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var a=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,t)=>{for(var a in t)__webpack_require__.o(t,a)&&!__webpack_require__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var __webpack_exports__={};(()=>{class e{constructor(){this.projectArray=[]}saveProject=e=>{let a=new t(e);this.projectArray.push(a)};deleteProject=e=>{for(let t=0,a=this.projectArray.length;t<a;t++)this.projectArray[t]&&e==this.projectArray[t].getTitle()&&this.projectArray.splice(t,1)}}class t{constructor(e){this.title=e}getTitle=()=>this.title}var a=__webpack_require__(910),n=__webpack_require__(361);(new class{constructor(){this.addProjectButton=document.getElementById("addProject"),this.addProjectButtonContainer=document.getElementById("addProjectContainer"),this.addProjectSidebarContainer=document.getElementById("sidebar__projects"),this.projectData=new e,this.taskPageArray=[]}addProjectClick=e=>{this.addProjectButton.addEventListener("click",(()=>{let e=function(){let e=document.createElement("div");e.className="sidebar__container-addingProject sidebar__addProject",e.id="sidebar__addingProject";let t=document.createElement("label");t.for="sidebar__ProjectNameInput",t.textContent="Project Name:";let a=document.createElement("input");a.type="text",a.id="sidebar__ProjectNameInput",a.maxLength=20,a.minLength=1;let n=document.createElement("button");n.classList.add("sidebar__button","sidebar__accept"),n.id="sidebar__accept",n.textContent="Accept";let s=document.createElement("button");return s.classList.add("sidebar__button","sidebar__cancel"),s.id="sidebar__cancel",s.textContent="Cancel",e.append(t),e.append(a),e.append(n),e.append(s),e}();this.addProjectButtonContainer.style.display="none",this.addProjectSidebarContainer.append(e);let t=document.getElementById("sidebar__accept");document.getElementById("sidebar__cancel").addEventListener("click",(()=>{this.addCancelClick(e)})),t.addEventListener("click",(()=>{this.addAcceptClick(e)}))}))};addAcceptClick=e=>{let t=e.childNodes[1].textLength,a=e.childNodes[1].value;if(t>0&&t<21){let t=function(){let e=document.getElementById("sidebar__ProjectNameInput").value,t=document.createElement("div");t.className="sidebar__container";let a=document.createElement("img");a.src="./img/tag.svg",a.alt="icon",a.className="sidebar__icon";let n=document.createElement("button");n.className="sidebar__button",n.textContent=e;let s=document.createElement("button");return s.className="sidebar__delete",s.textContent="X",t.append(a),t.append(n),t.append(s),t}();this.addProjectSidebarContainer.append(t);let n=t.childNodes[2];this.addDeleteClick(a,n),this.addProjectButtonContainer.parentNode.appendChild(this.addProjectButtonContainer),this.addProjectButtonContainer.style.display="flex",this.projectData.saveProject(a),this.projectLoadPageEvent(t,a,n),this.activeStyleOnLoadPage(t),e.remove()}else alert("Project name must have between 1 and 20 characters.")};addCancelClick=e=>{this.addProjectButtonContainer.parentNode.appendChild(this.addProjectButtonContainer),this.addProjectButtonContainer.style.display="flex",e.remove()};addDeleteClick=(e,t)=>{t.addEventListener("click",(()=>{confirm("Are you sure you wanna delete the project?")&&(this.projectData.deleteProject(e),t.parentNode.remove())}))};projectLoadPageEvent=(e,t,n)=>{let s=new a.Z(t),i=this.taskPageArray.push(s);e.addEventListener("click",(e=>{e.target!==n&&this.taskPageArray[i-1].loadPage()}))};activeStyleOnLoadPage=e=>{let t=document.getElementsByClassName("sidebar__container"),a=e;a.addEventListener("click",(()=>{for(let e=0,a=t.length;e<a;e++)t[e].classList.remove("sidebar__container-active");a.classList.add("sidebar__container-active")}))}}).addProjectClick(),(new n.Z).initialize()})()})();