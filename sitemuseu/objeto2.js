function addFloatingImages() {
  for (var i = 1; i <= 9; i++) {
    var img = document.createElement("img");
    img.src = "imagens/chave" + i + ".png";
    img.classList.add("floating-image");
    img.style.top = Math.floor(Math.random() * 70) + 10 + "%";
    img.style.left = Math.floor(Math.random() * 15) + "%";
    img.style.transform = "rotate(" + Math.floor(Math.random() * 20) + "deg)";
    document.body.appendChild(img);
  }
}
window.onload = function () {
  addFloatingImages();
};



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
