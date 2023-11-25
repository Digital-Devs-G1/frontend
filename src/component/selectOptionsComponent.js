function getOptionHtml(item)
{
    return `<option value="${item.id}">${item.name}</option >`;
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