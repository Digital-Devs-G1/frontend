import GridFields from "../../component/gridFieldComponent.js";
import SelectOptions from "../../component/selectOptionsComponent.js";
import HeaderComponent from "../../component/headerComponent.js";

const abm = {
    usuario: [
        {
            name: "Email",
            id: "email",
            dataTypeId: 2
        },
        {
            name: "Password",
            id: "password",
            dataTypeId: 2
        },
        {
            name: "Nombre",
            id: "firsName",
            dataTypeId: 2
        },
        {
            name: "Apellido",
            id: "lastName",
            dataTypeId: 2
        },
        {
            name: "Es Aprobador",
            id: "isApprover",
            dataTypeId: 4
        }
    ],
    position: [
        {
            name: "Nombre",
            id: "description",
            dataTypeId: 2
        },
        {
            name: "Jerarquia",
            id: "hierarchy",
            dataTypeId: 2
        },
        {
            name: "Max. importe aprobacion",
            id: "maxAmount",
            dataTypeId: 5
        }
    ],
    department: [
        {
            name: "Nombre",
            id: "name",
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


const valueWrong =(input)=>{
    const padre = input.parentElement;
    padre.className +=" form_grupo-incorrecto";
  }
  
  const valueRight =(input)=>{
    const padre = input.parentElement;
    padre.classList.remove("form_grupo-incorrecto");
  }

const ManagementView = {
    render,
    valueRight,
    valueWrong
};

export {
    ManagementView
};