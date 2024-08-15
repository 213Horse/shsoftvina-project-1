document.addEventListener("DOMContentLoaded", function () {
  var container = document.getElementById('event-container');
  var slider = document.getElementById('slider');
  var slides = document.getElementsByClassName('slide');
  var buttons = document.getElementsByClassName('btn');

  var slideWidth = 473; // Chiều rộng của mỗi thẻ
  var slidesPerPage = 3; // Số thẻ hiển thị mỗi lần
  var slidesCount = slides.length;
  var currentPosition = 0;
  var currentMargin = 0;
  var containerWidth;
  var autoSlideInterval;
  var autoSlideTimeout;

  function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
  }

  function setParams(w) {
    slidesPerPage = Math.floor(w / slideWidth);
    slidesCount = Math.max(0, slides.length - slidesPerPage);
    if (currentPosition > slidesCount) {
      currentPosition = slidesCount;
    }
    currentMargin = -currentPosition * slideWidth;
    slider.style.marginLeft = currentMargin + 'px';
    updateButtons();
  }

  function updateButtons() {
    if (currentPosition === 0) {
      buttons[0].classList.add('inactive');
    } else {
      buttons[0].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
      buttons[1].classList.add('inactive');
    } else {
      buttons[1].classList.remove('inactive');
    }
  }

  function slideRight() {
    if (currentPosition < slidesCount) {
      currentPosition += slidesPerPage; // Di chuyển 3 thẻ một lần
      if (currentPosition > slidesCount) {
        currentPosition = slidesCount;
      }
      currentMargin = -currentPosition * slideWidth;
    } else {
      currentPosition = 0; // Quay lại từ đầu
      currentMargin = 0;
    }
    slider.style.marginLeft = currentMargin + 'px';
    updateButtons();
  }

  function slideLeft() {
    if (currentPosition > 0) {
      currentPosition -= slidesPerPage; // Di chuyển 3 thẻ một lần
      if (currentPosition < 0) {
        currentPosition = 0;
      }
      currentMargin = -currentPosition * slideWidth;
      slider.style.marginLeft = currentMargin + 'px';
      updateButtons();
    }
  }

  function autoSlide() {
    slideRight();
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval); // Dừng tự động chuyển slide
    clearTimeout(autoSlideTimeout);   // Xóa hẹn giờ để tránh việc nhiều hẹn giờ cùng lúc

    autoSlideTimeout = setTimeout(function() {
      autoSlideInterval = setInterval(autoSlide, 3000); // Khôi phục tự động chuyển slide sau 3 giây
    }, 3000);
  }

  buttons[0].addEventListener('click', function() {
    slideLeft();
    resetAutoSlide();
  });

  buttons[1].addEventListener('click', function() {
    slideRight();
    resetAutoSlide();
  });

  window.addEventListener("resize", checkWidth);
  checkWidth();

  autoSlideInterval = setInterval(autoSlide, 3000); // Tự động chuyển slide sau mỗi 3 giây
});


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


var tab1Images = [
  {
    src: "include/tour/css/img/main/Rectangle9.jpg",
    overlayIndex: 0
  },
  {
    src: "include/tour/css/img/main/Rectangle11.jpg",
    overlayIndex: 1
  },
  {
    src: "include/tour/css/img/main/Rectangle12.jpg",
    overlayIndex: 2
  }
];

var tab2Images = [
  {
    src: "include/tour/css/img/main/Rectangle13.jpg",
    overlayIndex: 0
  },
  {
    src: "include/tour/css/img/main/Rectangle14.jpg",
    overlayIndex: 1
  },
  {
    src: "include/tour/css/img/main/Rectangle15.jpg",
    overlayIndex: 2
  }
];

var currentTab = 1;
var currentIndex = 0;
var playInterval;

function changeMainImage(imageSrc, overlayIndex) {
  var mainImage = document.getElementById("main-display");
  mainImage.classList.add('fade-out');

  document.querySelectorAll('.image-container').forEach(container => {
    container.classList.remove('active-hover');
  });

  setTimeout(function () {
    mainImage.src = imageSrc;
    mainImage.classList.remove('fade-out');

    document.querySelectorAll('.images')[currentTab - 1].querySelectorAll('.image-container')[overlayIndex].classList.add('active-hover');
  }, 1500);
}

function prevImage() {
  currentIndex = (currentIndex > 0) ? currentIndex - 1 : getImages().length - 1;
  var images = getImages();
  changeMainImage(images[currentIndex].src, images[currentIndex].overlayIndex);
}

function nextImage() {
  currentIndex = (currentIndex < getImages().length - 1) ? currentIndex + 1 : 0;
  var images = getImages();
  changeMainImage(images[currentIndex].src, images[currentIndex].overlayIndex);
}


// Khi trang tải xong, tự động áp dụng hover cho ảnh nhỏ tương ứng với ảnh chính
document.addEventListener("DOMContentLoaded", function () {
  var mainImageSrc = document.getElementById("main-display").src;
  var initialImage = images.find(image => mainImageSrc.includes(image.src));

  if (initialImage) {
    document.querySelectorAll('.image-container')[initialImage.overlayIndex].classList.add('active-hover');
  }
});

function getImages() {
  return currentTab === 1 ? tab1Images : tab2Images;
}

function showTab(tabNumber) {
  currentTab = tabNumber;
  currentIndex = 0;

  document.getElementById('tab1').style.display = (tabNumber === 1) ? 'flex' : 'none';
  document.getElementById('tab2').style.display = (tabNumber === 2) ? 'flex' : 'none';

  buttons.forEach(btn => btn.classList.remove('active'));
  buttons[tabNumber - 1].classList.add('active');

  document.getElementById('btn').style.left = (tabNumber === 1) ? '0' : '50%';

  var images = getImages();
  changeMainImage(images[0].src, images[0].overlayIndex);
}

// Khi trang tải xong, hiển thị ảnh đầu tiên của tab 1
document.addEventListener("DOMContentLoaded", function () {
  showTab(1);
});

function playImage() {
  if (!playInterval) {
    playInterval = setInterval(function () {
      nextImage();
    }, 5000);
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




