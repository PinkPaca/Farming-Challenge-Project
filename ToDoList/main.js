
const inputToDoList = document.querySelector(".todo");
const addButton = document.querySelector(".add");
const priority = document.getElementById("priority");
const list = document.querySelector("ol");
var checkBoxes;


const priorityArray = ["낮음", "보통", "높음", "매우높음"];
const priorityClass = ["low", "middle", "high", "very-high"]

// add List
function addToDoList() {
  var li = document.createElement("li");
  var div_title = document.createElement("div");

  div_title.className = "listTitle";

  var checkBox = document.createElement("input");

  var inputValue = inputToDoList.value;
  checkBox.type= "checkbox";
  checkBox.className= inputValue;
  div_title.appendChild(checkBox);
  

  var t = document.createTextNode(inputValue);
  div_title.appendChild(t);

  li.appendChild(div_title);

  var newPriority = document.createElement("span");
  var p = document.createTextNode(priorityArray[priority.value]);
  newPriority.appendChild(p);

  li.appendChild(newPriority);

  li.classList.add("list");
  li.classList.add("uncompleted");

  var list = document.querySelector("." + priorityClass[priority.value]);
  list.appendChild(li);

  // when user tick check box, change the class name to "finished"
  checkBoxes = document.querySelectorAll("input[type=checkbox]");

  console.log(checkBoxes);

  checkBoxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (e) => {

      e.target.classList.add("this");
      const thisCheckBox = document.querySelector(".this");
      e.target.classList.remove("this");
      const div = thisCheckBox.closest(".list");
      console.log(div);
      if(e.target.checked) {
        div.classList.remove("uncompleted");
        div.classList.add("completed");
      } else {
        div.classList.remove("completed");
        div.classList.add("uncompleted");
      }
    });
  })
  
}

addButton.addEventListener("click", addToDoList);



// categorize
const allBtn = document.querySelector("#all");
const completedBtn = document.querySelector("#completed");
const uncompletedBtn = document.querySelector("#uncompleted");
var thingsToDo = Array.from(document.querySelectorAll("li"));

console.log(thingsToDo);
allBtn.addEventListener("click", () => {
  thingsToDo = Array.from(document.querySelectorAll("li"));

  thingsToDo.forEach((i)=>{i.style="display:flex;"});
});

completedBtn.addEventListener("click", () => {
  thingsToDo = Array.from(document.querySelectorAll("li"));

  var undisplay = thingsToDo.filter((i) => i.classList.contains("uncompleted"));
  var display = thingsToDo.filter((i) => i.classList.contains("completed"));

  undisplay.forEach((i) => {i.style = "display:none"})
  display.forEach((i) => {i.style = "display:flex"})

});

uncompletedBtn.addEventListener("click", () => {
  thingsToDo = Array.from(document.querySelectorAll("li"));
  var undisplay = thingsToDo.filter((i) => i.classList.contains("completed"));
  var display = thingsToDo.filter((i) => i.classList.contains("uncompleted"));

  undisplay.forEach((i) => {i.style = "display:none"})
  display.forEach((i) => {i.style = "display:flex"})

});
