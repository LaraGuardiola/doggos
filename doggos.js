const counter = document.querySelector('.counter')
let num = 0

setInterval(() => {
  num++
  counter.innerHTML = num
}, 2000)

// Función para ajustar la altura del contenedor .scroller
function ajustarAlturaScroller() {
  const scroller = document.querySelector(".scroller");
  const alturaBarraNavegacion = window.innerHeight - document.documentElement.clientHeight;

  scroller.style.maxHeight = `calc(100vh - ${alturaBarraNavegacion}px)`;
}

window.addEventListener("load", ajustarAlturaScroller);
window.addEventListener("resize", ajustarAlturaScroller);

document.addEventListener("DOMContentLoaded", function () {
  try {
    if (screen.orientation === 'portrait') {
      window.screen.orientation.lock("portrait")
    }else {
      window.screen.orientation.lock("portrait")
    }
  } catch (error) {
    console.error(error)
  }

  const sections = document.querySelectorAll("section");
  const animatedInfos = document.querySelectorAll(".info");
  const animatedImages = document.querySelectorAll(".photo");

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



