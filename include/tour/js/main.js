document.addEventListener("DOMContentLoaded", function() {
    const headerElement = document.getElementById('header');
    const currentHour = new Date().getHours();
    const imageGallery = document.querySelector(".image-gallery");
    const menuLinks = document.querySelectorAll(".menu-links a");
    const paginationLine = document.querySelector(".pagination-line");
    const navbar = document.querySelector(".navbar");
    const imageItems = document.querySelectorAll(".image-item img");
    let currentIndex = 0;
    const switchInterval = 3000; // 3 giây
    let autoSwitchInterval; // Biến để lưu trữ interval tự động
    let userInteractionTimeout; // Biến để lưu trữ timeout sau khi người dùng tương tác
    
    // Thiết lập ảnh nền ban đầu dựa trên thời gian trong ngày
    if (currentHour < 12) {
        headerElement.style.backgroundImage = "url('morning_image.jpg')";
    } else if (currentHour < 18) {
        headerElement.style.backgroundImage = "url('afternoon_image.jpg')";
    } else {
        headerElement.style.backgroundImage = "url('evening_image.jpg')";
    }

    // Hàm cập nhật slide trong image-gallery
    function updateImageGallery(images) {
        imageGallery.innerHTML = ""; // Xóa các ảnh cũ

        images.forEach(imageUrl => {
            const imageItem = document.createElement("div");
            imageItem.className = "image-item";

            const imgElement = document.createElement("img");
            imgElement.src = imageUrl;
            imgElement.alt = "Gallery Image";

            imageItem.appendChild(imgElement);
            imageGallery.appendChild(imageItem);
        });

        // Thiết lập slide (nếu cần)
        setupImageSlider();
    }

    // Hàm di chuyển đến thẻ a tiếp theo
    function switchToNextLink() {
        // Xóa lớp active của thẻ a hiện tại
        menuLinks[currentIndex].classList.remove('active');

        // Tăng chỉ số lên 1, nếu vượt quá số lượng thẻ a thì quay lại thẻ đầu tiên
        currentIndex = (currentIndex + 1) % menuLinks.length;

        // Thêm lớp active vào thẻ a mới
        menuLinks[currentIndex].classList.add('active');

        // Lấy giá trị từ thuộc tính data-images và cập nhật image-gallery
        const imageUrls = menuLinks[currentIndex].getAttribute("data-images").split(',');
        updateImageGallery(imageUrls);
        movePaginationLine(currentIndex); // Cập nhật vị trí của pagination line
    }

    // Hàm khởi động lại chuyển đổi tự động sau khi người dùng tương tác
    function restartAutoSwitch() {
        clearInterval(autoSwitchInterval); // Dừng việc chuyển đổi tự động hiện tại
        clearTimeout(userInteractionTimeout); // Hủy timeout nếu người dùng tương tác nhiều lần

        userInteractionTimeout = setTimeout(function() {
            autoSwitchInterval = setInterval(switchToNextLink, switchInterval);
        }, 2000); // Đợi 2 giây trước khi khởi động lại chuyển đổi tự động
    }

    // Thiết lập sự kiện click cho từng liên kết
    menuLinks.forEach((link, index) => {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a

            // Cập nhật chỉ số hiện tại khi người dùng nhấp vào
            currentIndex = index;

            // Cập nhật lớp active
            menuLinks.forEach(link => link.classList.remove('active'));
            link.classList.add('active');

            // Lấy giá trị từ thuộc tính data-images và cập nhật image-gallery
            const imageUrls = link.getAttribute("data-images").split(',');
            updateImageGallery(imageUrls);

            // Khởi động lại chuyển đổi tự động sau khi người dùng tương tác
            restartAutoSwitch();

            // Cập nhật vị trí của pagination line
            movePaginationLine(index);
        });
    });

    // Bắt đầu chuyển đổi tự động giữa các thẻ a
    autoSwitchInterval = setInterval(switchToNextLink, switchInterval);

    // Hiển thị slide và dấu chấm xanh ban đầu
    const initialImages = menuLinks[currentIndex].getAttribute("data-images").split(',');
    menuLinks[currentIndex].classList.add('active');
    updateImageGallery(initialImages);

    // Hàm thiết lập slide cho image-gallery
    function setupImageSlider() {
        // Cài đặt slide (sử dụng thư viện nếu cần)
    }

    // Sự kiện cuộn để thay đổi thanh điều hướng
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Kiểm tra nếu cuộn trang vượt quá 50px
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    // Hàm di chuyển đường phân trang
    function movePaginationLine(index) {
        if (index < 2) {
            paginationLine.style.transform = "translateX(0%)";
        } else {
            paginationLine.style.transform = "translateX(100%)";
        }
    }

    // Sự kiện click cho các ảnh để đồng bộ với menu-links
    imageItems.forEach((img, index) => {
        img.addEventListener("click", () => {
            updateActiveLink(index);
            movePaginationLine(index);
        });
    });

    // Hàm cập nhật trạng thái active của các liên kết
    function updateActiveLink(index) {
        menuLinks.forEach(link => link.classList.remove('active'));
        menuLinks[index].classList.add('active');
    }

    // Logic mở menu khi bấm vào .menu-toggle
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinksContainer = document.querySelector('.nav-links');

    if (menuToggle && navLinksContainer) { // Kiểm tra xem cả hai phần tử có tồn tại không
        menuToggle.addEventListener("click", function() {
            navLinksContainer.classList.toggle("show-menu");
        });
    } else {
        console.error('Không tìm thấy phần tử .menu-toggle hoặc .nav-links.');
    }
});
