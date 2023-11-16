import PendingApprovalsView from "../view/pendingApprovals/pendingApprovalsView.js";
import AuthController from "./authController.js";

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.pendingApprovalsMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    let buttons = getButtons();
    PendingApprovalsView.render(headerMenuItems, buttons);
    let container = document.querySelector("section.customCard");
    setButtonsEvent(container);
});

function getButtons() 
{
    return [
        {
            name: "Details",
            class: "detailsButton",
        },
        {
            name: "Approve",
            class: "approveButton",
        },
        {
            name: "Dismiss",
            class: "dismissButton",
        },
    ];
}

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