import {HttpMethod, defaultOptions, safeFetch } from '../safe-fetch.js'; 
import {ReportTemplateUrlBuilder, ReportTrackingUrlBuilder, ReportUrlBuilder} from './report-api-urls.js';

async function dismiss(id)
{
    const url = new ReportTrackingUrlBuilder().dismiss(id);
    const options = defaultOptions(HttpMethod.post); 
    return await safeFetch(url, options);
};

async function accept(id)
{
    const url = new ReportTrackingUrlBuilder().accept(id);
    const options = defaultOptions(HttpMethod.post); 
    return await safeFetch(url, options);
};

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

async function getReports()
{
    const url = new ReportUrlBuilder().base();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function getPendingApprovals()
{
    const url = new ReportUrlBuilder().pendingApprovals();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function addNewReport(newReport)
{
    const url = new ReportUrlBuilder().base();
    const options = defaultOptions(HttpMethod.post, newReport); 
    return await safeFetch(url, options);
};


async function createTemplate(template){
    const url = new ReportTemplateUrlBuilder().base();
    const options = defaultOptions(HttpMethod.post, template); 
    return await safeFetch(url, options);
}

async function getReportFields(id)
{
    const url = new ReportUrlBuilder().fields(id);
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

const ReportTemplateRepository = {
    dismiss,
    accept,
    getPendingApprovals,
    getFieldTemplates,
    getReportTemplates,
    addNewReport,
    getReports,
    getReportFields,
    createTemplate
};

export default ReportTemplateRepository;