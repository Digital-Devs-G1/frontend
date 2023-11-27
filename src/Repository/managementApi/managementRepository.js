import {HttpMethod, defaultOptions, safeFetch } from '../safe-fetch.js'; 
import {DepartmentUrlBuilder,PositionUrlBuilder,EmployeeUrlBuilder, CompanyUrlBuilder} from './company-api-urls.js';


// --- Employee ---
async function getSuperiors(deparment,position)
{
    const url = new EmployeeUrlBuilder().getSuperiors(deparment,position);
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

// --- Position ---
async function getPostions()
{
    const url = new PositionUrlBuilder().getAll();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function createPosition(position)
{
    const url = new PositionUrlBuilder().insert();
    const options = defaultOptions(HttpMethod.post, position);
    return await safeFetch(url, options);
}

async function deletePosition(id)
{
    const url = new PositionUrlBuilder().delete(id);
    const options = defaultOptions(HttpMethod.delete);
    return await safeFetch(url, options);
}


// --- Company ---
async function getCompanys()
{
    const url = new CompanyUrlBuilder().getAll();
    const options = defaultOptions(HttpMethod.get);
    return await safeFetch(url, options);
}

async function createCompany(company)
{
    const url = new CompanyUrlBuilder().insert();
    const options = defaultOptions(HttpMethod.post, company);
    return await safeFetch(url, options);
}

// --- Departement ---
async function getDeparments()
{
    const url = new DepartmentUrlBuilder().getAll();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function createDepartment(department)
{
    const url = new DepartmentUrlBuilder().insert();
    const options = defaultOptions(HttpMethod.post, department);
    return await safeFetch(url, options);
}

async function deleteDepartment(id)
{
    const url = new DepartmentUrlBuilder().delete(id);
    const options = defaultOptions(HttpMethod.delete);
    return await safeFetch(url, options);
}


const ManagementRepository = {
    getDeparments,
    getPostions,
    getSuperiors,
    getCompanys,
    createPosition,
    createDepartment,
    createCompany,
    deleteDepartment,
    deletePosition
};

export default ManagementRepository;