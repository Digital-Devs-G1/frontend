import API from "../services/login";
import Validation from "../validations/loginValidation";

// --- Callback errors ----
async function loginErrorCallback (errors){
    const errorMessages = [].concat(errors);
    if (errorMessages.length > 0) {
      const errorContainer = document.getElementById("error-messages-container");
      await showErrorsMessages(errorMessages, errorContainer);
      console.log("Errores:", errorMessages);
    }
}

// --- Callback Ok ----
async function okCallback(){
    window.location.href = "martin.html"
}

// --- Show Error Messages --- 
async function showErrorsMessages(errorMessages, errorContainer){

  if (errorContainer) {
    while (errorContainer.firstChild) {
      errorContainer.removeChild(errorContainer.firstChild);
    }
  }
  errorContainer.style.display = "block";

  errorMessages.forEach((error) => {
    const errorItem = document.createElement("p");
    errorItem.classList.add("error-item");
    errorItem.textContent = error.message;
    errorContainer.appendChild(errorItem);
  });
}

// --- Show/Hide Password ---   
document
  .getElementById("show-password-checkbox")
  .addEventListener("change", function () {
    var passwordInput = document.getElementById("password");
    if (this.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });

document.addEventListener("DOMContentLoaded", function () {
  const result = document.getElementById("login-button");
  result.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    clickFunct();
  });
});

// --- Process to Login --- 
async function clickFunct() {
  const json = await getFieldsLogin();
  if(json !== null) 
    API.Login(json, loginErrorCallback, okCallback);
} 

// --- Get Fields to Form --- 
async function getFieldsLogin() {
  const usernameFields = document.getElementById("username");
  const passwordFields = document.getElementById("password");
  const errorContainer = document.getElementById("error-messages-container");

  const user = usernameFields.value;
  const pass = passwordFields.value;

  const valid = await Validation.LoginFieldValidation(user, pass);

  if (valid.errors.length > 0) {
    await showErrorsMessages(valid.errors, errorContainer);
    return null;
  }

  // --- Clean registers --- 
  usernameFields.value = '';
  passwordFields.value = '';

  errorContainer.style.display = 'none';
  return valid.json;
}


// Recupera la info
// 