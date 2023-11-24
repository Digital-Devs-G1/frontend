document.addEventListener("DOMContentLoaded", function () {
    document
      .getElementById("login-out-button")
      .addEventListener("click", function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente
        localStorage.removeItem('token');
        localStorage.removeItem('tokenExpiration');
        window.location.href = "../login/login.html";
      });
  });