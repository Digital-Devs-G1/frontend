// --- Validators Fields --- 
async function validField(user, pass) {
    const errorsList = [];
    const emailMatch = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  
    if (user === "") {
      errorsList.push(new Error("El campo 'username' deben estar completo."));
    }
  
    if (pass === "") {
      errorsList.push(new Error("El campo 'password' deben estar completo."));
    }
  
    if (!emailMatch.test(user)) {
      errorsList.push(
        new Error(
          "El correo electrónico no es válido. Debe tener el formato example@mail.com"
        )
      );
    }
  
    return {
      json: {
        email: user,
        password: pass,
      },
      errors: errorsList,
    };
  }

const Validation = {
    LoginFieldValidation : validField(user, pass)
}

export default Validation;