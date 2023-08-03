
const inputToDoList = document.querySelector(".todo");
const addButton = document.querySelector(".add");
const priority = document.getElementById("priority");
const list = document.querySelector("ol");

const priorityArray = ["낮음", "보통", "높음", "매우높음"];
const priorityClass = ["low", "middle", "high", "very-high"]


function addToDoList() {
  var li = document.createElement("li");
  var div_title = document.createElement("div");

  div_title.className = "listTitle";

  var checkBox = document.createElement("input");
  checkBox.type= "checkbox";
  div_title.appendChild(checkBox);
  
  var inputValue = inputToDoList.value;
  var t = document.createTextNode(inputValue);
  div_title.appendChild(t);

  li.appendChild(div_title);

  var newPriority = document.createElement("span");
  var p = document.createTextNode(priorityArray[priority.value]);
  newPriority.appendChild(p);

  li.appendChild(newPriority);

  var list = document.querySelector("." + priorityClass[priority.value]);
  print
  list.appendChild(li);
}

addButton.addEventListener("click", addToDoList);