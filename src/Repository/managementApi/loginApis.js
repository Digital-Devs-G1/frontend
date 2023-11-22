const PROTOCOL = "https";
const API_HOST = "localhost";
const LOGIN_API_PORT = "7146";
const API_VERSION = "/api/v1";

const API_URL = `${PROTOCOL}://${API_HOST}:${LOGIN_API_PORT}${API_VERSION}`;

const generateURL = (endpoint) => {
  return `${API_URL}${endpoint}`;
};

class LoginUrlBuilder {
  base () { return generateURL("/Login") }
  login () { return `${this.base()}/Login` }
  register () { return `${this.base()}/Register` }
}

class rolUrlBuilder {
  base () { return generateURL("/Rol") }
  roles () { return `${this.base()}/GetAllRoles` }
}

export {
  LoginUrlBuilder,
  rolUrlBuilder
};