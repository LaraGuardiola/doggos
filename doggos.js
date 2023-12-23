if (screen.orientation === 'portrait') {
  screen.orientation.lock("portrait")
}

const counter = document.querySelector('.counter')
let num = 0

setInterval(() => {
  num++
  counter.innerHTML = num
}, 2000)

document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll("section");
  const animatedInfos = document.querySelectorAll(".info");
  const animatedImages = document.querySelectorAll(".photo");

  const handleScroll = () => {
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const isVisible = rect.top <= window.innerHeight * 0.4;

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

  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);
  //Llama a la función handleScroll al cargar la página para activar la animación inicial
  handleScroll();

  let prevScrollTop = window.scrollY || document.documentElement.scrollTop;
  let prevScrollDirection = '';

  const handleScrollToSection = (direction) => {
    const elements = document.querySelectorAll('section'); 

    let currentElement = null;

    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        currentElement = element;
      }
    });

    if (currentElement) {
      const currentIndex = Array.from(elements).indexOf(currentElement);
      let targetElement = null;

      if (direction === 'down' && currentIndex < elements.length - 1) {
        targetElement = elements[currentIndex + 1];
      } else if (direction === 'up' && currentIndex > 0) {
        targetElement = elements[currentIndex - 1];
      }

      if (targetElement) {
        // Scroll al siguiente o anterior elemento
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  }

  window.addEventListener('scroll', function () {
    const st = window.scrollY || document.documentElement.scrollTop;
    if (st > prevScrollTop && prevScrollDirection !== 'down') {
      // downscroll code here
      prevScrollDirection = 'down';
      console.log("going down")
      handleScrollToSection('down')
    }
    else if (st < prevScrollTop && prevScrollDirection !== 'up') {
      // upscroll code
      prevScrollDirection = 'up';
      console.log("going up")
      handleScrollToSection('up')
    }
    prevScrollTop = st <= 0 ? 0 : st; // for Mobile or negative scrolling
  }, false);
});




// // Hacer scroll hacia la siguiente o anterior sección suavemente
// if (targetElement) {
//   targetElement.scrollIntoView({ behavior: 'smooth' });
// }
