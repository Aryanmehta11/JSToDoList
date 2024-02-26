const addTaskButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');

addTaskButton.addEventListener('click',function(){
    const taskText=taskInput.value;
    if (taskText.trim()!=''){
        const taskItem=document.createElement('li');
        taskItem.textContent=taskText;
        taskList.appendChild(taskItem);
        taskInput.value='';
    }
})

taskList.addEventListener('click', function(event) {
    // Check if the clicked element is a task (i.e., an <li> element)
    if (event.target.tagName === 'LI') {
        // Remove the task from the task list
        event.target.remove();
    }
});