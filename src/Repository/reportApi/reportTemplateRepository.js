import {HttpMethod, defaultOptions, safeFetch } from '../safe-fetch.js'; 
import {ReportTemplateUrlBuilder} from './report-api-urls.js';

async function getFieldTemplates(id)
{
    const url = new ReportTemplateUrlBuilder().fields(id);
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function getReportTemplates()
{
    const url = new ReportTemplateUrlBuilder().base();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

const ReportTemplateRepository = {
    getFieldTemplates,
    getReportTemplates
};

export default ReportTemplateRepository;