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
});
