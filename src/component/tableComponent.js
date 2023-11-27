function render(container, menuHeader, menuItems, buttonsClassName, buttons) {
  let result;
  if (! menuItems || menuItems.length == 0)
    result = `<h1 class="emptyList">No hay items para mostrar</h1>`;
  else
    result = `
      <table class="table customTable table-hover">
        <thead>
            <tr>
                ${menuHeader.map((column) => {
                    return `<th class="${column.class}" scope="col">${column.name}</th>`
                })
                .join("")}
            </tr>
        </thead>
        <tbody>
            ${menuItems
              .map((item) => {
                return `
                <tr tr-id="${item.id}">
                    ${item.columns.map((column) => {
                      return `<td class="${column.class}" scope="row">${column.value}</td>`
                    })
                    .join("")}
                    <td class="${buttonsClassName}">
                      ${buttons.map((button) => {
                          return `<button id="" ${button.modal&&button.modal} item-id="${item.id}" type="button" class="${button.class} btn customButton">
                              ${button.name}
                            </button>`
                      })
                      .join("")}
                    </td>
                </tr>`;
              })
              .join("")}
        </tbody>
      </table>
    `;
    container.innerHTML = result;
}

const TableComponent = {
  render: render,
};

export default TableComponent;
