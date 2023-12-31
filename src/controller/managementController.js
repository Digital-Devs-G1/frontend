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
    let abmSelect = document.getElementById('abmSelect');
    abmSelect.addEventListener('change', (event) => { 
        let option = event.target.options[event.target.selectedIndex].value;
        renderSelectedOption(option); 
    });
    createButton.addEventListener("click", function (event) {
        event.preventDefault();
        //crearUsuario();
        let option = abmSelect.options[abmSelect.selectedIndex].value;
        let request = createRequestBody(option);
        console.log(request);
        ManagementService.insertUser(request);
    });
});

function renderSelectedOption(option)
{
    switch (option) {
        case "usuario":
            renderUserExtraFields();
            break;
        case "reportTemplate":
            renderReportTemplate()
            break;
    }
}

async function renderReportTemplate()
{
    
}

async function renderUserExtraFields()
{
    let fieldsGrid = document.getElementById('fieldsGrid');
    let roles = await ManagementService.getRoles();
    let positions = await ManagementService.getPositions();
    let departments = await ManagementService.getDepartments();
    ManagementView.renderExtraUserFields(
        fieldsGrid,
        positions,
        roles,
        departments
    ); 
    //ManagementView.addInputValidation();
    document
        .getElementById('position')
        .addEventListener('change',()=>{
            addSuperiors();
        });
    document
        .getElementById('department')
        .addEventListener('change',()=>{
            addSuperiors();
        });
}

async function addSuperiors()
{
    let values = getPositionAndDepartment();

    if(values !== null )
    {    
        let deparment = values.department;
        let position = values.position;
        let superiors = await ManagementService.getSuperiors(deparment, position);
        ManagementView.addSuperior(superiors);
    }   
};

function getPositionAndDepartment()
{
    let deparmenteSelect = document.getElementById('department');
    let positionSelect = document.getElementById('position');
    let superiorSelect = document.getElementById('superior');
    let result;
    if (positionSelect.value !== '' && deparmenteSelect.value !== '') 
    {
        superiorSelect.removeAttribute('disabled');
        superiorSelect.innerHTML = "";
        result = {
            position: positionSelect.value,
            department: deparmenteSelect.value
        };
    } 
    else 
    {
      superiorSelect.setAttribute('disabled', 'disabled');
      result = null;
    }
    return result;
}

/*
const crearUsuario = async ()=>{
    
    if(ManagementView.validarForm()){
    
        let request = ManagementView.createUserRequest();
        await ManagementService.insertUser(request);
    }        
};
*/

function createRequestBody(abmName)
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
    addExtraDtoField(requestBody, abmName);
    return (withoutErrors) ? requestBody : null;
}

function addExtraDtoField(requestBody, abmName)
{
    switch (abmName) {
        case "usuario":
            addExtraUserDtoFields(requestBody);
            break;
        case "reportTemplate":
            addExtraReportTemplateDtoFields(requestBody)
            break;
    }
}

function addExtraUserDtoFields(requestBody)
{
    let deparmentSelect = document.getElementById('department');
    let positionSelect = document.getElementById('position');
    let superiorSelect = document.getElementById('superior');
    let roleSelect = document.getElementById('rol');
    let option = deparmentSelect.options[deparmentSelect.selectedIndex].value;
    requestBody["departmentId"] = option;
    option = positionSelect.options[positionSelect.selectedIndex].value;
    requestBody["positionId"] = option;
    option = superiorSelect.options[superiorSelect.selectedIndex].value;
    requestBody["superiorId"] = (option==-1)?null:option;
    option = roleSelect.options[roleSelect.selectedIndex].value;
    requestBody["idRol"] = option;
    return requestBody;
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
        case "2": 
            if(input.getAttribute('item-id') == "email")
                value = validateEmail(input);
            else
                value = validateText(input);      
            break;
        case "3": value = input.value;              break;
        case "4": value = validateCheckbox(input);  break;
        case "5": value = validateNumber(input);    break;
        default:  value = validateText(input);      break;
    }
    if(value)
        ManagementView.valueRight(input);
    return value;
}

function validateEmail(input)
{
    const regularExpression = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(regularExpression.test(input.value))
        return input.value;
    ManagementView.valueWrong(input);
    return null;
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