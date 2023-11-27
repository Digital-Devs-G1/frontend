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


const getSuperiors = async ()=>{
    let values = managementView.loadSuperiors();

    console.log(values)
    if(values !== null ){
    
        let deparment = values.department;
        let position = values.position;

        let superiors = await ManagementService.getSuperiors(deparment,position);

        managementView.addSuperior(superiors);
    }   
};

const crearUsuario = async ()=>{
    
    if(managementView.validarForm()){
    
        let request = managementView.createUserRequest();
        await ManagementService.insertUser(request);
    }        
};