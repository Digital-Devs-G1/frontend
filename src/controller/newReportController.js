import ReportTemplateService from "../services/reportTemplateService.js";
import NewReport from "../view/newReport.js";

document.addEventListener('DOMContentLoaded', async () => {
    let payload = await ReportTemplateService.getReportTemplates();
    NewReport.addTemplateOptions(payload);
});

templateSelect.addEventListener('change', async (event) => {
    let payload = await ReportTemplateService.getFieldTemplates(
        event.target.value
    );
    NewReport.showTemplateFields(payload);
});

let button = document.getElementById('saveReport');
button.addEventListener('click', () => { 
    NewReport.cleanFields();
    alert("Reporte enviado con exito");
});
