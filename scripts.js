(()=>{
    const btn = document.querySelector('[data-for-btn]');
const Task = (e)=>{
    e.preventDefault()
    const input = document.querySelector('[data-for-input]');
    const value = input.value;
    input.value = ""
    const list = document.querySelector("[data-list]")
    const task = document.createElement('li')
    task.classList.add("card")
    taskContent=document.createElement('div')
    taskContent.appendChild(CompleteCheck())
    const tittleTask = document.createElement("span")
    tittleTask.classList.add('task')
    tittleTask.innerHTML=value;
    taskContent.appendChild(tittleTask)
    console.log(value) ;
    const content = `     
  <i class="fas fa-trash-alt trashIcon icon"></i>

`;
//task.innerHTML=content
task.appendChild(taskContent)
list.appendChild(task)
} 
//Listener
btn.addEventListener('click',Task)

const CompleteCheck =()=>
{
const i= document.createElement('i');
i.classList.add('far','fa-check-square','icon');
i.addEventListener('click',completeTask)
return i;
}
const  completeTask=(event)=>{
    const element =event.target ;
    element.classList.toggle('fas');
    element.classList.toggle('completeIcon');
    element.classList.toggle('far');


}})
()