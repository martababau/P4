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
