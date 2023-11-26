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
});