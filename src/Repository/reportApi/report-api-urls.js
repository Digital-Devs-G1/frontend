const REPORT_API_HOST = "localhost";
const REPORT_API_PORT = "7295";

const PROTOCOL = "https";
const API_VERSION = "/api/v1";

const API_URL = `${PROTOCOL}://${REPORT_API_HOST}:${REPORT_API_PORT}${API_VERSION}`;

const generateURL = (endpoint) => {
  return `${API_URL}${endpoint}`;
};

class ReportUrlBuilder {
  base () { return generateURL("/Report") }
  byId (id) {return `${this.base()}/${id}` }
  fields (id) { return `${this.byId(id)}/VariableFields` }
  pendingApprovals() {return `${this.base()}/PendingApprovals`}
}

class ReportTemplateUrlBuilder {
  base () { return generateURL("/ReportTemplate") }
  byId (id) { return `${this.base()}/${id}` }
  fields (id) { return `${this.byId(id)}/ReportTemplateFields`}
}

class ReportTrackingUrlBuilder {
  base () { return generateURL("/ReportTracking") }
  byId (id) { return `${this.base()}/${id}` }
  accept (id) { return `${this.byId(id)}/Accept` }
  dismiss (id) { return `${this.byId(id)}/Dismiss`}
}

export {
  ReportUrlBuilder,
  ReportTemplateUrlBuilder,
  ReportTrackingUrlBuilder
};