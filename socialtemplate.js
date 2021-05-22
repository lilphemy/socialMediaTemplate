var disButt = document.getElementsByClassName("butt-tempt");
var contSec = document.querySelectorAll("#ghosts-sec");

function contentSlide(dig){
  if(contSec[dig].style.display === "none"){
    contSec[dig].style.display = "block";
  }else {
    contSec[dig].style.display = "none";
  }
}

for(let i = 0; i < disButt.length; i++){
  disButt[i].onclick = function(){
    contentSlide(i);
  }
}


var dropButton = document.querySelector(".item-four");
var dropContent = document.querySelector(".item-four-sec");
dropButton.addEventListener("click", () => {
  if (dropContent.style.display === "none") {
    dropContent.style.display = "block";
  } else { dropContent.style.display = "none"; }
})
