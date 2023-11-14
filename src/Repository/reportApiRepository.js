const REPORT_API_HOST = "localhost";
const REPORT_API_PORT = "7295";

const PROTOCOL = "https";
const API_VERSION = "/api/v1";

const API_URL = `${PROTOCOL}://${REPORT_API_HOST}:${REPORT_API_PORT}${API_VERSION}`;

const generateURL = (endpoint) => {
  return `${API_URL}${endpoint}`;
};

//class ReportApiUrl {
class Report {
  base () { return generateURL("/Report") }
  byId (id) {return `${base()}/${id}` }
  fields (id) { return `${byId(id)}/VariableFields` }
  pendingApprovals() {return `${base()}/PendingApprovals`}
}

class ReportTemplate {
  base () { return generateURL("/ReportTemplate") }
  byId (id) { return `${base()}/${id}` }
  fields (id) { `${ReportApiUrl.byId(id)}/ReportTemplateFields`}
}

class ReportTracking {
  base () { return generateURL("/ReportTracking") }
  byId (id) { return `${base()}/${id}` }
  accept (id) { return `${byId(id)}/Accept` }
  dismiss (id) { return `${ReportApiUrl.byId(id)}/Dismiss`}
}

export {
  Report,
  ReportTemplate,
  ReportTracking
};