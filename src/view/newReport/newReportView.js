import GridFields from "../../component/gridFieldComponent.js";
import SelectOptions from "../../component/selectOptionsComponent.js";
import HeaderComponent from "../../component/headerComponent.js";

function render(menuItems) 
{
    let header = document.querySelector("header");
    HeaderComponent.render(menuItems, header);
};

function addTemplateOptions(payload)
{
    let templateSelect = document.getElementById('templateSelect');

    let list = payload.map((item) =>{ 
        return {id:item.reportTemplateId,name:item.reportTemplateName}
    });

    SelectOptions.render(list, templateSelect);
}

function showTemplateFields(payload)
{
    let grid = document.getElementById('fieldsGrid');
    GridFields.render(payload, grid);
}

function hideFields()
{
    const inputFields = document.getElementById('fieldsGrid');
    inputFields.innerHTML = '';
}

function cleanFields()
{
    const inputFields = document
        .getElementById('fieldsGrid')
        .getElementsByTagName('input');
    for (let i = 0; i < inputFields.length; i++) {
        inputFields[i].value = '';
    }   
}

let lista = [{id:1, name:"Entero"},{id:2, name:"Texto"},{id:3, name:"Fecha"},{id:4, name:"Bool"},{id:5, name:"Decimal"}]
function addDataTypeOptions()
{
    // no hay ep para dataTypes
    let dataTypeSelect = document.getElementById('dataTypeField1');
    SelectOptions.render(lista, dataTypeSelect);
}

let contadorDeCampos = 1;

function addField()
{
    const templateFields = document.getElementById('templateFields');
    contadorDeCampos++;
    
    let selectId = `dataTypeField${contadorDeCampos}`;

    templateFields.innerHTML += `<div class="templateField">
                                    <label class="form-label">Nombre del campo</label>
                                    <input id="nameField${contadorDeCampos}" class="form_input input-modal form-control mb-2" type="text">
                                    <select id="${selectId}" class="dataTypeSelect form-select" aria-label="Default select example"></select>
                                </div>`

    
    let dataTypeSelect = document.getElementById(selectId); 
    SelectOptions.render(lista, dataTypeSelect);
}

function cleanModal(){
    contadorDeCampos = 1;
    document.getElementById('inputNameTemplate').value = '';
    const templateFields = document.getElementById('templateFields');
    templateFields.innerHTML = "";
    templateFields.innerHTML = `<div class="templateField">
    <label class="form-label">Nombre del campo</label>
    <input id="nameField1" class="form_input input-modal form-control mb-2" type="text">
    <select id="dataTypeField1" class="dataTypeSelect form-select" aria-label="Default select example"></select>
    </div>`;
    addDataTypeOptions();
}


const NewReportView = {
    render,
    addTemplateOptions,
    showTemplateFields,
    cleanFields,
    hideFields,
    addDataTypeOptions,
    addField,
    cleanModal,
    contadorDeCampos
};


export {
    contadorDeCampos,
    NewReportView
};