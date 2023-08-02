var hour;
var minute;
var second;
var myTimer

const startButton = document.querySelector(".start");
function clickStartButton() {
  hour = document.querySelector(".Hour").value;
  minute = document.querySelector(".Minute").value;
  second = document.querySelector(".Second").value;

  document.querySelector(".time_input").style="display:none;";
  document.querySelector(".time_display").style="display:flex;";

  myTimer = setInterval(() => {
    document.querySelector(".hour_display").innerHTML=hour<10&&hour!='00'?'0'+hour:hour;
    document.querySelector(".minute_display").innerHTML=minute<10&&minute!='00'?'0'+minute:minute;
    document.querySelector(".second_display").innerHTML=second<10&&second!='00'?'0'+second:second;
  
    if(second>0) {
      second--;
    } else if (minute>0) {
      minute--;
      second=59;
    } else if (hour>0) {
      hour--;
      minute=59;
      second=59;
    } else {
      const finishSound = new Audio('green.mp3');
      document.querySelector("h1").innerHTML="Set Timer Again!";
      document.querySelector(".time_input").style="display:flex;";
      document.querySelector(".time_display").style="display:none;";
      finishSound.play();
      clearInterval(myTimer);
    }
  }, 1000)
}

startButton.addEventListener("click", clickStartButton);

const stopButton = document.querySelector(".stop");
stopButton.addEventListener("click", () => {
  clearInterval(myTimer);
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
  clearInterval(myTimer);
  document.querySelector(".time_input").style="display:flex;";
  document.querySelector(".time_display").style="display:none;";
  document.querySelector(".Hour").value='00';
  document.querySelector(".Minute").value='00';
  document.querySelector(".Second").value='00';
});


