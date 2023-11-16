import GridFields from "../../component/gridFieldComponent.js";
import SelectOptions from "../../component/selectOptionsComponent.js";
import HeaderComponent from "../../component/headerComponent.js";

function render(menuItems) 
{
    HeaderComponent.render(menuItems);
};

function addTemplateOptions(payload)
{
    let templateSelect = document.getElementById('templateSelect');
    SelectOptions.render(payload, templateSelect);
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
    const inputFields = document.getElementById('fieldsGrid');
    inputFields.forEach(input => {
        input.value = '';
    });
}

const NewReportView = {
    render,
    addTemplateOptions,
    showTemplateFields,
    cleanFields,
    hideFields
};

export default NewReportView;