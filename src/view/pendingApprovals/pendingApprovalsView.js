import TableComponent from "../../component/tableComponent.js";
import HeaderComponent from "../../component/headerComponent.js";

function getMenuHeader() {
  return [
    {
      name: "Fecha",
      class: "",
    },
    {
      name: "Descripcion",
      class: "",
    },
    {
      name: "Importe",
      class: "",
    },
    {
      name: "Acciones",
      class: "text-center",
    },
  ];
}

function getMenuItems() {
  return [
    {
      id: 1,
      columns: [
        {
          class : "customTableDate",
          value : "2023-10-25" 
        },
        {
          class : "",
          value : "Lorem ipsum dolor sit amet, consectetur adip" 
        },
        {
          class : "",
          value : "15000" 
        }
      ]
    },
    {
      id: 2,
      columns: [
        {
          class : "customTableDate",
          value : "2023-10-29" 
        },
        {
          class : "",
          value : "Lorem ipsum dolor sit amet, consectetur adip Lorem ipsum dolor sit amet, consectetur adip" 
        },
        {
          class : "",
          value : "7500" 
        }
      ]
    },
  ];
}

function render(menuItems, buttons) {
  HeaderComponent.render(menuItems);
  TableComponent.render(
    document.querySelector("section.customCard"),
    getMenuHeader(),
    getMenuItems(),
    "pendingApprovalsButtons",
    buttons
  );
}

const PendingApprovalsView = {
  render: render,
};

export default PendingApprovalsView;