const newReportMenuIndex = 0;
const historyMenuIndex = 1;
const pendingApprovalsMenuIndex = 2;
const management = 3;


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
        },
        {
            name: "Administracion",
            href: "../management/management.html"
        }
    ];
    menuOptions[selectedMenuOption]["selected"] = true;
    return menuOptions;
}

const AuthController = {
    pendingApprovalsMenuIndex : pendingApprovalsMenuIndex,
    newReportMenuIndex : newReportMenuIndex,
    historyMenuIndex : historyMenuIndex,
    management: management,
    headerMenuOptions : headerMenuOptions
}

export default AuthController;