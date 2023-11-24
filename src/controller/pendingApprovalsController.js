import PendingApprovalsView from "../view/pendingApprovals/pendingApprovalsView.js";
import AuthController from "./authController.js";
import ReportService from "../services/reportService.js";
import LoginOut from "./loginOutController.js";

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.pendingApprovalsMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    let reports = await ReportService.getPendingApprovals();
    PendingApprovalsView.render(headerMenuItems, reports);

    const button = document.getElementById("login-out-button");
    LoginOut.event(button);

    let container = document.querySelector("section.customCard");
    setButtonsEvent(container);
});

async function setButtonsEvent(container) 
{
    let handler = {
        details: async (id) => {
          
          let fields = await ReportService.getFieldTemplates(id)
          let dataModal = document.getElementById("dataModal")
          dataModal.innerText = `${JSON.stringify(fields)}`
        },
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
    let detailButtons = container.querySelectorAll("button.detailsButton");
    detailButtons.forEach(function (button) {
      button.addEventListener("click", async function () {
        handler.details(button.getAttribute('item-id'));
      });
    });
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