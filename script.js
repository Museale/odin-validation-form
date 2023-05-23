//first and second name validation requires a regexp text pattern, not null, no longer than 20 characters

// email requires an email ( including @ ) no longer than 30 characters

// country requires a text input no longer than 20 characters

//zip requires a zip-code pattern no more than 4 numbers

// password regex pattern 

//confirmed password has to match password input 

//I will need a validate function to check whether or not the inputfields are empty, 
//1. return error messages for the fields that are empty
//2. return error messages if the field does not match its specified format
//3. return error if too short too long and how much is missing or out of range


const get = (() => {

    const form = document.querySelector("form");
    const name = document.getElementById('input-name');
    const email = document.getElementById('email');
    const country = document.getElementById('input-country');
    const zipCode = document.getElementById('input-zip-code');
    const password = document.getElementById('input-password');
    const confirmPassword = document.getElementById('input-confirm-password');
    const submitBtn = document.getElementById('input-submit');

    const nameError = name.nextElementSibling;
    const emailError = email.nextElementSibling;
    const countryError = country.nextElementSibling;
    const zipCodeError = zipCode.nextElementSibling;
    const passwordError = password.nextElementSibling;
    const confirmPasswordError = confirmPassword.nextElementSibling;

    return {
        form,
        name,
        email,
        country,
        zipCode,
        password,
        confirmPassword,
        submitBtn,
        nameError,
        emailError,
        countryError,
        zipCodeError,
        passwordError,
        confirmPasswordError
    }
})();


const emailRegExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameRegExp = /[a-zA-z]+/;
const zipRegExp = /^\d{4}$/;
const passwordRegExp = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

get.form.addEventListener('load', () => {
    const nameValid = get.name.value.length === 0 || nameRegExp.test(get.name.value);
    get.name.className = nameValid ? 'valid' : 'invalid';
    const emailValid = get.email.value.length === 0 || emailRegExp.test(get.email.value);
    get.email.className = emailValid ? 'valid' : 'invalid';
    const zipValid = get.zipCode.value.length === 0 || zipRegExp.test(get.zipCode.value);
    get.zipCode.className = zipValid ? 'valid' : 'invalid';
    const passwordValid = get.password.value.length === 0 || passwordRegExp.test(get.password.value);
    get.password.className = passwordValid ? 'valid' : 'invalid';
    const confirmPasswordValid = get.confirmPassword.value.length === 0 || get.password.value === get.confirmPassword.value;
    get.confirmPassword.className = confirmPasswordValid ? 'valid' : 'invalid';
});

get.name.addEventListener('input', () => {
    const nameValid = get.name.value === 0 || nameRegExp.test(get.name.value);
    if (nameValid) {
        get.name.className = 'valid';
        get.nameError.textContent = '';
        get.nameError.className = 'error';
    } else {
        get.name.className = 'invalid';
    }
})

get.email.addEventListener('input', () => {
    const emailValid = get.email.value.length === 0 || emailRegExp.test(get.email.value);
    if (emailValid) {
        get.email.className = 'valid';
        get.emailError.textContent = '';
        get.emailError.className = 'error';
    } else {
        get.email.className = 'invalid';
    }
})

get.zipCode.addEventListener('input', () => {
    const zipValid = get.zipCode.value.length === 0 || zipRegExp.test(get.zipCode.value);
    if (zipValid) {
        get.zipCode.className = 'valid';
        get.zipCodeError.textContent='';
        get.zipCodeError.className = 'error';
    } else {
        get.zipCode.className = 'invalid';
    }
});

get.password.addEventListener('input', () => {
    
})

get.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameIsValid = get.name.value.length === 0 || nameRegExp.test(get.name.value);
    const emailIsValid = get.email.value.length === 0 || emailRegExp.test(get.email.value);
    const zipValid = get.zipCode.value.length === 0 || zipRegExp.test(get.zipCode.value);
    
    if(!nameIsValid) {
        get.name.className = 'invalid';
        get.nameError.textContent = 'Please provide your name.';
        get.nameError.className = 'error active'
    } else if (nameIsValid) {
        get.name.className = 'valid';
        get.nameError.textContent = '';
        get.nameError.className = 'error';
    }

    if (!emailIsValid) {
      get.email.className = 'invalid';
      get.emailError.textContent = 'Please write your email.';
      get.emailError.className = 'error active';
    } else if (emailIsValid) {
      get.email.className = 'valid';
      get.emailError.textContent = '';
      get.emailError.className = 'error';
    }   

    if (!zipValid) {
        get.zipCode.className = 'invalid';
        get.zipCodeError.textContent = 'Please write your ZIP code';
        get.zipCodeError.className = 'error active';
      } else if (zipValid) {
        get.zipCode.className = 'valid';
        get.zipCodeError.textContent = '';
        get.zipCodeError.className = 'error';
      }  

})
