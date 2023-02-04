const formRef = document.querySelector(".login-form")
formRef.addEventListener("submit", clickSubmit)
function clickSubmit(event) {
    event.preventDefault();
    const {
        elements: { email, password } 
     }= event.currentTarget;
    if (email.value===""||password.value==="") {
        alert ("Все поля должны быть заполнены")
    } console.log(`email: ${email.value}, password: ${password.value}`);
    formRef.reset()
    
    
}