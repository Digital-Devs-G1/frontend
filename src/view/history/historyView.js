import HeaderComponent from "../../component/headerComponent.js";
import TableComponent from "../../component/tableComponent.js";
import DetailController from "../../controller/detailController.js";

function getMenuHeader(windowSize) {
  let columns = []
  if(--windowSize >= 0)
    columns.push({
      name: "Fecha",
      class: "",
    });
  if(--windowSize >= 0)
    columns.push({
      name: "Importe",
      class: ""
    });
  if(--windowSize >= 0)
      columns.push({
        name: "Estado",
        class: "",
      });
  if(--windowSize >= 0)
    columns.push({
      name: "Descripcion",
      class: "",
    });
  columns.push({
    name: "Acciones",
    class: "text-center",
  });
  return columns;
}

function getTableRows(reports, windowSize) 
{
  let items = [];
  reports.forEach(report => {
    let windowSizeCopy = windowSize;
    let newIem = {
      id: report.reportId,
      columns: []
    }
    if(--windowSizeCopy >= 0)
      newIem.columns.push({
        class : "customTableDate",
        value : report.dateTracking 
      });
    if(--windowSizeCopy >= 0)
      newIem.columns.push({
        class : "",
        value : report.amount 
      });
    if(--windowSizeCopy >= 0)
      newIem.columns.push({
        class : "",
        value : report.status
      });
    if(--windowSizeCopy >= 0)
      newIem.columns.push({
        class : "",
        value : report.description
      });
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

function render(menuItems, reports, getReportFields, windowSize=4) 
{
    let header = document.querySelector("header");
    HeaderComponent.render(menuItems, header);
    let section = document.querySelector("section.customCard");
    let windowSizeCopy = windowSize;
    TableComponent.render(
      section,
      getMenuHeader(windowSize),
      getTableRows(reports, windowSizeCopy),
      "historyButtons",
      getButtons()
    );
    DetailController.initComponent(section, getReportFields)
};

const HistoryView = {
  render : render
};

export default HistoryView;