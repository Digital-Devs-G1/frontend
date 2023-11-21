import ReportRepository from "../Repository/reportApi/reportRepository.js";
import getData from "./simpleErrorManager.js";

async function getFieldTemplates(id)
{
    let result = await ReportRepository.getFieldTemplates(id);
    return getData(result);
};

async function getReportTemplates()
{
    let result = await ReportRepository.getReportTemplates();
    return getData(result);
}

async function getPendingApprovals()
{
    let result = await ReportRepository.getPendingApprovals();
    return getData(result);
}

async function addNewReport(newReport)
{
    let result = await ReportRepository.addNewReport(newReport);
    if (result.ok)
    {
        alert("Reporte registrado")
        result = true;
    } else
    {
        alert("No se pudo registrar el reporte");
        result = false;
    }
    return result;
}

async function getReports()
{
    let result = await ReportRepository.getReports();
    return getData(result);
}

const ReportService = {
    getPendingApprovals : getPendingApprovals,
    getReports : getReports,
    addNewReport : addNewReport,
    getFieldTemplates: getFieldTemplates,
    getReportTemplates: getReportTemplates
}

export default ReportService;