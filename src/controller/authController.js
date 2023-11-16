const newReportMenuIndex = 0;
const historyMenuIndex = 1;
const pendingApprovalsMenuIndex = 2;

function headerMenuOptions(selectedMenuOption) 
{
    let menuOptions = [
        {
            name: "Reportar Gasto",
            href: "../newReport/newReport.html"
        },
        {
            name: "Historial",
            href: "../history/history.html"
        },
        {
            name: "Aprobaciones Pendientes",
            href: "../pendingApprovals/pendingApprovals.html"
        }
    ];
    menuOptions[selectedMenuOption]["selected"] = true;
    return menuOptions;
}

const AuthController = {
    pendingApprovalsMenuIndex : pendingApprovalsMenuIndex,
    newReportMenuIndex : newReportMenuIndex,
    historyMenuIndex : historyMenuIndex,
    headerMenuOptions : headerMenuOptions
}

export default AuthController;