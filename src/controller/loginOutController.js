function loginOutEvent (container){
  container.addEventListener("click", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe automáticamente
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    window.location.href = "../login/login.html";
  });
}

const LoginOut = {
  event : loginOutEvent
}

export default LoginOut;
