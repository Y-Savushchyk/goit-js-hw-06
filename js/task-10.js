function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const boxesDivRef = document.querySelector("#boxes");
boxesDivRef.style.display = "flex";
const buttonCreateRef = document.querySelector("button[data-create]");
const buttonDestroyRef = document.querySelector("button[data-destroy");
const inputRef = document.querySelector("input");

buttonCreateRef.addEventListener("click", createBoxes);
function createBoxes() {
  for (let i = 1; i <= inputRef.value; i += 1) {
    const newDivRef = document.createElement("div");
    newDivRef.style.backgroundColor = getRandomHexColor();
    newDivRef.style.width = `${40}px`;
    newDivRef.style.height = `${40}px`;
    boxesDivRef.append(newDivRef);
    boxesDivRef.firstChild.style.width = `${30}px`;
    boxesDivRef.firstChild.style.height = `${30}px`;
  }
}
buttonDestroyRef.addEventListener("click", destroyBoxes);
function destroyBoxes() {}
