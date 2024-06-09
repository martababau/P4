var counter = 0;
var images = [
  "imagens/gc1.png",
  "imagens/gc1.png",
  "imagens/gc1.png",
  "imagens/gc1.png",
  "imagens/gc1.png",
  "imagens/gc1.png",
  "imagens/gc1.png",
  "imagens/gc1.png",
];

setInterval(function () {
  document.getElementById("imagem").src = "imagens/gc1.png";
  counter += 1;
}, 200);

function showVideo(src) {
  alert("Show the " + src + " video as a pop-up");
}


function showPopup() {
  document.getElementById("popup-container").style.display = "block";
}


function closePopup() {
  document.getElementById("popup-container").style.display = "none";
}