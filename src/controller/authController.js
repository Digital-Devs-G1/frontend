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
        }
    ];

    if(isApprover()){
        let optionView = {
            name: "Aprobaciones Pendientes",
            href: "../pendingApprovals/pendingApprovals.html"
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


const AuthController = {
    pendingApprovalsMenuIndex : pendingApprovalsMenuIndex,
    newReportMenuIndex : newReportMenuIndex,
    historyMenuIndex : historyMenuIndex,
    headerMenuOptions : headerMenuOptions
}

export default AuthController;