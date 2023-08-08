
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function nextImageSlide() {
  const currentImg = document.querySelector(".active");
  var imgId = parseInt(currentImg.id)

  const nextImgId = imgId + 1 < 5 ? imgId + 1: 1;

  currentImg.classList.remove("active");
  const nextImg = document.getElementById(nextImgId);
  nextImg.classList.add("active");
}

setInterval(nextImageSlide, 2000);

prevBtn.addEventListener("click", ()=>{
  const currentImg = document.querySelector(".active");
  var imgId = currentImg.id;

  var prevImgId = imgId - 1 > 0 ?imgId - 1: 4;

  currentImg.classList.remove("active");
  const prevImg = document.getElementById(prevImgId);
  prevImg.classList.add("active");
});

nextBtn.addEventListener("click", nextImageSlide);