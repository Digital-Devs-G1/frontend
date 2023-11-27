import GridFields from "../../component/gridFieldComponent.js";
import SelectOptions from "../../component/selectOptionsComponent.js";
import HeaderComponent from "../../component/headerComponent.js";

const abm = {
    usuario: [
        {
            name: "Email",
            id: "email",
            dataTypeId: 2
        },
        {
            name: "Password",
            id: "password",
            dataTypeId: 2
        },
        {
            name: "Nombre",
            id: "firstName",
            dataTypeId: 2
        },
        {
            name: "Apellido",
            id: "lastName",
            dataTypeId: 2
        },
        {
            name: "Es Aprobador",
            id: "isApprover",
            dataTypeId: 4
        }
    ],
    position: [
        {
            name: "Nombre",
            id: "",
            dataTypeId: 2
        },
        {
            name: "Jerarquia",
            id: "",
            dataTypeId: 2
        },
        {
            name: "Max. importe aprobacion",
            id: "",
            dataTypeId: 5
        }
    ],
    department: [
        {
            name: "Nombre",
            id: "",
            dataTypeId: 2
        }
    ],
    reportTemplate: [
        {
            name: "Nombre",
            id: "",
            dataTypeId: 2
        }
    ]
}

function render(menuItems, fields) 
{
    let header = document.querySelector("header");
    HeaderComponent.render(menuItems, header);
    let abmSelect = document.getElementById('abmSelect');
    SelectOptions.render(getOptionValues(fields), abmSelect);
    let firstOption = abmSelect.querySelectorAll('option')[0];
    firstOption.setAttribute('selected', "");
    showFields(abm[fields[0]]);
    abmSelect.addEventListener('change', (event) => { 
        let option = event.target.options[event.target.selectedIndex].value;
        showFields(abm[option]);
    });
};

function getOptionValues(fields)
{
    let values = [];
    fields.forEach( field => {
        values.push({
            id:field,
            name:field
        });
    });
    return values;   
}

function showFields(payload)
{
    let grid = document.getElementById('fieldsGrid');
    GridFields.render(payload, grid);
}

function cleanFields()
{
    const inputFields = document
        .getElementById('fieldsGrid')
        .getElementsByTagName('input');
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = '';
    }   
}

// ----Crear usuario----

const agregarSelectUser=(container)=>{

    container.innerHTML += `<div class="">
    <select id="rol" class="form-select form_input" aria-label="Default select example">
    </select>
    <p class="form_input-error">el rol es requerido</p>
    </div>

    <div class="">
        <select id="department" class="form-select form_input" aria-label="Default select example">
        </select>
        <p class="form_input-error">el departamento es requerido</p>
    </div>

    <div class="">
        <select id="position" class="form-select form_input" aria-label="Default select example">
        </select>
        <p class="form_input-error">la posicion es requerida</p>
    </div>

    <div>
        <select id="superior" class="form-select" disabled aria-label="Default select example">
        </select>
    </div>`;
};


function addRoles(roles)
{
    const rolSelect = document.getElementById('rol');
    rolSelect.innerHTML += '<option value="" disabled selected>Selecciona un rol</option>'

    roles.result.forEach((rol) => {
        let option = document.createElement("option");
        option.value = rol.id;
        option.text = rol.description;
        rolSelect.appendChild(option);
    });
}

function addPositions(positions)
{
    const positionSelect = document.getElementById('position');
    positionSelect.innerHTML += '<option value="" disabled selected>Selecciona una posicion</option>'

    positions.forEach((position) => {
        let option = document.createElement("option");
        option.value = position.positionId;
        option.text = position.description;
        positionSelect.appendChild(option);
    });
}

function addDepartment(deparment)
{
    const deparmenteSelect = document.getElementById('department');
    deparmenteSelect.innerHTML += '<option value="" disabled selected>Selecciona departamento</option>'

    deparment.forEach((dep) => {
        let option = document.createElement("option");
        option.value = dep.departmentId;
        option.text = dep.name;
        deparmenteSelect.appendChild(option);
    });
}
function addSuperior(superiors)
{
    const superiorSelect = document.getElementById('superior');
    superiorSelect.innerHTML += `<option value="" disabled selected>Selecciona superior</option>
    <option value="-1">Sin superior</option>`

    superiors.forEach((sup) => {
        let option = document.createElement("option");
        option.value = sup.id
        option.text = `${sup.firsName} ${sup.lastName}`;
        superiorSelect.appendChild(option);
    });
}



function validarForm(){

    let inputs=[...document.querySelectorAll(".form_input")]; 
    inputs.forEach(input => {
      validarFormulario(input);
    });
  
    return checkCampos();
}
  
function createUserRequest()
{
    const lastName = document.getElementById("lastName");
    const firstName = document.getElementById("firstName");
    const email= document.getElementById("email");
    const password = document.getElementById("password");

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
    let inputs=[...document.querySelectorAll(".form_input")]; 
  
    inputs.forEach(input => {
      input.addEventListener(`keyup`,()=>validarFormulario(input));
      input.addEventListener(`blur`,()=>validarFormulario(input));    
    });
}
  
function loadSuperiors(){
    let deparmenteSelect = document.getElementById('department');
    let positionSelect = document.getElementById('position');
    let superiorSelect = document.getElementById('superior');


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


const ManagementView = {
    render,
    addRoles,
    addPositions,
    addDepartment,
    createUserRequest,
    validarForm,
    addInputValidation,
    loadSuperiors,
    addSuperior,
    agregarSelectUser
};

export {
    ManagementView
};