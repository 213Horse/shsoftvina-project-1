let currentTab = 1;
let slideIndex = 0;
let interval;
let isPlaying = false;

function showTab(tabNumber) {
  const tabs = document.getElementsByClassName('images');
  for (let i = 0; i < tabs.length; i++) {
    tabs[i].style.display = i === tabNumber - 1 ? 'block' : 'none';
  }
  currentTab = tabNumber;
  slideIndex = 0; // Reset slide index when changing tabs
  showSlide(slideIndex);
}

function showSlide(index) {
  const slides = document.querySelectorAll(`#tab${currentTab} .image-container`);
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
  });
}

function nextSlide() {
  const slides = document.querySelectorAll(`#tab${currentTab} .image-container`);
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  const slides = document.querySelectorAll(`#tab${currentTab} .image-container`);
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

function playImage() {
  if (!isPlaying) {
    interval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
    document.getElementById('play-button').style.display = 'none';
    document.getElementById('stop-button').style.display = 'inline-block';
    isPlaying = true;
  }
}

function stopPlay() {
  clearInterval(interval);
  document.getElementById('play-button').style.display = 'inline-block';
  document.getElementById('stop-button').style.display = 'none';
  isPlaying = false;
}

// Initialize first tab and first slide
document.addEventListener("DOMContentLoaded", function() {
  showTab(1);
  showSlide(slideIndex);
});
