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

function showVideo(src) {
  alert("Show the " + src + " video as a pop-up");
}
