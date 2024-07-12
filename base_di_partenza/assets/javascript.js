window.addEventListener("scroll", function () {
  let nav = document.getElementById("nav");
  let btn = document.getElementById("greenbtn");
  if (window.scrollY > 382) {
    nav.style.backgroundColor = "#fff"; // Colore di sfondo bianco
    btn.style.backgroundColor = "#1a8917";
  } else {
    nav.style.backgroundColor = "#ffc017"; // sfondo originale
    btn.style.backgroundColor = "#181919";
  }
});
// qui toglie la m
/* const mElements = document.getElementsByTagName("g");
const mElementsFiltered = Array.from(mElements).filter(
  (element) => element.getAttribute("opacity") === "0"
);
mElementsFiltered.shift();

const mAnimation = setInterval(() => {
  const randomNum = Math.floor(Math.random() * mElementsFiltered.length);
  const currentElement = mElementsFiltered[randomNum];
  const currentOpacity = currentElement.getAttribute("opacity");
  if (currentOpacity === "0") {
    currentElement.setAttribute("opacity", 1);
  } else if (currentOpacity === "1") {
    currentElement.setAttribute("opacity", 0);
  }
}, 10);
 */
