import ManagementService from "../services/managementService.js";
import { ManagementView } from "../view/management/managementView.js";
import AuthController from "./authController.js";

const formUser = document.getElementById("save");

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

    formUser.addEventListener("submit", function (event) {

        event.preventDefault();
        crearUsuario();
    });
});

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