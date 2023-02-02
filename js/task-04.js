/*step 1*/
const btnRef = document.querySelectorAll("#counter button");

/*step 2*/
const counterValueRef = document.querySelector("#value");
counterValueRef.textContent = 0;
/*step 3*/

const decrementClick = () => {
  // counterValue.textContent = counterValue.textContent - 1
  counterValueRef.textContent =
    counterValueRef.textContent - -btnRef[0].textContent;
};
btnRef[0].addEventListener("click", decrementClick);
const incrementClick = () => {
  // counterValue.textContent=  counterValue.textContent-1+2
  // counterValue.textContent = counterValue.textContent - (-1)
  counterValueRef.textContent =
    counterValueRef.textContent - -btnRef[1].textContent;
};
btnRef[1].addEventListener("click", incrementClick);
