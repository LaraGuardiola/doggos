const counter = document.querySelector('.counter')
let num = 0

setInterval(() => {
  num++
  counter.innerHTML = num
}, 2000)

document.addEventListener("DOMContentLoaded", function () {
  try {
    if (screen.orientation === 'portrait') {
      screen.orientation.lock("portrait")
    }else {
      screen.orientation.lock("portrait")
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
    const doggos = document.querySelectorAll(".doggos");
  
    scroller.addEventListener("scroll", () => {
      const scrollPosition = scroller.scrollTop + window.innerHeight / 2;
  
      doggos.forEach(doggo => {
        const rect = doggo.getBoundingClientRect();
  
        if (rect.top <= scrollPosition && rect.bottom >= scrollPosition) {
          handleScroll()
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



