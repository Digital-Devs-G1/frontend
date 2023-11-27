import ReportService from "../services/reportService.js";
import {NewReportView,contadorDeCampos} from "../view/newReport/newReportView.js";
import AuthController from "./authController.js";
import LoginOut from "./loginOutController.js";

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.newReportMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    NewReportView.render(headerMenuItems);

    const element = document.getElementById("login-out-button");
    LoginOut.event(element);

    let payload = await ReportService.getReportTemplates();
    NewReportView.addTemplateOptions(payload);

    let templateSelect = document.getElementById('templateSelect');
    templateSelect.addEventListener('change', showTemplateHandler);

    let button = document.getElementById('saveReport');
    button.addEventListener('click', async () => { 
        if(await saveReport())
            NewReportView.cleanFields();
    });

    //modal

    let btnAddField = document.getElementById("btnAddField");
    NewReportView.addDataTypeOptions();
    btnAddField.addEventListener('click',()=>{
        event.preventDefault();
        NewReportView.addField()
    })

    document.getElementById("modalClose").addEventListener('click',()=>{
        NewReportView.cleanModal()
    })

    let createReport = document.getElementById('insertReport');
    createReport.addEventListener('click', async () => { 
       await createTemplate();
    });
});

async function showTemplateHandler(event) {
    if(event.target.value === "-1")
        NewReportView.hideFields();
    else if(event.target.value === "-2")
    {
        let modal = document.getElementById('createReport'); 
        let createReportModal = new bootstrap.Modal(modal);
        createReportModal.show();
    }
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


async function createTemplate()
{
    let inputNameTemplate = document.getElementById('inputNameTemplate');

    let length = contadorDeCampos;
    console.log(length);
    const fieldsArray = [];
    
    for (let i = 1; i < length+1; i++) {
        
        let id = `dataTypeField${i}`;
        let inputDataType = document.getElementById(id);

        let inputName = document.getElementById(`nameField${i}`);

        let field = {
            "name": inputName.value,
            "dataTypeId": inputDataType.value
        };
        fieldsArray.push(field);
    }

    let newTemplate = {
        "reportTemplateName": inputNameTemplate.value,
        "fieldTemplates":fieldsArray
    };
    
    let template = await ReportService.createTemplate(newTemplate);
    let option = [template];
    NewReportView.addTemplateOptions(option);
}