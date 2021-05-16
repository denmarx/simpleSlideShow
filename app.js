const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
let pics = [img1, img2, img3]
let counter = 0;
let picCount;

img1.style.display= "";
img2.style.display= "none";
img3.style.display= "none";

const btnNext = document.getElementById("next-btn");
const btnPrev = document.getElementById("prev-btn");



btnNext.addEventListener("click", deletePic);
btnNext.addEventListener("click", showPic);

btnPrev.addEventListener("click", goBack);
btnPrev.addEventListener("click", showPic);

function goBack() {
  picCount = pics[counter];
  picCount.style.display = "none";
  counter--; 
}

function  deletePic() {
  picCount = pics[counter];
  picCount.style.display = "none";
  counter++; 
}

function showPic() {
  picCount = pics[counter];
  picCount.style.display = "";
  }

