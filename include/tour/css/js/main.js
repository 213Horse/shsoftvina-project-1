document.addEventListener("DOMContentLoaded", function() {
    const paginationLine = document.querySelector(".pagination-line");
    const navbar = document.querySelector(".navbar");
    const imageItems = document.querySelectorAll(".image-item img");
    const header = document.querySelector(".header");
    const menuLinks = document.querySelectorAll(".menu-links a");
    window.addEventListener("scroll", function() {
        if (window.scrollY > 50) { // Kiểm tra nếu cuộn trang vượt quá 50px
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });

    imageItems.forEach((img, index) => {
        img.addEventListener("click", () => {
            // Di chuyển đường phân trang dựa trên ảnh được nhấp
            if (index < 2) {
                // Di chuyển đường phân trang trên hai ảnh đầu tiên
                paginationLine.style.transform = "translateX(0%)";
            } else {
                // Di chuyển đường phân trang trên hai ảnh cuối cùng
                paginationLine.style.transform = "translateX(100%)";
            }
        });
    });

    // Đặt ảnh đầu tiên làm nền mặc định
    if (imageItems.length > 0) {
        const defaultImageUrl = imageItems[0].src;
        header.style.backgroundImage = `url('${defaultImageUrl}')`;
    }

    // Thêm sự kiện click để thay đổi nền khi chọn ảnh khác
    imageItems.forEach((img) => {
        img.addEventListener("click", () => {
            const newImageUrl = img.src;
            header.style.backgroundImage = `url('${newImageUrl}')`;
        });
    });

    // Thêm sự kiện cuộn trang mượt mà khi nhấn vào các liên kết trong thanh điều hướng
    const navLinksContainer = document.querySelector('.nav-links');
const menuToggle = document.querySelector(".menu-toggle");

if (menuToggle && navLinksContainer) { // Kiểm tra xem cả hai phần tử có tồn tại không
    menuToggle.addEventListener("click", function() {
        navLinksContainer.classList.toggle("show-menu");
    });
} else {
    console.error('Không tìm thấy phần tử .menu-toggle hoặc .nav-links.');
}

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

   // Hiển thị chấm tròn ở liên kết đầu tiên khi mở trang
   menuLinks[0].classList.add('active');

   // Đồng bộ hóa sự kiện nhấp vào menu-links với ảnh
   menuLinks.forEach((link, index) => {
       link.addEventListener("click", () => {
           updateActiveLink(index);
           movePaginationLine(index);
       });
   });

   // Đồng bộ hóa sự kiện nhấp vào ảnh với menu-links
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

   // Hàm di chuyển đường phân trang
   function movePaginationLine(index) {
       if (index < 2) {
           // Di chuyển đường phân trang trên hai liên kết đầu tiên
           paginationLine.style.transform = "translateX(0%)";
       } else {
           // Di chuyển đường phân trang trên hai liên kết cuối cùng
           paginationLine.style.transform = "translateX(100%)";
       }
   }

    // Thêm sự kiện click cho các liên kết trong menu-links
    menuLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết

            // Xóa lớp active khỏi tất cả các liên kết
            menuLinks.forEach(link => link.classList.remove('active'));

            // Thêm lớp active cho liên kết hiện tại
            link.classList.add('active');

            // Lấy URL ảnh tương ứng và đặt làm background cho header
            const newImageUrl = link.dataset.imageUrl; // Giả sử bạn thêm data-image-url vào mỗi thẻ a
            if (newImageUrl) {
                header.style.backgroundImage = `url('${newImageUrl}')`;
            }
        });
    });


    // Lấy các phần tử a từ menu-links
    const forestLink = document.getElementById("forest-link");
    const waterLink = document.getElementById("water-link");
    const cultureLink = document.getElementById("culture-link");

    // Đường dẫn đến các ảnh
    const forestImageUrl = "include/tour/css/img/main/Rectangle5.png";
    const waterImageUrl = "include/tour/css/img/main/Rectangle4.png";
    const cultureImageUrl = "include/tour/css/img/main/Rectangle6.png";

    // Sự kiện click cho từng liên kết
    forestLink.addEventListener("click", function(event) {
        event.preventDefault(); // Ngăn chặn hành động mặc định của thẻ a
        header.style.backgroundImage = `url('${forestImageUrl}')`;
    });

    waterLink.addEventListener("click", function(event) {
        event.preventDefault();
        header.style.backgroundImage = `url('${waterImageUrl}')`;
    });

    cultureLink.addEventListener("click", function(event) {
        event.preventDefault();
        header.style.backgroundImage = `url('${cultureImageUrl}')`;
    });
});
