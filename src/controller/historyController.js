import HistoryView from "../view/history/historyView.js";
import AuthController from "./authController.js";
import ReportService from "../services/reportService.js";
import LoginOut from "./loginOutController.js";

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.historyMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
      selectedOption
    );
    let reports = await ReportService.getReports();
    HistoryView.render(headerMenuItems, reports);

    const button = document.getElementById("login-out-button");
    LoginOut.event(button);
    
    let container = document.querySelector("section.customCard");
    setButtonsEvent(container);
});

async function setButtonsEvent(container) 
{
    let detailButtons = container.querySelectorAll(".detailsButton");
    detailButtons.forEach(function (button) {
      button.addEventListener("click",async function () {

        let fields = await ReportService.getReportFields(button.getAttribute('item-id'))
        let modalDetail = document.getElementById("modalDetail")
        modalDetail.innerHTML = "";
        
        fields.forEach(field => {
          modalDetail.innerHTML += `<p><span>${field.label}: </span>${field.value}</p>`; 
        });

      });
    });
}