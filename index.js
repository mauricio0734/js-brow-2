let task = [];
let id = 1;

const addButton = document.getElementById('addButton');
const listItems = document.getElementById('listItems');

function renderTask(task){
    const li = document.createElement('li');
   const input = document.createElement('input');
   input.setAttribute('type', 'checkbox');
   const span = document.createElement('span');
   span.textContent = task.title;

li.appendChild(input);
li.appendChild(span);
li.addEventListener('click', function(event, task){
    handleCheckTask(event, task);
});
listItems.appendChild(li);
}


function handleSubmit(event){
event.preventDefault();
const input = document.getElementById('tarea');
const task = {
    id,
    title: input.value,
    complete: false
}
tasks.push(task);
id += 1;
input.value ='';
renderTask(task);
}

function handleCheckTask(event){}

function handleDelete(event){}

addButton.addEventListener('clic' , function(event){
    handleSubmit(event);
})
