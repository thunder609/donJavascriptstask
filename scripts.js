import CompleteCheck  from "./components/CompleteCkeck.js"
import deleteIcon from "./components/deleteIcon.js";
    const btn = document.querySelector('[data-for-btn]');
const Task = (e)=>{
    e.preventDefault()
    const input = document.querySelector('[data-for-input]');
    const value = input.value;
    input.value = ""
    const list = document.querySelector("[data-list]")
    const task = document.createElement('li')
    task.classList.add("card")
    const tittleTask = document.createElement("span")
    tittleTask.classList.add('task')
    const taskContent = document.createElement('div')
    tittleTask.innerHTML=value;
    taskContent.appendChild(CompleteCheck())
    taskContent.appendChild(tittleTask); 
    task.appendChild(taskContent)
    list.appendChild(task)
    task.appendChild(deleteIcon());
   

  

    console.log(value) ;

//task.innerHTML=content

} 
//Listener
btn.addEventListener('click',Task)




