//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//EventListeners
document.addEventListener('DOMContentLoaded',getTodos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterTodo);

//Functions
function addTodo(event){
    //Prevent form from submitting
    event.preventDefault();
    //ToDo div
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');
    //todo li
    const newTodo =document.createElement('li');
    newTodo.innerText= todoInput.value;
    newTodo.classList.add('todo-item');
    todoDIV.appendChild(newTodo);
    //Add todo to local storage
    saveLocalTodos(todoInput.value);


    //CheckMark Button
    const completedButton =document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>' 
    completedButton.classList.add("complete-btn");
    todoDIV.appendChild(completedButton);
     //Trash Button
    const trashButton =document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>' 
    trashButton.classList.add("trash-btn");
    todoDIV.appendChild(trashButton);

    todoList.appendChild(todoDIV);
    //clear Todo Input
    todoInput.value ="";
}

function deleteCheck(e) {
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'trash-btn'){
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
        todo.addEventListener('transitionend',function(){
            todo.remove();
        })

        
    }
    //checkmark complete
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(todo);
    }

}

// filter Todo
function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch (e.target.value) {
            case "all" :
                todo.style.display ="flex";
                break;
            case "completed":
                if(todo.classList.contains("completed")){
                    todo.style.display ="flex";
                } else {
                    todo.style.display = "none";
                }
                break;
                case "uncompleted":
                    if(!todo.classList.contains("completed")){
                        todo.style.display ="flex";
                        break;
                    } else {
                        todo.style.display = "none";
                    }
                    break;
                }
            });
        }


// save todos on local system

function saveLocalTodos(todo) {
    //Check if already have todo
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.push(todo);
    localStorage.setItem("todos",JSON.stringify(todos));
}

//to get todos from localstorage

function getTodos() {
    //Check if already have todo
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }

    todos.forEach(function(todo){
        //ToDo div
    const todoDIV = document.createElement('div');
    todoDIV.classList.add('todo');
    //todo li
    const newTodo =document.createElement('li');
    newTodo.innerText= todo;
    newTodo.classList.add('todo-item');
    todoDIV.appendChild(newTodo);
    //CheckMark Button
    const completedButton =document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>' 
    completedButton.classList.add("complete-btn");
    todoDIV.appendChild(completedButton);
     //Trash Button
    const trashButton =document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>' 
    trashButton.classList.add("trash-btn");
    todoDIV.appendChild(trashButton);

    todoList.appendChild(todoDIV);
    });
    
}

// to remove the local deleted todos
function removeLocalTodos(todo) {
    let todos;
    if(localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex),1);
    localStorage.setItem("todos",JSON.stringify(todos));
}