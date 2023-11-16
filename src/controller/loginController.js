import LoginService from "../services/loginService.js";
import LoginView from "../view/login/loginView.js"

document.addEventListener("DOMContentLoaded", function () {
    document
    .getElementById("login-button")
    .addEventListener("click", async function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        const json = await getFieldsLogin();
        if (json !== null && await login(json))
            window.location.href = "../newReport/newReport.html";
        else
            LoginView.showLoginFormFeedback(["Credenciales invalidas"]);
    });
});

async function login(credentials)
{
  let json = await LoginService.login(credentials);
  if(json==null)
    return false;
  console.log(json);
  localStorage.setItem("token", json.result.token);
  localStorage.setItem("tokenExpiration", json.result.expiration);
  return true;
}


async function getFieldsLogin() 
{
  const usernameField = document.getElementById("username");
  const passwordField = document.getElementById("password");
  const valid = await validateCredentials(
    usernameField.value,
    passwordField.value
  );
  if (valid.errors.length == 0) 
    return valid.json;
  LoginView.showLoginFormFeedback(valid.errors);
  usernameField.value = "";
  passwordField.value = "";
  return null;
}

async function validateCredentials(user, pass) {
  const errorsList = [];
  const emailMatch = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (user === "")
    errorsList.push(new Error("El campo 'username' deben estar completo."));
  if (pass === "")
    errorsList.push(new Error("El campo 'password' deben estar completo."));
  if (!emailMatch.test(user))
    errorsList.push(
      new Error(
        "El correo electrónico no es válido. Debe tener el formato example@mail.com"
      )
    );
  return {
    json: {
      email: user,
      password: pass,
    },
    errors: errorsList,
  };
}
