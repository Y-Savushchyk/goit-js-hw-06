const textInputRef = document.querySelector("input");

// textInputRef.addEventListener("blur", onInputBlur);
// function onInputBlur() {
//   console.log(textInputRef.textContent);
// }
// console.log(event.currentTarget.value);
textInputRef.addEventListener("blur", (event) => {
  if (event.currentTarget.value.length == textInputRef.dataset.length) {
    textInputRef.style.borderColor = "#4caf50";
  } else {
    console.log("false");
    textInputRef.style.borderColor = "#f44336";
  }
});
