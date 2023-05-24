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

const validateThis = (input, error, regex) => {
    const isValid = input.value.length === 0 || regex.test(input.value);
    if (isValid) {
        input.className = 'valid';
        error.textContent = '';
        error.className = 'error';
    } else {
        input.className = 'invalid';
    }
};

const validateForm = (nameIsValid, emailIsValid, zipValid, passwordValid, confirmPasswordValid) => {
    
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

    if (!passwordValid) {
        get.password.className = 'invalid';
        get.passwordError.textContent = 'Please use minimum 8 characters, and at least one number.'
        get.passwordError.className = 'error active';
    } else if (passwordValid) {
        get.password.className = 'valid';
        get.passwordError.textContent = '';
        get.passwordError.className = 'error';
    }

    if (!confirmPasswordValid) {
        get.confirmPassword.className = 'invalid';
        get.confirmPasswordError.textContent = 'Your passwords have to match.'
        get.confirmPasswordError.className = 'error active';
    } else if (confirmPasswordValid) {
        get.confirmPassword.className = 'valid';
        get.confirmPasswordError.textContent = '';
        get.confirmPasswordError.className = 'error';
    }

    
}

get.name.addEventListener('input', validateThis(get.name, get.nameError, nameRegExp))

get.email.addEventListener('input', validateThis(get.email, get.emailError, emailRegExp))

get.zipCode.addEventListener('input', validateThis(get.zipCode, get.zipCodeError, zipRegExp));

get.password.addEventListener('input', validateThis(get.password, get.passwordError, passwordRegExp));


get.form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameIsValid = get.name.value.length !== 0 || nameRegExp.test(get.name.value);
    const emailIsValid = get.email.value.length !== 0 || emailRegExp.test(get.email.value);
    const zipValid = get.zipCode.value.length !== 0 || zipRegExp.test(get.zipCode.value);
    const passwordValid = get.password.value.length !== 0 || passwordRegExp.test(get.password.value);
    const confirmPasswordValid = get.confirmPassword.value === get.password.value;

    validateForm(nameIsValid, emailIsValid, zipValid, passwordValid, confirmPasswordValid);
    
})

get.form.addEventListener('change', (e) => {
    const nameIsValid = get.name.value.length === 0 || nameRegExp.test(get.name.value);
    const emailIsValid = get.email.value.length === 0 || emailRegExp.test(get.email.value);
    const zipValid = get.zipCode.value.length === 0 || zipRegExp.test(get.zipCode.value);
    const passwordValid = get.password.value.length === 0 || passwordRegExp.test(get.password.value);
    const confirmPasswordValid = get.confirmPassword.value === get.password.value;

    validateForm(nameIsValid, emailIsValid, zipValid, passwordValid, confirmPasswordValid)
})
