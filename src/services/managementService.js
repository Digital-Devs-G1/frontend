import ManagementRepository from "../Repository/managementApi/managementRepository.js";
import LoginRepository from "../Repository/loginApi/loginRepository.js";
import {getData} from "./simpleErrorManager.js";

async function getRoles()
{
    let result = await LoginRepository.roles() ;
    return getData(result);
};

async function getPositions()
{
    let result = await ManagementRepository.getPostions();
    return getData(result);
};

async function getDepartments()
{
    let result = await ManagementRepository.getDeparments();
    return getData(result);
};

async function getSuperiors(deparment,position)
{
    let result = await ManagementRepository.getSuperiors(deparment,position);
    return getData(result);
};

async function insertUser(request)
{
    let result = await LoginRepository.register(request);

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
            icon: "error",
            title: "Error al crear usuario",
            showConfirmButton: false,
            timer: 1500
        });

    }
    return getData(result);
};

async function insertDepartment(request)
{
    let result = await ManagementRepository.createDepartment(request);

    if(result.status === 201){

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Departamento creado",
            showConfirmButton: false,
            timer: 1500
        });
    }else{
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Error al crear el departamento",
            showConfirmButton: false,
            timer: 1500
        });

    }
    return getData(result);
};

async function insertCompany(request)
{
    let result = await ManagementRepository.createCompany(request);

    if(result.status === 201){

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Compañia creada",
            showConfirmButton: false,
            timer: 1500
        });
    }else{
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Error al crear la compañia",
            showConfirmButton: false,
            timer: 1500
        });

    }
    return getData(result);
};

async function insertPosition(request)
{
    let result = await ManagementRepository.createPosition(request);

    if(result.status === 201){

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Posición creada",
            showConfirmButton: false,
            timer: 1500
        });
    }else{
        Swal.fire({
            position: "top",
            icon: "error",
            title: "Error al crear la posición",
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
    getSuperiors : getSuperiors,
    insertDepartment : insertDepartment,
    insertCompany : insertCompany,
    insertPosition : insertPosition
}

export default ManagementService;