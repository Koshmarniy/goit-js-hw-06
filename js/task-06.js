const inputValid = document.querySelector('#validation-input');

inputValid.addEventListener("blur", () => {
    if(Number.parseInt(inputValid.getAttribute("data-length")) === inputValid.value.length){
        
        inputValid.classList.add("valid")
    }
    inputValid.classList.add("invalid")
})