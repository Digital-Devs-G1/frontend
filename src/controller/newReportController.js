import ReportTemplateRepository from "../Repository/ReportTemplateRepository.js";
import renderFieldsGrid from "../component/fieldsGridComponent.js";

let container = document.getElementById('fieldsGrid');
container.innerHTML += renderFieldsGrid(
    /*ReportTemplateRepository.getFieldTemplates(5)*/
    [
        {
            fieldTemplateId: 5,
            name: "Entero",
            dataTypeId: 1
        },
        {
            fieldTemplateId: 5,
            name: "Texto",
            dataTypeId: 2
        },
        {
            fieldTemplateId: 5,
            name: "Fecha",
            dataTypeId: 3
        },
        {
            fieldTemplateId: 5,
            name: "Booleano",
            dataTypeId: 4
        },
        {
            fieldTemplateId: 5,
            name: "Decimal",
            dataTypeId: 5
        }
    ]
);
const checkboxes = document.querySelectorAll('.btn-check');
checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        const label = this.nextElementSibling; 
        const labelText = label.innerText;
        if (labelText.endsWith(" On")) {
            label.innerText = labelText.replace(" On", " Off");
        } else if (labelText.endsWith(" Off")) {
            label.innerText = labelText.replace(" Off", " On");
        }
    });
});
const decInputs = document.querySelectorAll('input[type="number"][data-type="1"]');
decInputs.forEach(input => {
    input.addEventListener('input', function() {
        this.value = this.value.replace(/[.]+/g, '');
    });
});

container = document.getElementById('templateSelect');
let data = [
    {
        reportTemplateId: 4,
        reportTemplateName: "Gastos varios"
    },
    {
        reportTemplateId: 5,
        reportTemplateName: "Materia prima"
    }
];
let result = "";
`${data.forEach((item,i) =>{
    result += `<option value="${i+1}">${item.reportTemplateName}</option >`
})}`;
container.innerHTML += result;


let button = document.getElementById('saveReport');
button.addEventListener('click', () => { 
    const inputFields = document.querySelectorAll('#fieldsGrid .form-control');
    inputFields.forEach(input => {
        input.value = ''; // Establecer el valor del campo de texto como una cadena vacía
    });
    alert("Reporte enviado con exito");
});