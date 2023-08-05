const todoList=document.getElementById('todoList');
const taskInput = document.getElementById('taskInput');


//Enter keypad Event
taskInput.addEventListener('keypress',function(event){
    if(event.key=="Enter"){
        addTask();
    }
})

//addtask function
function addTask(){
    const task=taskInput.value.trim();//if there is any space then it will trim it
    if(task!="")
    {
        const todoItems = TodoItems(task);
        todoList.appendChild(todoItems);
        taskInput.value="";
    }
}


//TodoItems function
function TodoItems(task){
    const todoItem = document.createElement("div");
    todoItem.classList.add("todo-item");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            todoItem.style.textDecoration = "line-through";
        } else {
            todoItem.style.textDecoration = "none";
        }
    });

    const taskText = document.createElement("span");
    taskText.textContent = task;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
        todoItem.remove();
    });

    todoItem.appendChild(checkbox);
    todoItem.appendChild(taskText);
    todoItem.appendChild(deleteButton);

    return todoItem;
}