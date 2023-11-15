import GridFields from "../component/gridFieldComponent.js";
import SelectOptions from "../component/selectOptionsComponent.js";

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

function cleanFields()
{
    const inputFields = document.querySelectorAll('#fieldsGrid .form-control');
    inputFields.forEach(input => {
        input.value = '';
    });
}

const NewReport = {
    addTemplateOptions,
    showTemplateFields,
    cleanFields
};

export default NewReport;