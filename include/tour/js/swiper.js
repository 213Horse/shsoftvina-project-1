var swiper1 = new Swiper(".menu-links .swiper", {
  slidesPerView: "auto",
  speed: 400,
});

var swiper2 = new Swiper(".picture-gallery .swiper", {
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 12,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    600: {
      spaceBetween: 12,
      slidesPerView: 1.5,
    },
    800: {
      spaceBetween: 12,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 51,
      slidesPerView: "auto",
    },
  },
});

const eventEle = document.querySelector(".event-swiper");

if (eventEle) {
  var swiper1 = new Swiper(eventEle.querySelector(".swiper"), {
    slidesPerView: 1,
    speed: 400,
    // loop: true,
    navigation: {
      nextEl: eventEle.querySelector(".next"),
      prevEl: eventEle.querySelector(".prev"),
    },
    breakpoints: {
      768: {
        slidesPerView: "auto",
      },
    },
  });
}

const usefulEle = document.querySelector(".useful-wrapper");

if (usefulEle) {
  var swiper1 = new Swiper(usefulEle.querySelector(".swiper"), {
    slidesPerView: 3,
    speed: 400,
    // loop: true,
    navigation: {
      nextEl: usefulEle.querySelector(".next"),
      prevEl: usefulEle.querySelector(".prev"),
    },
    breakpoints: {
      1024: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 7,
      },
    },
  });
}

const contentEle = document.querySelectorAll(".glr-swiper .content-swiper");

if (contentEle.length > 0) {
  contentEle.forEach((swwiper) => {
    var swiper1 = new Swiper(swwiper.querySelector(".swiper"), {
      slidesPerView: 1.3,
      speed: 400,
      loop: true,
      navigation: {
        nextEl: document.querySelector(".content-next"),
        prevEl: document.querySelector(".content-prev"),
      },
      autoplay: {
        delay: 2000,
      },
      breakpoints: {
        768: {
          slidesPerView: "auto",
        },
      },
    });

    swiper1.autoplay.stop();

    const btnPlay = document.querySelector(".glr-swiper .content-play");

    const tabBtnLists = document.querySelectorAll(".glr-swiper .tabBtn ");

    if (tabBtnLists.length > 0) {
      tabBtnLists.forEach((tabBtn) => {
        tabBtn.addEventListener("click", () => {
          swiper1.autoplay.stop();
          btnPlay.classList.remove("running");
        });
      });
    }

    if (btnPlay) {
      btnPlay.addEventListener("click", () => {
        if (swiper1.autoplay.running) {
          swiper1.autoplay.stop();
          btnPlay.classList.remove("running");
        } else {
          swiper1.autoplay.start(); // Bắt đầu autoplay nếu đang dừng
          btnPlay.classList.add("running");
        }
      });
    }
  });
}
