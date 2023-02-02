/*step 1*/
const btn = document.querySelectorAll("#counter button");

/*step 2*/
const counterValue = document.querySelector("#value");
counterValue.textContent = 0;
/*step 3*/

const decrementClick = () => {
  // counterValue.textContent = counterValue.textContent - 1
  counterValue.textContent = counterValue.textContent - -btn[0].textContent;
};
btn[0].addEventListener("click", decrementClick);
const incrementClick = () => {
  // counterValue.textContent=  counterValue.textContent-1+2
  // counterValue.textContent = counterValue.textContent - (-1)
  counterValue.textContent = counterValue.textContent - -btn[1].textContent;
};
btn[1].addEventListener("click", incrementClick);
