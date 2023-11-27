import ReportRepository from "../Repository/reportApi/reportRepository.js";
import {getData, booleanResponse} from "./simpleErrorManager.js";

async function dismiss(id)
{
    let result = await ReportRepository.dismiss(id);
    if (result.ok)
    {
        showAlert("Reporte rechazado","success") 
        result = true;
    } else
    {
        showAlert("error al rechazar","error") 
        result = false;
    }
    return booleanResponse(result);
};

async function accept(id)
{
    let result = await ReportRepository.accept(id);

    if (result.ok)
    {
        showAlert("Reporte aceptado","success") 
        result = true;
    } else
    {
        showAlert("error al aceptar","error") 
        result = false;
    }
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
        showAlert("Reporte registrado","success") 
        result = true;
    } else
    {
        showAlert("error al registrar","error") 
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
        showAlert("Template creado","success")
    } 
    else
    {
        showAlert("error al crear template","error")
        result = false;
    }

    return getData(result);
}

const showAlert = (message, icon) =>{

    Swal.fire({
        position: "top",
        icon: icon,
        title: message,
        showConfirmButton: false,
        timer: 1500
    });
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