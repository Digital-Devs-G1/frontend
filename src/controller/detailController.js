import DetailComponent from "../component/detailComponent.js";
import ReportService from "../services/reportService.js";

async function initComponent(
    container, 
    buttonQuery = ".detailsButton", 
    reportIdAttribute = 'item-id'
    )
{
    DetailComponent.render(container);
    container
        .querySelectorAll(buttonQuery)
        .forEach( button => {
            button.addEventListener("click", async () => 
            {
                let reportId = button.getAttribute(reportIdAttribute);
                let fields = await ReportService.getReportFields(reportId);
                DetailComponent.renderDetails(fields);
            });
        });
}

const DetailController = {
    initComponent : initComponent
}

export default DetailController;