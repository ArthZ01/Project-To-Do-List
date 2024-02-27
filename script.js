var addButton = document.getElementById("add-btn");
addButton.addEventListener("click", addtodoItem);
function addtodoItem() {
  alert("Add Button Clicked!");
}

var todoEntry = document.getElementById("todo-entry");
var todoList = document.getElementById("todo-list");

function newtodoItem(itemText, completed) {
  var todoItem = document.createElement("li");
  var todoText = document.createTextNode(itemText);
  todoItem.appendChild(todoText);

  if (completed) {
    todoItem.classList.add("completed");
  }

  todoList.appendChild(todoItem);
  todoItem.addEventListener("dblclick", toggletodoItemState);
}

function addtodoItem() {
  var itemText = todoEntry.value;
  newtodoItem(itemText, false);
}

function toggletodoItemState() {
  if (this.classList.contains("completed")) {
    this.classList.remove("completed");
  } else {
    this.classList.add("completed");
  }
}
//
function clearCompletedToDoItems() {
  var completedItems = todoList.getElementsByClassName("completed");

  while (completedItems.length > 0) {
    completedItems.item(0).remove();
  }
}

function emptyList() {
  var todoItems = todoList.children;
  while (todoItems.length > 0) {
    todoItems.item(0).remove();
  }
}

var myArray = [];
myArray.push("something to store");
myArray.push("something else to store");
alert(myArray[0]);
//This will alert "something to store"

var todoInfo = {
  task: "Thing I need to do",
  completed: false,
};

function saveList() {
  var todos = [];

  for (var i = 0; i < todoList.children.length; i++) {
    var todo = todoList.children.item(i);

    var todoInfo = {
      task: todo.innerText,
      completed: todo.classList.contains("completed"),
    };

    todos.push(todoInfo);
  }

  localStorage.setItem("todos", JSON.stringify(todos));
  console.log("masuk kesini ya");
}

function loadList() {
  if (localStorage.getItem("todos") != null) {
    var todos = JSON.parse(localStorage.getItem("todos"));

    for (var i = 0; i < todos.length; i++) {
      var todo = todos[i];
      newtodoItem(todo.task, todo.completed);
    }
  }
}

loadList();
