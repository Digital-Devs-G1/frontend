import PendingApprovalsView from "../view/pendingApprovals/pendingApprovalsView.js";
import AuthController from "./authController.js";
import ReportService from "../services/reportService.js";

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.pendingApprovalsMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    let reports = await ReportService.getReports();
    PendingApprovalsView.render(headerMenuItems, reports);
    let container = document.querySelector("section.customCard");
    setButtonsEvent(container);
});

function setButtonsEvent(container) 
{
    let handler = {
        details: (id) => {alert(`details of ${id}`)},
        approve: (id) => {alert(`approve ${id}`)},
        dismiss: (id) => {alert(`dismiss ${id}`)}
    };
    let detailButtons = container.querySelectorAll(".detailsButton");
    detailButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        handler.details(button.getAttribute('item-id'));
      });
    });
    let approveButtons = container.querySelectorAll(".approveButton");
    approveButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        handler.approve(button.getAttribute('item-id'));
      });
    });
    let dismissButtons = container.querySelectorAll(".dismissButton");
    dismissButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        handler.dismiss(button.getAttribute('item-id'));
      });
    });
}