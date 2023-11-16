import ReportTemplateService from "../services/reportTemplateService.js";
import NewReportView from "../view/newReport/newReportView.js";
import HeaderController from "./authController.js";
import AuthController from "./authController.js";

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.newReportMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    NewReportView.render(headerMenuItems);

    let payload = await ReportTemplateService.getReportTemplates();
    NewReportView.addTemplateOptions(payload);

    let templateSelect = document.getElementById('templateSelect');
    templateSelect.addEventListener('change', async (event) => {
        if(event.target.value === "-1")
            NewReportView.hideFields();
        else
        {
            let payload = await ReportTemplateService.getFieldTemplates(
                event.target.value
            );
            NewReportView.showTemplateFields(payload);
        }
    });

    let button = document.getElementById('saveReport');
    button.addEventListener('click', () => { 
        NewReportView.cleanFields();
        alert("Reporte enviado con exito");
    });

    HeaderController.renderComponent(0);
});