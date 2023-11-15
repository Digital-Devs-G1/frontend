function getOptionHtml(item)
{
    return `<option value="${item.reportTemplateId}">${item.reportTemplateName}</option >`;
}

function render(data, container) 
{
    let result = "";
    `${data.forEach((item) =>
    {
        result += getOptionHtml(item);
    })}`;
    container.innerHTML += result;
}

const SelectOptions = {
    render : render
};

export default SelectOptions;