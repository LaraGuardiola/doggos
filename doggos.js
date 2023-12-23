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

// Llama a la función cuando la página se carga y cuando se cambia el tamaño de la ventana
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
    console.log("scrolleamos wey")
    console.log(window.innerHeight)
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

  const getElementVisible = () => {
    const scroller = document.querySelector(".scroller");
    const doggos = document.querySelectorAll("section");
  
    scroller.addEventListener("scroll", () => {
      const scrollPosition = scroller.scrollTop + window.innerHeight / 2;
  
      doggos.forEach(doggo => {
        const rect = doggo.getBoundingClientRect();
  
        if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
          console.log(rect.top <= scrollPosition && rect.bottom >= scrollPosition)
          handleScroll()
        } else {
          console.log(rect.top <= scrollPosition && rect.bottom >= scrollPosition)
        }
      });
    });
  }

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  //Llama a la función handleScroll al cargar la página para activar la animación inicial
  handleScroll();
  getElementVisible();
});



