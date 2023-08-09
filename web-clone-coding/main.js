
const btns = document.querySelectorAll("button");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const currentImg = document.querySelector(".active");
    const currentBtn = document.querySelector(".on");
    currentBtn.innerHTML="◦";

    currentBtn.classList.remove("on");
    currentImg.classList.remove("active");
    var newImgId = e.target.classList[0].slice(-1);
    const newImg = document.getElementById(newImgId);
    newImg.classList.add("active");
    e.target.classList.add("on");
    e.target.innerHTML="⦁";
  })
})

function nextImageSlide() {
  const currentImg = document.querySelector(".active");
  const currentBtn = document.querySelector(".on");
  var imgId = parseInt(currentImg.id);

  const nextImgId = imgId + 1 < 5 ? imgId + 1: 1;

  currentImg.classList.remove("active");
  currentBtn.classList.remove("on");
  currentBtn.innerHTML="◦";

  const nextImg = document.getElementById(nextImgId);
  const nextBtn = document.querySelector(".btn" + nextImgId);
  nextImg.classList.add("active");
  nextBtn.classList.add("on");
  nextBtn.innerHTML = "⦁";
  
}

setInterval(nextImageSlide, 2000);