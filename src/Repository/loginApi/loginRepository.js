import {HttpMethod, unauthenticatedOptions, safeFetch } from '../safe-fetch.js'; 
import {LoginUrlBuilder} from './report-api-urls.js';

async function login(credentials)
{
    const url = new LoginUrlBuilder().login();
    const options = unauthenticatedOptions(HttpMethod.post, credentials); 
    return await safeFetch(url, options);
};

const LoginRepository = {
    login : login
};

export default LoginRepository;