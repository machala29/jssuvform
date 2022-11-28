const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password-check');
const formControl = document.getElementsByClassName('form-control');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2value = password2.value.trim();

    if(usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
    } else {
        setSuccessFor(username);

    }
    
    if(emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
    } else if(!regex(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else {
        setSuccessFor(email);
    }
    
    if(passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
    } else {
        setSuccessFor(password);
    }
    if(password2value === '') {
        setErrorFor(password2, 'Password cannot be blank');
    } else if (passwordValue !== password2value)  {
        setErrorFor(password2, "Password does not match");
    }      
     else {
        setSuccessFor(password2);

}
  
  
}
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message;
    formControl.className = "form-control error";
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
function regex(email) {
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
}


//const isEmail= /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
/*const emailPattern = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/
if(email.value.match(emailPattern)) {
    const formControl = input.parentElement;
    email.classList.add("success");
    setSuccessFor(email);
} else {
    //const formControl = input.parentElement;
    //formControl.className = "form-control error";
    setErrorFor(email);
}*/