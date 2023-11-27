import ReportRepository from "../Repository/reportApi/reportRepository.js";
import {getData, booleanResponse} from "./simpleErrorManager.js";

async function dismiss(id)
{
    let result = await ReportRepository.dismiss(id);
    return booleanResponse(result);
};

async function accept(id)
{
    let result = await ReportRepository.accept(id);
    return booleanResponse(result);
};

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

async function getReportFields(id)
{
    let result = await ReportRepository.getReportFields(id);
    return getData(result);
}


async function addNewReport(newReport)
{
    let result = await ReportRepository.addNewReport(newReport);
    if (result.ok)
    {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Reporte registrado",
            showConfirmButton: false,
            timer: 1500
        });
        
        result = true;
    } else
    {
        Swal.fire({
            position: "top",
            icon: "error",
            title: "error al registrar",
            showConfirmButton: false,
            timer: 1500
        });
        result = false;
    }
    return result;
}

async function getReports()
{
    let result = await ReportRepository.getReports();
    return getData(result);
}

async function createTemplate(template){

    let result = await ReportRepository.createTemplate(template);

    if(result.status === 201){

        Swal.fire({
            position: "top",
            icon: "success",
            title: "Template creado",
            showConfirmButton: false,
            timer: 1500
        });
    }

    return getData(result);
}

const ReportService = {
    dismiss : dismiss,
    accept : accept,
    getPendingApprovals : getPendingApprovals,
    getReports : getReports,
    addNewReport : addNewReport,
    getFieldTemplates: getFieldTemplates,
    getReportTemplates: getReportTemplates,
    getReportFields:getReportFields,
    createTemplate:createTemplate
}

export default ReportService;