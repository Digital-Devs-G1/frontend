const PROTOCOL = "https";
const API_HOST = "localhost";
const COMPANY_API_PORT = "7296";
const API_VERSION = "/api";

const API_URL = `${PROTOCOL}://${API_HOST}:${COMPANY_API_PORT}${API_VERSION}`;

const generateURL = (endpoint) => {
  return `${API_URL}${endpoint}`;
};

class DepartmentUrlBuilder {
    department () { return generateURL("/Department") }
    getAll () { return `${this.department()}/GetAll` }  
    insert () { return `${this.department()}/Insert` }
    delete (id) { return `${this.department()}/Delete/${id}` }
}

class PositionUrlBuilder {
    position () { return generateURL("/Position") }
    getAll () { return `${this.position()}/GetAllPosition` }
    insert () { return `${this.position()}/Insert` }
    delete (id) { return `${this.position()}/Delete/${id}` }
}

class EmployeeUrlBuilder {
    employee () { return generateURL("/Employee") }
    getSuperiors (department,position) { 
        return `${this.employee()}/Superiors?department=${department}&position=${position}` 
    }
}

class CompanyUrlBuilder {
    company () { return generateURL("/Company") }
    byId (id) { return `${this.company()}/${id}` }
    getAll () { return `${this.company()}/GetAll` }
    insert () { return `${this.company()}/Insert` }
}

export {
    DepartmentUrlBuilder,
    PositionUrlBuilder,
    EmployeeUrlBuilder,
    CompanyUrlBuilder
};