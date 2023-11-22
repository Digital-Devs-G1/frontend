import managementRepository from "../Repository/managementApi/managementRepository.js";
import getData from "./simpleErrorManager.js";

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

async function insertUser(request)
{
    let result = await managementRepository.register(request);
    return getData(result);
};

const ManagementService = {
    getRoles: getRoles,
    getPositions: getPositions,
    getDepartments: getDepartments,
    insertUser: insertUser
}

export default ManagementService;