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
function showVideo(videoUrl) {
  var videoPopupContainer = document.getElementById('video-popup-container');
  var videoPopup = document.getElementById('video-popup');
  var video = videoPopup.querySelector('video');

  video.src = videoUrl;
  video.play();

  video.style.width = '100%';
  video.style.borderRadius = '20px'; 

  videoPopupContainer.style.display = 'block';
  videoPopup.style.display = 'block';
}
