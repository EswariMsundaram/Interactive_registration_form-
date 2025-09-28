const form = document.getElementById("registrationForm");
const userName = document.getElementById("username");
const userEmail = document.getElementById("email");
const userPassword = document.getElementById("password");
const userConfirmPassword = document.getElementById("confirmPassword");
const submitForm = document.getElementById("form_submit");

const errorName = document.getElementById("usernameError");
const errorEmail = document.getElementById("emailError");
const errorPassword = document.getElementById("passwordError");
const errorConfirmPassword = document.getElementById("confirmPasswordError");

//On page load, check if a username is saved in localStorage if so get the username from local storage

document.addEventListener("DOMContentLoaded", () => {
  let nameLocalStorage = localStorage.getItem("formUserName");
  if (nameLocalStorage) {
    userName.value = nameLocalStorage;
    console.log(userName.value);
  }
});


userName.addEventListener("input", function (event) {
  if (event.target.validity.tooShort) {
    userName.setCustomValidity("Username must be atleast 5 characters long");
  } else if (userName.validity.valueMissing) {
    userName.setCustomValidity("Please enter username. It cannot be empty.");
  } else {
    localStorage.setItem("formUserName", event.target.value);//sets username in localstorage
    userName.setCustomValidity("");
  }
  errorName.textContent = userName.validationMessage;
});

userEmail.addEventListener("input", function (event) {
  if (event.target.validity.typeMismatch) {
    userEmail.setCustomValidity("Not a valid Email!");
  } else {
    userEmail.setCustomValidity("");
  }

  errorEmail.textContent = userEmail.validationMessage;
});

userPassword.addEventListener("input", function (event) {
  if (event.target.validity.tooShort) {
    userPassword.setCustomValidity(
      "Password must be at least 8 characters long"
    );
  } else {
    userPassword.setCustomValidity(" ");
  }
  errorPassword.textContent = userPassword.validationMessage;
});
//Password and ConfirmPassword comparison
userConfirmPassword.addEventListener("input", passwordValidity);
function passwordValidity() {
  if (!(userConfirmPassword.value == userPassword.value)) {
    userConfirmPassword.setCustomValidity("Password Mismatch");
  } else {
    userConfirmPassword.setCustomValidity(" ");
  }
  errorConfirmPassword.textContent = userConfirmPassword.validationMessage;
}

//Form Validation
form.addEventListener("submit", function (event) {
  if (!form.validity.valid) {
    alert("Form Invalid");
    event.preventDefault();
  }
});
