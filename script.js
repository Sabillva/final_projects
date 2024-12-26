function cursorEffect() {
  var page1Content = document.querySelector("#page1-content");
  var cursor = document.querySelector("#cursor");

  page1Content.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
      x: dets.clientX,
      y: dets.clientY,
    });
  });

  page1Content.addEventListener("mouseenter", function () {
    gsap.to(cursor, { scale: 1, opacity: 1 });
  });

  page1Content.addEventListener("mouseleave", function () {
    gsap.to(cursor, { scale: 0, opacity: 0 });
  });
}
cursorEffect();

var tl = gsap.timeline();

tl.from("#loader h3", {
  x: 40,
  opacity: 0,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader h3", {
  opacity: 0,
  x: -15,
  duration: 1,
  stagger: 0.1,
});

tl.to("#loader", {
  opacity: 0,
});

tl.from("#page1-content h1", {
  y: 100,
  opacity: 0,
  stagger: 0.1,
  duration: 0.5,
  delay: -0.5,
});

tl.to("#loader", {
  display: "none",
});

var swiper = new Swiper(".swiper-container", {
  slidesPerView: 2,
  spaceBetween: 0,
  loop: true,
  freeMode: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
  },
  speed: 5000,
  grabCursor: true,
});

function page9Animation() {
  var rightElems = document.querySelectorAll(".right-elem");

  rightElems.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 1,
        scale: 1,
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to(elem.childNodes[3], {
        opacity: 0,
        scale: 0,
      });
    });
    elem.addEventListener("mousemove", function (dets) {
      gsap.to(elem.childNodes[3], {
        x: dets.clientX - elem.getBoundingClientRect().x - 90,
        y: dets.clientY - elem.getBoundingClientRect().y - 150,
      });
    });
  });
}
page9Animation();

function page10VideoAnimation() {
  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.childNodes[3].style.opacity = 1;
      elem.childNodes[3].play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.childNodes[3].style.opacity = 0;
      elem.childNodes[3].load();
    });
  });
}
page10VideoAnimation();

function page10VideoAnimation() {
  var sections = document.querySelectorAll(".sec-right");

  sections.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      elem.querySelector("video").style.opacity = 1;
      elem.querySelector("video").play();
    });
    elem.addEventListener("mouseleave", function () {
      elem.querySelector("video").style.opacity = 0;
      elem.querySelector("video").load();
    });

    const video = elem.querySelector("video");
    video.addEventListener("click", function () {
      const link = video.getAttribute("data-link");
      if (link) {
        window.location.href = link;
      }
    });
  });
}
page10VideoAnimation();

// function page12Animations() {
//   gsap.from("#btm12-part2 h4", {
//     x: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#btm12-part2",
//       scroller: "#main",
//       start: "top 80%",
//       end: "top 10%",
//       scrub: true,
//     },
//   });

//   gsap.from("#btm12-part3 h4", {
//     x: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#btm12-part3",
//       scroller: "#main",
//       start: "top 80%",
//       end: "top 10%",
//       scrub: true,
//     },
//   });

//   gsap.from("#btm12-part4 h4", {
//     x: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: "#btm12-part4",
//       scroller: "#main",
//       start: "top 80%",
//       end: "top 10%",
//       scrub: true,
//     },
//   });
// }
// page12Animations();

const carouselTrack = document.querySelector(".carousel-track");
const cards = document.querySelectorAll(".info-card");

let currentScroll = 0;
const cardWidth =
  cards[0].offsetWidth + parseInt(getComputedStyle(cards[0]).marginRight);
const trackWidth = cardWidth * cards.length;
const normalSpeed = 2;
const resetSpeed = 20;
let isHovered = false;
let isResetting = false;

function startCarouselEco() {
  if (!isHovered) {
    if (isResetting) {
      currentScroll -= resetSpeed;

      if (currentScroll <= 0) {
        currentScroll = 0;
        isResetting = false;
      }
    } else {
      currentScroll += normalSpeed;

      if (currentScroll >= trackWidth - window.innerWidth) {
        isResetting = true;
      }
    }

    carouselTrack.style.transform = `translateX(-${currentScroll}px)`;
  }

  requestAnimationFrame(startCarouselEco);
}

cards.forEach((card) => {
  card.addEventListener("mouseenter", () => (isHovered = true));
  card.addEventListener("mouseleave", () => (isHovered = false));
});

document.addEventListener("DOMContentLoaded", () => {
  startCarouselEco();
});

document.addEventListener("DOMContentLoaded", () => {
  const ecoInfoSection = document.querySelector(".eco-info");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          ecoInfoSection.classList.add("scrolled");
        } else {
          ecoInfoSection.classList.remove("scrolled");
        }
      });
    },
    { threshold: 0.3 }
  );
  observer.observe(ecoInfoSection);
});

const boxes = document.querySelectorAll(".customers-container .box");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close-btn");
const modalBoxContainer = document.getElementById("modal-box-container");

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    modalBoxContainer.innerHTML = box.innerHTML;
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
