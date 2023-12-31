const counter = document.querySelector('.counter')
let num = 0

setInterval(() => {
  num++
  counter.innerHTML = num
}, 2000)

// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// Función para ajustar la altura del contenedor .scroller
const adjustScrollerHeight = () => {
  const scroller = document.querySelector(".scroller");
  const navbarHeight = window.innerHeight - document.documentElement.clientHeight;

  scroller.style.maxHeight = `calc(100vh - ${navbarHeight}px)`;
}

window.addEventListener("load", adjustScrollerHeight);
window.addEventListener("resize", adjustScrollerHeight);

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const animatedInfos = document.querySelectorAll(".info");
  const animatedImages = document.querySelectorAll(".photo");
  const scroller = document.querySelector(".scroller");

  const handleScroll = () => {

    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;

      if (isVisible && !section.classList.contains("animated")) {
        section.classList.add("animated");

        setTimeout(() => {
          animatedImages[index].classList.add("active");
        }, 500);
        setTimeout(() => {
          animatedInfos[index].classList.add("active");
        }, 1500);
      }
    });
  };

  scroller.addEventListener("scroll", handleScroll)
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  //Llama a la función handleScroll al cargar la página para activar la animación inicial
  handleScroll();
});

const openGallery = (doggo) => {
  const galleries = document.querySelectorAll(".gallery")

  galleries.forEach((gallery) => {
    if (gallery.style.display === "flex") {
      gallery.style.display = "none";
    }
  })

  galleries[doggo].style.display = "flex";
  setTimeout(() => {
    galleries[doggo].scrollIntoView({ behavior: "smooth" });
  }, 200)
}
