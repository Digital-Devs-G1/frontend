const newReportMenuIndex = 0;
const historyMenuIndex = 1;
const pendingApprovalsMenuIndex = 2;
const management = 3;

function getManagementOptions()
{
    if(isAdmin())
        return ["usuario", "position", "department", "reportTemplate"];
    if(isSuperAdmin())
        return ["usuario", "company"]; 
    return [];
}

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
        }
    ];

    if(isApprover()){
        let optionView = {
            name: "Aprobaciones Pendientes",
            href: "../pendingApprovals/pendingApprovals.html"
        }
        menuOptions.push(optionView);
    }  

    if(isAdmin()){
        let optionView = {
            name: "Administracion",
            href: "../management/management.html"
        }
        menuOptions.push(optionView);
    }  

    menuOptions[selectedMenuOption]["selected"] = true;
    return menuOptions;
}

const isApprover = () =>{
    let data = JSON.parse(localStorage.getItem("data"));

    return data.isApprover === "True";
}

const isAdmin = () =>{
    let data = JSON.parse(localStorage.getItem("data"));

    return data.rol === "Admin";
}

const isSuperAdmin = () =>{
    let data = JSON.parse(localStorage.getItem("data"));

    return data.rol === "SuperAdmin";
}

const AuthController = {
    pendingApprovalsMenuIndex : pendingApprovalsMenuIndex,
    newReportMenuIndex : newReportMenuIndex,
    historyMenuIndex : historyMenuIndex,
    management: management,
    headerMenuOptions : headerMenuOptions,
    getManagementOptions : getManagementOptions
}

export default AuthController;