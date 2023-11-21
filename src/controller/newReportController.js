import ReportService from "../services/reportService.js";
import NewReportView from "../view/newReport/newReportView.js";
import AuthController from "./authController.js";

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.newReportMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    NewReportView.render(headerMenuItems);

    let payload = await ReportService.getReportTemplates();
    NewReportView.addTemplateOptions(payload);

    let templateSelect = document.getElementById('templateSelect');
    templateSelect.addEventListener('change', showTemplateHandler);

    let button = document.getElementById('saveReport');
    button.addEventListener('click', async () => { 
        if(await saveReport())
            NewReportView.cleanFields();
    });
});

async function showTemplateHandler(event) {
    if(event.target.value === "-1")
        NewReportView.hideFields();
    else
    {
        let payload = await ReportService.getFieldTemplates(
            event.target.value
        );
        addFixedFields(payload);
        NewReportView.showTemplateFields(payload);
    }
}

function addFixedFields(payload) 
{
    payload.push({
        "name": "Importe",
        "value": "$0"
    });
    payload.push({
        "name": "Detalles",
        "value": "Breve descripcion"
    });
}

async function saveReport()
{
    var selectElement = document.getElementById("templateSelect");
    var selectedValue = selectElement.value;
    if(selectedValue == -1)
        return;
    const inputElements = document.querySelectorAll('#fieldsGrid .input-group');
    const fieldsArray = [];
    const length = inputElements.length;
    for (let i = 0; i < length - 2; i++) {
        const elem = inputElements[i];
        const name = elem.querySelector('span').textContent;
        const value = elem.querySelector('input').value;
        const fieldObject = {
            "name": name,
            "value": value
        };
        fieldsArray.push(fieldObject);
    }
    let newReport = {
        "templateId": selectElement.value,
        "report": {
          "description": inputElements[length-1].querySelector('input').value,
          "amount": inputElements[length-2].querySelector('input').value,
        },
        "fields":fieldsArray
    };
    return await ReportService.addNewReport(newReport);
}