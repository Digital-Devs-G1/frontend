import HeaderComponent from "../../component/headerComponent.js";

function render(menuItems) 
{
  let header = document.querySelector("header");
  HeaderComponent.render(menuItems, header);
};

const rolSelect = document.getElementById('rol');
function addRoles(roles)
{
  rolSelect.innerHTML += '<option value="" disabled selected>Selecciona un rol</option>'

  roles.result.forEach((rol) => {
      let option = document.createElement("option");
      option.value = rol.id;
      option.text = rol.description;
      rolSelect.appendChild(option);
  });
}

const positionSelect = document.getElementById('position');
function addPositions(positions)
{
  positionSelect.innerHTML += '<option value="" disabled selected>Selecciona una posicion</option>'

  positions.forEach((position) => {
      let option = document.createElement("option");
      option.value = position.positionId;
      option.text = position.description;
      positionSelect.appendChild(option);
  });
}

const deparmenteSelect = document.getElementById('department');
function addDepartment(deparment)
{
  deparmenteSelect.innerHTML += '<option value="" disabled selected>Selecciona departamento</option>'

  deparment.forEach((dep) => {
    let option = document.createElement("option");
    option.value = dep.departmentId;
    option.text = dep.name;
    deparmenteSelect.appendChild(option);
  });
}
const superiorSelect = document.getElementById('superior');
function addSuperior(superiors)
{
  superiorSelect.innerHTML += `<option value="" disabled selected>Selecciona superior</option>
  <option value="-1">Sin superior</option>`

  superiors.forEach((sup) => {
    let option = document.createElement("option");
    option.value = sup.id
    option.text = `${sup.firsName} ${sup.lastName}`;
    superiorSelect.appendChild(option);
  });
}

const lastName = document.getElementById("lastName");
const firstName = document.getElementById("firstName");
const email= document.getElementById("email");
const password = document.getElementById("password");

function validarForm(){

  inputs.forEach(input => {
    validarFormulario(input);
  });

  return checkCampos();
}

function createUserRequest()
{
  let user = 
  {
    email: email.value,
    password: password.value,
    idRol: rolSelect.value,
    firsName: firstName.value,
    lastName: lastName.value,
    departmentId: deparmenteSelect.value,
    positionId: positionSelect.value,
    superiorId: superiorSelect.value === -1? null : superiorSelect.value
  };
  return user;
}

const inputs=[...document.querySelectorAll(".form_input")]; 

const campos={
  firstName:false,
  lastName:false,
  email:false,
  password:false,
  position:false,
  rol:false,
  department:false
}

const checkCampos=()=>{
  return campos.firstName && campos.lastName && campos.email && campos.password && campos.position && campos.rol  && campos.department
};

const addInputValidation=()=>{

  inputs.forEach(input => {
    input.addEventListener(`keyup`,()=>validarFormulario(input));
    input.addEventListener(`blur`,()=>validarFormulario(input));    
  });
}

function loadSuperiors(){

  if (positionSelect.value !== '' && deparmenteSelect.value !== '') {

    superiorSelect.removeAttribute('disabled');
    superiorSelect.innerHTML = "";
    return {position:positionSelect.value,department:deparmenteSelect.value};
  } else {
    
    superiorSelect.setAttribute('disabled', 'disabled');
    return null;
  }
}

const validarFormulario=(input)=>{
    
  switch (input) {
      case firstName:
        campos.firstName = validarCampo(firstName);
        break;
      case lastName:
        campos.lastName = validarCampo(lastName);
        break;
      case email:
        campos.email = validarCampo(email);
        break;
      case password:
        campos.password = validarCampo(password);
        break;
      case rol:
        campos.rol = validarCampo(rol);
        break;
      case department:
        campos.department = validarCampo(department);
        break;
      case position:
        campos.position = validarCampo(position);
        break;
      default:
          break;
  }

}

const validarCampo=(input)=>{

  if (input.value==="" || (input.value.length > 50) ) {
    valueWrong(input);
    return false;
  }else{
    valueRight(input);
    return true;
  }
}

const valueWrong =(input)=>{
  const padre = input.parentElement;
  padre.className="form_grupo-incorrecto";
}

const valueRight =(input)=>{
  const padre = input.parentElement;
  padre.classList.remove("form_grupo-incorrecto");
}

const managementView = {
  addRoles,
  addPositions,
  addDepartment,
  createUserRequest,
  render,
  validarForm,
  addInputValidation,
  loadSuperiors,
  addSuperior
};

export default managementView;