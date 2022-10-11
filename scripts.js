const btn = document.querySelector('[data-for-btn]');
const Task = (e)=>{
    e.preventDefault()
    const input = document.querySelector('[data-for-input]');
    const value = input.value;
    input.value = ""
    const list = document.querySelector("[data-list]")
    const task = document.createElement('li')
    task.classList.add("card")
    console.log(value) ;
    const content = `  <div>
    <i class="far fa-check-square icon"></i>
    <span class="task">${value}</span>
  </div>
  <i class="fas fa-trash-alt trashIcon icon"></i>
</li>
`;
task.innerHTML=content
list.appendChild(task)
} 
//Listener
btn.addEventListener('click',Task)