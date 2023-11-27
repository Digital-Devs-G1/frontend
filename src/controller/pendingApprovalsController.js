import PendingApprovalsView from "../view/pendingApprovals/pendingApprovalsView.js";
import AuthController from "./authController.js";
import ReportService from "../services/reportService.js";
import LoginOut from "./loginOutController.js";

const CONSTANTS = {
  smallWindow : 450,
  mediumWindow : 850,
}

const Status = {
  pendingApprovals : [],
  headerMenuItems : [],
  withDescription : false,
  withAmount : false,
  withDate : false,
}

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.pendingApprovalsMenuIndex;
    Status.headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    Status.pendingApprovals = await ReportService.getPendingApprovals();
    PendingApprovalsView.render(
      Status.headerMenuItems, 
      Status.pendingApprovals, 
      getReportFields
    );

    const button = document.getElementById("login-out-button");
    LoginOut.event(button);

    let container = document.querySelector("section.customCard");
    setButtonsEvent(container);

    window.addEventListener('resize', responsiveDetailsHandler);
});

function responsiveDetailsHandler() 
{
  var anchoVentana = window.innerWidth;
  let windowSize = 3;
  if (anchoVentana < CONSTANTS.smallWindow) 
  {
    Status.withAmount = true;
    windowSize = 1
  }
  else if (anchoVentana < CONSTANTS.mediumWindow)
  {
    Status.withAmount = false;
    Status.withDescription = true;
    windowSize = 2;
  }
  else
    Status.withAmount = Status.withDescription = false;
  PendingApprovalsView.render(
    Status.headerMenuItems, 
    Status.pendingApprovals, 
    getReportFields,
    windowSize
  );
}

async function getReportFields(reportId)
{
    let fields = await ReportService.getReportFields(reportId);
    let report = Status.pendingApprovals.filter( 
      report => report.reportId == reportId 
    )[0];
    //if(report.length === 0)
    if(Status.withAmount)
      fields.push({
        label: "Importe",
        value: report.amount,
        dataType: 5 
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

async function setButtonsEvent(container) 
{
    let handler = {
        approve: async (id) => {
          if (await ReportService.accept(id)) {
            let row = container.querySelector(`tr[tr-id="${id}"]`);
            if (row)
              row.remove();
          }
        },        
        dismiss: async (id) => {
          if (await ReportService.dismiss(id)) {
            let row = container.querySelector(`tr[tr-id="${id}"]`);
            if (row)
              row.remove();
          }
        }
    };
    let approveButtons = container.querySelectorAll(".approveButton");
    approveButtons.forEach(function (button) {
      button.addEventListener("click", async function () {
        handler.approve(button.getAttribute('item-id'));
      });
    });
    let dismissButtons = container.querySelectorAll(".dismissButton");
    dismissButtons.forEach(function (button) {
      button.addEventListener("click", async function () {
        handler.dismiss(button.getAttribute('item-id'));
      });
    });
}