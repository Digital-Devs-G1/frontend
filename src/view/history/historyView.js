import HeaderComponent from "../../component/headerComponent.js";
import TableComponent from "../../component/tableComponent.js";

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
      name: "Estado",
      class: "",
    },
    {
      name: "Acciones",
      class: "text-center",
    },
  ];
}

function getMenuItems() 
{
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
        },
        {
          class : "",
          value : "Revision" 
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
        },
        {
          class : "",
          value : "Aprovado" 
        }
      ]
    },
  ];
}

function render(menuItems, buttons) 
{
    HeaderComponent.render(menuItems);
    TableComponent.render(
      document.querySelector("section.customCard"),
      getMenuHeader(),
      getMenuItems(),
      "historyButtons",
      buttons
    );
};

const HistoryView = {
  render : render
};

export default HistoryView;