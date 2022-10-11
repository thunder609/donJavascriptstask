const btn = document.querySelector('[data-for-btn]');
const Task = (e)=>{
    e.preventDefault()
    const input = document.querySelector('[data-for-input]');
    console.log(input.value)   ;
}
//Listener
btn.addEventListener(click,Task)