import {HttpMethod, defaultOptions, safeFetch } from './safeFetch.js'; 
import {Report} from './reportApiRepository.js';

async function getFieldTemplates(id)
{
    const url = Report.fields(id);
    const options = defaultOptions(HttpMethod.get); 
    safeFetch(url, options);
};

const ReportTemplateRepository = {
    getFieldTemplates
};

export default ReportTemplateRepository;