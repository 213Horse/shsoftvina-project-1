document.addEventListener("DOMContentLoaded", function() {
    const imageItems = document.querySelectorAll(".image-item img");
    const header = document.querySelector(".header");

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
    const navLinks = document.querySelectorAll('.nav-links a');

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
