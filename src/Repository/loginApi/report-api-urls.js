const REPORT_API_HOST = "localhost";
const REPORT_API_PORT = "7146";

const PROTOCOL = "https";
const API_VERSION = "/api/v1";

const API_URL = `${PROTOCOL}://${REPORT_API_HOST}:${REPORT_API_PORT}${API_VERSION}`;

const generateURL = (endpoint) => {
  return `${API_URL}${endpoint}`;
};

//class ReportApiUrl {
class LoginUrlBuilder {
  base () { return generateURL("/Login") }
  login () { return `${this.base()}/Login` }
}

export {
  LoginUrlBuilder
};