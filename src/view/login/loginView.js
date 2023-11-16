document.addEventListener("DOMContentLoaded", function () {
  const errorContainer = document.getElementById("error-messages-container");
  errorContainer.style.display = "none";
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
});

function showLoginFormFeedback(errorMessages) {
  const errorContainer = document.getElementById("error-messages-container");
  errorContainer.innerHTML = "";
  errorMessages.forEach((error) => {
    errorContainer.innerHTML += `<p class="error-item">${error}</p>`;
  });
  errorContainer.style.display = "block";
}

const LoginView = {
  showLoginFormFeedback: showLoginFormFeedback,
};

export default LoginView;