import DetailComponent from "../component/detailComponent.js";

async function initComponent(
    container, 
    getReportFields,
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
                let fields = await getReportFields(reportId);
                DetailComponent.renderDetails(fields);
            });
        });
}

const DetailController = {
    initComponent : initComponent
}

export default DetailController;