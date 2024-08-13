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
});
