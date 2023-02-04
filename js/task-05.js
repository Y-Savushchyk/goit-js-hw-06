const textInputRef = document.querySelector("#name-input");
const textOutputRef = document.querySelector("#name-output");

textInputRef.addEventListener("input", (event) => {
  if (event.currentTarget.value.length == 0) {
    textOutputRef.textContent = "Anonymous";
  } else {
    textOutputRef.textContent = event.currentTarget.value;
  }
});
