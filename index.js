let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slideContainer = document.querySelector(".slide-container");
const bgContainer = document.getElementById("bg_container");
const holofoteImages = document.querySelectorAll(".holofote");

function showSlides() {
  slideContainer.style.transform = `translateX(-${currentIndex * 25}%)`;
}

function nextSlide() {
  currentIndex = currentIndex >= totalSlides - 4 ? 0 : currentIndex + 1;
  showSlides();
}

function prevSlide() {
  currentIndex = currentIndex <= 0 ? totalSlides - 4 : currentIndex - 1;
  showSlides();
}

function handleWheel(event) {
  if (event.deltaY > 0) {
    nextSlide();
  } else if (event.deltaY < 0) {
    prevSlide();
  }
}

document.addEventListener("wheel", handleWheel);

function setHolofoteOpacity(event) {
  const mouseX = event.clientX;
  const distances = [];
  holofoteImages.forEach((holofote, index) => {
    const holofoteRect = holofote.getBoundingClientRect();
    const holofoteCenterX = holofoteRect.left + holofoteRect.width / 2;
    const distance = Math.abs(mouseX - holofoteCenterX);
    distances.push({ index, distance });
  });
  distances.sort((a, b) => a.distance - b.distance);
  holofoteImages.forEach((holofote, index) => {
    if (index === distances[0].index) {
      holofote.style.opacity = 1;
    } else {
      holofote.style.opacity = 0.25;
    }
  });
}

document.addEventListener("mousemove", setHolofoteOpacity);

function fadeOutBodyAndNavigate(url) {
  document.body.style.opacity = "0";
  setTimeout(() => {
    window.location.href = url;
  }, 500);
}

const productLinks = document.querySelectorAll(".product");
productLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const url = link.parentElement.href;
    fadeOutBodyAndNavigate(url);
  });
});

showSlides();
