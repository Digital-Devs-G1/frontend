import HeaderComponent from "../../component/headerComponent.js";
import TableComponent from "../../component/tableComponent.js";
import DetailController from "../../controller/detailController.js";

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

function getTableRows(reports) 
{
  let items = [];
  reports.forEach(report => {
    let newIem = {
      id: report.reportId,
      columns: [
        {
          class : "customTableDate",
          value : report.dateTracking 
        },
        {
          class : "",
          value : report.description
        },
        {
          class : "",
          value : report.amount 
        },
        {
          class : "",
          value : report.status
        }
      ]
    }
    items.push(newIem);
  });
  
  return items;
}

function getButtons() 
{
    return [
        { 
            name: "Details",
            class: "detailsButton",
            modal:`data-bs-toggle="modal" data-bs-target="#detailModal"`
        }
    ];
}

function render(menuItems, reports) 
{
    let header = document.querySelector("header");
    HeaderComponent.render(menuItems, header);
    let section = document.querySelector("section.customCard");
    TableComponent.render(
      section,
      getMenuHeader(),
      getTableRows(reports),
      "historyButtons",
      getButtons()
    );
    DetailController.initComponent(section)
};

const HistoryView = {
  render : render
};

export default HistoryView;