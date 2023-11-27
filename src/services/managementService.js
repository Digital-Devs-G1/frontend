import managementRepository from "../Repository/managementApi/managementRepository.js";
import {getData} from "./simpleErrorManager.js";

async function getRoles()
{
    let result = await managementRepository.getRoles() ;
    return getData(result);
};

async function getPositions()
{
    let result = await managementRepository.getPostions();
    return getData(result);
};

async function getDepartments()
{
    let result = await managementRepository.getDeparments();
    return getData(result);
};

async function getSuperiors(deparment,position)
{
    let result = await managementRepository.getSuperiors(deparment,position);
    return getData(result);
};

async function insertUser(request)
{
    let result = await managementRepository.register(request);

    if(result.status === 201){

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Usuario creado",
            showConfirmButton: false,
            timer: 1500
        });
    }else{

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Error al crear usuario",
            showConfirmButton: false,
            timer: 1500
        });

    }
    return getData(result);
};

const ManagementService = {
    getRoles: getRoles,
    getPositions: getPositions,
    getDepartments: getDepartments,
    insertUser: insertUser,
    getSuperiors : getSuperiors
}

export default ManagementService;