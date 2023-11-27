const newReportMenuIndex = "newReport";
const historyMenuIndex = "history";
const pendingApprovalsMenuIndex = "pendingApprovals";
const management = "management";

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
    let menuOptions = {
        newReport: {
            name: "Reportar Gasto",
            href: "../newReport/newReport.html"
        },
        history: {
            name: "Historial",
            href: "../history/history.html"
        }
    };

    if(isApprover()){
        let optionView = {
            name: "Aprobaciones Pendientes",
            href: "../pendingApprovals/pendingApprovals.html"
        }
        menuOptions["pendingApprovals"] = optionView;
    }  

    if(isAdmin()){
        let optionView = {
            name: "Administracion",
            href: "../management/management.html"
        }
        menuOptions["management"] = optionView;
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

const getCompany = () => {
    return JSON.parse(localStorage.getItem("data")).company;
}

const AuthController = {
    pendingApprovalsMenuIndex : pendingApprovalsMenuIndex,
    newReportMenuIndex : newReportMenuIndex,
    historyMenuIndex : historyMenuIndex,
    management: management,
    headerMenuOptions : headerMenuOptions,
    getManagementOptions : getManagementOptions,
    getCompany : getCompany
}

export default AuthController;