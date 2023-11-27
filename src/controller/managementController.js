import ManagementService from "../services/managementService.js";
import { ManagementView } from "../view/management/managementView.js";
import AuthController from "./authController.js";
import LoginOut from "./loginOutController.js";

const createButton = document.getElementById("save");

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.management;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );

    ManagementView.render(
        headerMenuItems, 
        AuthController.getManagementOptions()
    );

    const button = document.getElementById("login-out-button");
    LoginOut.event(button);


    // cuando esto cambieeee
    let abmSelect = document.getElementById('abmSelect');
    
    abmSelect.addEventListener('change', (event) => { 
        let option = event.target.options[event.target.selectedIndex].value;
        addValidations(option); 
    });


    // como hago las peticiones por cada formulario --> si se renderiza en la vista como ejecuto aca las peticiones :0

    /*
    let roles = await ManagementService.getRoles();
    let positions = await ManagementService.getPositions();
    let deparments = await ManagementService.getDepartments();
 
    // lo envia a la view
    managementView.addPositions(positions);
    managementView.addRoles(roles);
    managementView.addDepartment(deparments);

    managementView.addInputValidation();

    let positionSelect = document.getElementById('position');
    let deparmenteSelect = document.getElementById('department');

    positionSelect.addEventListener('change',()=>{
        getSuperiors();
    });
    deparmenteSelect.addEventListener('change',()=>{
        getSuperiors();
    })*/
    createButton.addEventListener("click", function (event) {
        event.preventDefault();
        //crearUsuario();
        let request = createRequestBody();
        console.log(request);
    });
});
/*
function addValidations(option)
{
    switch (option) {
        case "usuario":
            userValidation();
            break;
        case 2:
        
            break;
        case 3:
        
            break;
        case 4:
        
            break;
    
        default:
            break;
    }
}

async function userValidation(){

    let fieldsGrid = document.getElementById('fieldsGrid');
    ManagementView.agregarSelectUser(fieldsGrid);


    let roles = await ManagementService.getRoles();
    let positions = await ManagementService.getPositions();
    let deparments = await ManagementService.getDepartments();
 
    ManagementView.addPositions(positions);
    ManagementView.addRoles(roles);
    ManagementView.addDepartment(deparments);

    ManagementView.addInputValidation();

    let positionSelect = document.getElementById('position');
    let deparmenteSelect = document.getElementById('department');

    positionSelect.addEventListener('change',()=>{
        getSuperiors();
    });
    deparmenteSelect.addEventListener('change',()=>{
        getSuperiors();
    });
}
*/

const getSuperiors = async ()=>{
    let values = ManagementView.loadSuperiors();

    if(values !== null ){
    
        let deparment = values.department;
        let position = values.position;

        let superiors = await ManagementService.getSuperiors(deparment,position);

        ManagementView.addSuperior(superiors);
    }   
};

const crearUsuario = async ()=>{
    
    if(ManagementView.validarForm()){
    
        let request = ManagementView.createUserRequest();
        await ManagementService.insertUser(request);
    }        
};

function createRequestBody()
{
    const inputs = document.querySelectorAll('#fieldsGrid .input-group');
    let requestBody = {}
    const length = inputs.length;
    let withoutErrors = true;
    for (let i = 0; i < length - 1; i++) 
    {
        let input = inputs[i].querySelector('input');
        let value = validateField(input);   
        if(value)     
            requestBody[input.getAttribute("item-id")] = value;
        else
            withoutErrors = false;
    }
    requestBody["companyId"] = AuthController.getCompany();
    return (withoutErrors) ? requestBody : null;
}

function validateField(input)
{
    if(!input || !input.value)
    {
        ManagementView.valueWrong(input);
        return null;
    }
    let value;
    switch(input.getAttribute('data-type'))
    {
        case "1": value = validateNumber(input);    break;
        case "2": value = validateText(input);      break;
        case "3": value = input.value;              break;
        case "4": value = validateCheckbox(input);  break;
        case "5": value = validateNumber(input);    break;
        default:  value = validateText(input);      break;
    }
    if(value)
        ManagementView.valueRight(input);
    return value;
}

function validateNumber(input)
{
    if(input.value > 0)
        return input.value;
    ManagementView.valueWrong(input);
    return null;
}

function validateText(input)
{
    if(input.value.length > 0 && input.value.length < 30)
        return input.value;
    ManagementView.valueWrong(input);
    return null;
}

function validateCheckbox(input)
{
    return input.value.checked.toString();
}

/*

{
    "email": "string",
    "password": "string",
    "idRol": 0,
    "firsName": "string",
    "lastName": "string",
    "departmentId": 0,
    "positionId": 0,
    "isApprover": true,
    "superiorId": 0
  }
  {
    "name": "string",
    "idCompany": 0
  }
  {
    "description": "string",
    "hierarchy": 0,
    "maxAmount": 0,
    "companyId": 0
  }

  */