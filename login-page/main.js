const id = "farmingchallenge";
const password = "qwer1234";

const idInput = document.querySelector("input[name=id]");
const passwordInput = document.querySelector("input[name=password]");
const idAlert = document.querySelector(".idAlert");
const passwordAlert = document.querySelector(".passwordAlert");
const loginBtn = document.querySelector(".logIn");

loginBtn.addEventListener("click", () => {
  if(idInput.classList.contains("wrong")) {
    idInput.classList.remove("wrong");
    idAlert.style = "display: none";
  }

  if(passwordInput.classList.contains("wrong")) {
    passwordInput.classList.remove("wrong");
    passwordAlert.style = "display: none";
  }

  if(idInput.value != id){
    idInput.classList.add("wrong");
    idAlert.style = "display: block";
  } else if (passwordInput.value != password) {
    passwordInput.classList.add("wrong");
    passwordAlert.style = "display: block";
  } else {
    alert("로그인 되었습니다.");  
  }
})
