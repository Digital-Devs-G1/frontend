import HistoryView from "../view/history/historyView.js";
import AuthController from "./authController.js";

document.addEventListener('DOMContentLoaded', async () => 
{
    let selectedOption = AuthController.historyMenuIndex;
    let headerMenuItems = AuthController.headerMenuOptions(
        selectedOption
    );
    HistoryView.render(headerMenuItems);
    let container = document.querySelector("section.customCard");
    setButtonsEvent(container);
});

function setButtonsEvent(container) 
{
    let detailButtons = container.querySelectorAll(".detailsButton");
    detailButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        alert(`details of ${button.getAttribute('item-id')}`)
      });
    });
}