import {HttpMethod, defaultOptions, safeFetch } from '../safe-fetch.js'; 
import {DepartmentUrlBuilder,PositionUrlBuilder,EmployeeUrlBuilder} from './companyApis.js';
import {LoginUrlBuilder,rolUrlBuilder} from './loginApis.js';

async function register(body)
{
    const url = new LoginUrlBuilder().register();
    const options = defaultOptions(HttpMethod.post,body); 
    return await safeFetch(url, options);
};

async function getRoles()
{
    const url = new rolUrlBuilder().roles();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function getDeparments()
{
    const url = new DepartmentUrlBuilder().getAll();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function getPostions()
{
    const url = new PositionUrlBuilder().getAll();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function getSuperiors(deparment,position)
{
    const url = new EmployeeUrlBuilder().getSuperiors(deparment,position);
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

const managementRepository = {
    register,
    getRoles,
    getDeparments,
    getPostions,
    getSuperiors
};

export default managementRepository;