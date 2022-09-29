const submitBtn= document.querySelector(".btn");
const firstNameInput = document.querySelector(".form-control");
const lastNameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const firstNameErr = document.querySelector("#firstErr");
const lastNameErr = document.querySelector("#lastErr");
const emailEmpty = document.querySelector("#emailEmpty");
const emailErr = document.querySelector("#emailErr");
const passwordErr = document.querySelector("#pwErr");
const passwordEmpty = document.querySelector("#pwEmpty");

submitBtn.addEventListener("click", () => {
    if( firstNameInput.value === ""){
        firstNameErr.style.display = "block";
        firstNameInput.classList.add("active");
    } else{
        console.log ("first name is ", firstNameInput.value);
    }
    if(lastNameInput.value === "") {
        lastNameErr.style.display = "block";
        lastNameInput.classList.add("active");
    } else{
        console.log('last name is', lastNameInput.value)
    }
    if(emailInput.value === "") {
        emailEmpty.style.display = "block";
        emailInput.classList.add("active");
    }else if(emailInput.value !== "thidar@gmail.com"){
        emailInput.classList.add("active");
        emailErr.style.display = "block";
    } else{
        console.log('Email is', emailInput.value)
    }
    if(passwordInput.value === "") {
        passwordEmpty.style.display = "block";
        passwordInput.classList.add("active");
    }else if(passwordInput.value !== "password"){
        passwordInput.classList.add("active");
        passwordErr.style.display = "block";
    } else{
        console.log('password is', passwordInput.value)
    }
})