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

function showVideo(src) {
  alert("Show the " + src + " video as a pop-up");
}

function showPopup() {
  document.getElementById("popup-container").style.display = "block";
}


function closePopup() {
  document.getElementById("popup-container").style.display = "none";
}