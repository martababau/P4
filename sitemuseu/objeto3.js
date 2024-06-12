var counter = 0;
var images = [
  "imagens/per0.png",
  "imagens/per1.png",
  "imagens/per2.png",
  "imagens/per3.png",
  "imagens/per4.png",
  "imagens/per5.png",
  "imagens/per6.png",
  "imagens/per7.png",
];

setInterval(function () {
  document.getElementById("imagem").src =
    "imagens/per" + (counter % images.length) + ".png";
  counter += 1;
}, 200);



function showPopup() {
  document.getElementById("popup-container").style.display = "block";
}

function closePopup() {
  document.getElementById("popup-container").style.display = "none";
}

function showVideo(src) {
  var video = document.getElementById("popup-video");
  video.src = src;
  document.getElementById("video-popup-container").style.display = "block";
}

function closeVideoPopup() {
  var video = document.getElementById("popup-video");
  video.pause();
  video.src = "";
  document.getElementById("video-popup-container").style.display = "none";
}