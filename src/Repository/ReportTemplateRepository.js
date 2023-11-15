import {HttpMethod, defaultOptions, safeFetch } from './safe-fetch.js'; 
import {ReportTemplate} from './report-api-urls.js';

async function getFieldTemplates(id)
{
    const url = new ReportTemplate().fields(id);
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function getReportTemplates()
{
    const url = new ReportTemplate().base();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

const ReportTemplateRepository = {
    getFieldTemplates,
    getReportTemplates
};

export default ReportTemplateRepository;