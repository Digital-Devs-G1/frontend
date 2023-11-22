import ManagementService from "../services/managementService.js";
import managementView from "../view/management/management.js";
import AuthController from "./authController.js";


const formUser = document.getElementById("formUser");

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.newReportMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    managementView.render(headerMenuItems);

    let roles = await ManagementService.getRoles();
    let positions = await ManagementService.getPositions();
    let deparments = await ManagementService.getDepartments();
 
    // lo envia a la view
    managementView.addPositions(positions);
    managementView.addRoles(roles);
    managementView.addDepartment(deparments);

    managementView.addInputValidation();

    formUser.addEventListener("submit", function (event) {

        event.preventDefault();
        crearUsuario();
    });
});


const crearUsuario = async ()=>{
    console.log("bb")

    if(managementView.validarForm()){
        console.log("aaa")
        let request = managementView.createUserRequest();
        await ManagementService.insertUser(request);
    } else;{
        console.log("nop")

    }
};