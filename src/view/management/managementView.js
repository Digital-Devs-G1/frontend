import GridFields from "../../component/gridFieldComponent.js";
import SelectOptions from "../../component/selectOptionsComponent.js";
import HeaderComponent from "../../component/headerComponent.js";

const abm = {
    usuario: [
        {
            name: "Email",
            id: "",
            dataTypeId: 2
        },
        {
            name: "Password",
            id: "",
            dataTypeId: 2
        },
        {
            name: "Nombre",
            id: "",
            dataTypeId: 2
        },
        {
            name: "Apellido",
            id: "",
            dataTypeId: 2
        },
        {
            name: "Es Aprobador",
            id: "",
            dataTypeId: 4
        }
    ],
    position: [
        {
            name: "Nombre",
            id: "",
            dataTypeId: 2
        },
        {
            name: "Jerarquia",
            id: "",
            dataTypeId: 2
        },
        {
            name: "Max. importe aprobacion",
            id: "",
            dataTypeId: 5
        }
    ],
    department: [
        {
            name: "Nombre",
            id: "",
            dataTypeId: 2
        }
    ],
    reportTemplate: [
        {
            name: "Nombre",
            id: "",
            dataTypeId: 2
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
    firstOption.setAttribute('selected', "");
    showFields(abm[fields[0]]);
    abmSelect.addEventListener('change', (event) => { 
        let option = event.target.options[event.target.selectedIndex].value;
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
    return values;   
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

const ManagementView = {
    render
};

export {
    ManagementView
};