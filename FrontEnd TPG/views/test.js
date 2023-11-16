import{getUsers} from '../Comunications/user.js';


document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("boton");
    result.addEventListener("click", function () {
        getUsers();
    });
  });