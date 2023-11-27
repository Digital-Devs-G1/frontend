import HistoryView from "../view/history/historyView.js";
import AuthController from "./authController.js";
import ReportService from "../services/reportService.js";
import LoginOut from "./loginOutController.js";

const CONSTANTS = {
  verySmallWindow : 450,
  smallWindow : 650,
  mediumWindow : 850,
}

const Status = {
  reports : [],
  headerMenuItems : [],
  withDescription : false,
  withAmount : false,
  withDate : false,
  withState : false
}

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.historyMenuIndex;
    Status.headerMenuItems = AuthController.headerMenuOptions(
      selectedOption
    );
    Status.reports = await ReportService.getReports();
    HistoryView.render(
      Status.headerMenuItems, 
      Status.reports, 
      getReportFields
    );

    const button = document.getElementById("login-out-button");
    LoginOut.event(button);

    window.addEventListener('resize', responsiveDetailsHandler);
});

function responsiveDetailsHandler() 
{
  var anchoVentana = window.innerWidth;
  let windowSize = 4;
  if (anchoVentana < CONSTANTS.verySmallWindow) 
  {
    Status.withAmount = true;
    windowSize = 1
  }
  else if (anchoVentana < CONSTANTS.smallWindow) 
  {
    Status.withAmount = false;
    Status.withState = true;
    windowSize = 2
  }
  else if (anchoVentana < CONSTANTS.mediumWindow)
  {
    Status.withAmount = false;
    Status.withState = false;
    Status.withDescription = true;
    windowSize = 3;
  }
  else
  {
    Status.withAmount = Status.withState = false;
    Status.withDescription = false;
  }
  HistoryView.render(
    Status.headerMenuItems, 
    Status.reports, 
    getReportFields,
    windowSize
  );
}

async function getReportFields(reportId)
{
    let fields = await ReportService.getReportFields(reportId);
    let report = Status.reports.filter( 
      report => report.reportId == reportId 
    )[0];
    //if(report.length === 0)
    if(Status.withAmount)
      fields.push({
        label: "Importe",
        value: report.amount,
        dataType: 5 
      });
    if(Status.withState)
      fields.push({
        label: "Estado",
        value: report.status,
        dataType: 2
      });
    if(Status.withDescription)
      fields.push({
        label: "Descripcion",
        value: report.description,
        dataType: 2
      });
    if(Status.withDate)
      fields.push({
        label: "Fecha",
        value: report.dateTracking,
        dataType: 3
      });
    return fields;
}