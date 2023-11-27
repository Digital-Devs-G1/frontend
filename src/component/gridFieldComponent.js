function getDataTypeName(dataTypeId)
{
  let inputType = '';
  switch (dataTypeId)
    {
      case 1: inputType = 'number'; break;
      case 2: inputType = 'text'; break;
      case 3: inputType = 'date'; break;
      case 4: inputType = 'checkbox'; break;
      case 5: inputType = 'number'; break;
      default: inputType = 'text'; break;
    }
    return inputType;
}

function getBooleanButtonHtml(item)
{
  return `
    <div class="input-group">
      <input item-id=${item.id} type="checkbox" data-type="${item.dataTypeId}" class="btn-check" id="btncheck${item.id}" autocomplete="off">
      <label class="input-group-text btn btn-outline-primary button-label-check" for="btncheck${item.id}" name="${item.name}">${item.name} Off</label>
    </div>`;
}

function getInputHtml(item, inputType)  
{
  return `
    <div class="input-group">
        <span class="input-group-text" id="basic-addon1">${item.name}</span>
        <input item-id=${item.id} type="${inputType}" data-type="${item.dataTypeId}" class="form-control" placeholder="Value" aria-label="Value" aria-describedby="basic-addon1">
        <p class="form_input-error">${item.name} was wrong</p>
    </div>`;
}

function render(data, container) 
{
  let result = "";
  let hasBooleanButton = false;
  let hasDecimalInput = false;
  `${data.forEach(item =>
  {
    let inputType = getDataTypeName(item.dataTypeId);
    hasDecimalInput |= item.dataTypeId == 5;
    if (inputType == 'checkbox')
    {
      result += getBooleanButtonHtml(item);
      hasBooleanButton = true;
    }
    else
      result += getInputHtml(item, inputType);
  })}`;
  container.innerHTML = result;
  if(hasBooleanButton)
    initBooleanButtons(container);
  if(hasDecimalInput)
    initDecimalInputs(container);
}

// De quien es la responsabilidad de setear estos eventos
// van en onclick y se setean aca ... los import quien los maneja
// se brinda el metodo y lo llama el controller
// se brinda el metodo y la vista lo llama y el controller llama a la vista
// Deberian estar en el mismo archivo que el component o en uno que se de animaciones
// Deberia ser el mismo de las animaciones que el de las validaciones
function initBooleanButtons(container)
{
  const checkboxes = container.querySelectorAll('.btn-check');
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
}

function initDecimalInputs(container)
{
  const decInputs = container.querySelectorAll('input[type="number"][data-type="1"]');
  decInputs.forEach(input => {
      input.addEventListener('input', function() {
          this.value = this.value.replace(/[.]+/g, '');
      });
  });
}

const GridFields = {
  render : render
}

export default GridFields;
