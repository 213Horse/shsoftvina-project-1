const navigationButtons = document.querySelectorAll('.navigation button');
const toggleButtons = document.querySelectorAll('.toggle-btn');
const btnMover = document.getElementById('btn');


// Xử lý sự kiện click cho các nút trong phần điều hướng
navigationButtons.forEach(button => {
    button.addEventListener('click', () => {
        navigationButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Gán lớp active cho nút đầu tiên khi trang tải xong
toggleButtons[0].classList.add('active');
    
// Xử lý sự kiện click cho các nút
toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Loại bỏ lớp active khỏi tất cả các nút
        toggleButtons.forEach(btn => btn.classList.remove('active'));
        
        // Thêm lớp active vào nút được chọn
        button.classList.add('active');
        
        // Cập nhật vị trí và kích thước của nút di chuyển
        if (button.textContent.includes('성남 9경')) {
            btnMover.style.left = '0';
            btnMover.style.borderRadius = '30px 0 0 30px'; // Bo tròn góc trái
        } else {
            btnMover.style.left = '50%';
            btnMover.style.borderRadius = '0 30px 30px 0'; // Bo tròn góc phải
        }
    });
});
const buttons = document.querySelectorAll('.toggle-btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Loại bỏ lớp active khỏi tất cả các nút
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Thêm lớp active vào nút được chọn
        button.classList.add('active');
        
        // Cập nhật vị trí của nút di chuyển
        if (button.textContent.includes('성남 9경')) {
            document.getElementById('btn').style.left = '0';
            document.getElementById('btn').style.right = 'auto';
        } else {
            document.getElementById('btn').style.left = 'auto';
            document.getElementById('btn').style.right = '0';
        }
    });
});


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
  // Thay đổi giao diện hoặc thực hiện logic khác nhưng không thay đổi ảnh
  buttons.forEach(btn => btn.classList.remove('active'));
  buttons[0].classList.add('active');
  document.getElementById('btn').style.left = '0';
}

function rightClick() {
  // Thay đổi giao diện hoặc thực hiện logic khác nhưng không thay đổi ảnh
  buttons.forEach(btn => btn.classList.remove('active'));
  buttons[1].classList.add('active');
  document.getElementById('btn').style.left = '50%';
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

