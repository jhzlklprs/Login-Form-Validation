const form = document.getElementById('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInput();
});



//Error Message
const setError = (element, message) => {
    const inputValue = element.parentElement;
    const errorDisplay = inputValue.querySelector('.error');

    errorDisplay.innerText = message;
    inputValue.classList.add('error');
    inputValue.classList.remove('success');
}

//Success Message

const setSuccess = (element, message) => {
    const inputValue = element.parentElement;
    const errorDisplay = inputValue.querySelector('.error');

    errorDisplay.innerText = '';
    inputValue.classList.add('success');
    inputValue.classList.remove('error');
}




const validateInput = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === ''){
        setError(email, 'Please enter a valid email');
        setTimeout(setError, 2000);

    }else{
        setSuccess(email);
    }



    if(passwordValue === ''){
        setError(password, 'Please enter a valid password');
    } else {
        setSuccess(password);
    }
}