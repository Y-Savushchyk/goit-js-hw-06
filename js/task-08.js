/*
const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", clickSubmit);
function clickSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  console.log(`email: ${email.value}, password: ${password.value}`);
  formRef.reset();
}
*/
const formRef = document.querySelector(".login-form");
formRef.addEventListener("submit", clickSubmit);
const valuesRef = {
  email: "email",
  password: "password",
};
function clickSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены");
  }
  valuesRef.email = email.value;
  valuesRef.password = password.value;
  formRef.reset();
  return console.log(valuesRef);
}
