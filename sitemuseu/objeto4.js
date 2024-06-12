var counter = 0;
var images = [
  "imagens/botao1.png",
  "imagens/botao2.png",
  "imagens/botao3.png",
  "imagens/botao0.png",
];

setInterval(function () {
  document.getElementById("imagem").src =
    "imagens/botao" + (counter % images.length) + ".png";
  counter += 1;
}, 500);

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
