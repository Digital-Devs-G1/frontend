import ReportTemplateRepository from "../Repository/reportApi/reportTemplateRepository.js";
import getData from "./simpleErrorManager.js";

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