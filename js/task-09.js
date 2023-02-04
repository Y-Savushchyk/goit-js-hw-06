const buttonRef = document.querySelector("button");
const bodyRef = document.querySelector("body");
const spanRef = document.querySelector("span");
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

buttonRef.addEventListener("click", () => {
  // bodyRef.style.backgroundColor = spanRef.textContent = getRandomHexColor();
  const i = getRandomHexColor();
  bodyRef.style.backgroundColor = i;
  spanRef.textContent = i;
});
