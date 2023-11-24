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

function getTableRows(reports) 
{
  let items = [];
  console.log(reports);
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
          name: "Detalles",
          class: "detailsButton",
          modal:`data-bs-toggle="modal" data-bs-target="#detail"`
        },
        {
            name: "Aprovar",
            class: "approveButton",
        },
        {
            name: "Rechazar",
            class: "dismissButton",
        },
    ];
}

function render(menuItems, reports) 
{
  let header = document.querySelector("header");
  HeaderComponent.render(menuItems, header);
  TableComponent.render(
    document.querySelector("section.customCard"),
    getMenuHeader(),
    getTableRows(reports),
    "pendingApprovalsButtons",
    getButtons()
  );
}

const PendingApprovalsView = {
  render: render,
};

export default PendingApprovalsView;
