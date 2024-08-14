var images = [
  "include/tour/css/img/main/Rectangle9.jpg",
  "include/tour/css/img/main/Rectangle11.jpg",
  "include/tour/css/img/main/Rectangle12.jpg"
];

var currentIndex = 0;
var playInterval; // Biến lưu khoảng thời gian để tự động chuyển ảnh

function changeMainImage(imageSrc) {
  var mainImage = document.getElementById("main-display");
  mainImage.classList.add('fade-out'); // Thêm lớp fade-out để bắt đầu hiệu ứng mờ dần
  
  setTimeout(function() {
    mainImage.src = imageSrc;
    mainImage.classList.remove('fade-out'); // Loại bỏ lớp fade-out sau khi đã thay đổi nguồn ảnh
  }, 1500); // Thời gian chờ phải khớp với thời gian chuyển đổi trong CSS
}

function prevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
  changeMainImage(images[currentIndex]);
}

function nextImage() {
  currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
  changeMainImage(images[currentIndex]);
}

function leftClick() {
  currentIndex = 0; // Chọn ảnh đầu tiên trong danh sách
  changeMainImage(images[currentIndex]);
}

function rightClick() {
  currentIndex = images.length - 1; // Chọn ảnh cuối cùng trong danh sách
  changeMainImage(images[currentIndex]);
}

function playImage() {
  if (!playInterval) { // Kiểm tra nếu chưa có interval thì bắt đầu play
      playInterval = setInterval(function() {
          nextImage();
      }, 5000); // Chuyển ảnh mỗi 2 giây
      document.getElementById("play-button").style.display = "none";
      document.getElementById("stop-button").style.display = "inline-block";
  }
}

function stopPlay() {
  clearInterval(playInterval);
  playInterval = null;
  document.getElementById("play-button").style.display = "inline-block";
  document.getElementById("stop-button").style.display = "none";
}
