import ReportTemplateRepository from "../Repository/reportTemplateRepository.js";

async function getData(result)
{
    if (result != null || result.ok)
        return await result.json();
    else
    {
        const errorResponse = await result.json();
        alert(errorResponse.message);
        return null;
        // Que hacemos con 
        // 400
        // 401
        // 404 
        // 409
        // 422
        // 500
    }
}

async function getFieldTemplates(id)
{
    let result = await ReportTemplateRepository.getFieldTemplates(id);
    return getData(result);
};

async function getReportTemplates()
{
    let result = await ReportTemplateRepository.getReportTemplates();
    return getData(result);
}

const ReportTemplateService = {
    getFieldTemplates: getFieldTemplates,
    getReportTemplates: getReportTemplates
}

export default ReportTemplateService;