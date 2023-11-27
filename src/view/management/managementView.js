import GridFields from "../../component/gridFieldComponent.js";
import SelectOptions from "../../component/selectOptionsComponent.js";
import HeaderComponent from "../../component/headerComponent.js";

const abm = {
    usuario: [
        {
            label: "Email",
            value: "",
            dataType: 2
        },
        {
            label: "Password",
            value: "",
            dataType: 2
        },
        {
            label: "Nombre",
            value: "",
            dataType: 2
        },
        {
            label: "Apellido",
            value: "",
            dataType: 2
        },
        {
            label: "Es Aprobador",
            value: "",
            dataType: 4
        }
    ]   
}

function render(menuItems, fields) 
{
    let header = document.querySelector("header");
    HeaderComponent.render(menuItems, header);
    let abmSelect = document.getElementById('abmSelect');
    SelectOptions.render(getOptionValues(fields), abmSelect);
    let firstOption = abmSelect.querySelectorAll('option')[0];
    firstOption.setAttribute('selected');
    showFields(abm[fields[0]]);
    abmSelect.addEventListener('change', (event) => { 
        let option = event.target.SelectOptions()[0].value;
        showFields(abm[option]); 
    });
};

function getOptionValues(fields)
{
    let values = [];
    fields.forEach( field => {
        values.push({
            id:field,
            name:field
        });
    });
    
}

function showFields(payload)
{
    let grid = document.getElementById('fieldsGrid');
    GridFields.render(payload, grid);
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

{
    label: "Importe",
    value: report.amount,
    dataType: 5 
}

const NewReportView = {
    render,
    showFields,
    cleanFields,
};

export {
    contadorDeCampos,
    NewReportView
};