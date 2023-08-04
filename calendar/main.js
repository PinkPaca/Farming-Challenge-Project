var currentMonth = new Date();
var today = new Date();

buildCalendar();

function buildCalendar() {
  var firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  var lastDay = new Date(currentMonth.getFullYear(),currentMonth.getMonth()+1, 0 );

  console.log(lastDay);
  const calendarBody = document.querySelector(".calendar-body");
  document.querySelector("#calYear").innerText = currentMonth.getFullYear();
  document.querySelector("#calMonth").innerText = currentMonth.getMonth() + 1;

  // initialize
  while(calendarBody.rows.length > 0) {
    calendarBody.deleteRow(calendarBody.rows.length - 1);
  }

  var currentRow = calendarBody.insertRow();

  for (var i = 0; i< firstDay.getDay(); i++) {
    var currentCol = currentRow.insertCell();
  }

  for(var day = firstDay; day <= lastDay; day.setDate(day.getDate() + 1)){
    var currentCol = currentRow.insertCell();
    currentCol.innerText = day.getDate();
    currentCol.className = "date";

    if(day.getDay() == 6) {
      currentRow = calendarBody.insertRow();
    }
  }
}

// previous month
function prevCalendar() {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, currentMonth.getDate());
  buildCalendar();
}

//next month
function nextCalendar() {
  currentMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, currentMonth.getDate());
  buildCalendar();
}

// add memo
const dates = document.querySelectorAll(".date");
const container = document.querySelector(".container");
const memos = document.querySelectorAll(".memo");

dates.forEach((date)=>date.addEventListener("click", (e) => {
  e.target.classList.add("memo_added");
  addMemo(e.target.innerText);
}));

function addMemo(date) {
  if(!document.querySelector(".date" + date)){
    const div = document.createElement("div");
    div.classList.add("memo");
    div.classList.add("date" + date);
    container.appendChild(div);

    const span = document.createElement("span");
    span.classList.add("close");
    span.addEventListener("click", (e)=>{
      const parentMemo = e.target.closest(".memo");
      parentMemo.style="display:none";
    })
    const x = document.createTextNode("x");
    span.appendChild(x);
    div.appendChild(span);

    const input = document.createElement("input");
    input.type="text";
    input.name="memo";
    input.placeholder="please enter your memo";
    div.appendChild(input);

    const button = document.createElement("button");
    const plus = document.createTextNode("+");
    button.appendChild(plus);
    button.classList.add("plus");
    div.appendChild(button);
    
    const ul = document.createElement("ul");
    ul.classList.add("memo-list");
    div.appendChild(ul);

    const addBtn = div.querySelector(".plus");
    addBtn.addEventListener("click",(e) => {
      const memoDiv = document.querySelector(".date" + date);
      const dateInput = memoDiv.querySelector("input[name=memo]");
      const list = memoDiv.querySelector("ul");
      console.log(memoDiv);

      const li = document.createElement("li");
      const text = document.createTextNode(dateInput.value);
      li.appendChild(text);
      list.appendChild(li);
    });
  } else {
    const memo = document.querySelector(".date" + date);
    memo.style = "display: block";
  }
}

