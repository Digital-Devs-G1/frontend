const renderFieldsGrid = (data) => 
{
  let result = "";
  `${data.forEach(item =>
  {
    let inputType = '';
    switch (item.dataTypeId)
    {
      case 1: inputType = 'number'; break;
      case 2: inputType = 'text'; break;
      case 3: inputType = 'date'; break;
      case 4: inputType = 'checkbox'; break;
      case 5: inputType = 'number'; break;
      default: inputType = 'text'; break;
    }
    if (inputType === 'checkbox')
      result += `
          <input type="checkbox" data-type="${item.dataTypeId}" class="btn-check" id="btncheck${item.id}" autocomplete="off">
          <label class="btn btn-outline-primary" for="btncheck${item.id}">${item.name} Off</label>`;
    else
      result += `
          <div class="input-group">
              <span class="input-group-text" id="basic-addon1">${item.name}</span>
              <input type="${inputType}" data-type="${item.dataTypeId}" class="form-control" placeholder="Value" aria-label="Value" aria-describedby="basic-addon1">
          </div>`;
  })}`;
  return result;
}
export default renderFieldsGrid;