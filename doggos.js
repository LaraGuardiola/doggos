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

  // Llama a la función handleScroll al cargar la página para activar la animación inicial
  handleScroll();
});
