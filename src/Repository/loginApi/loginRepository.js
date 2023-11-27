import {HttpMethod, unauthenticatedOptions, safeFetch } from '../safe-fetch.js'; 
import {LoginUrlBuilder, RolUrlBuilder} from '../loginApi/login-api-urls.js';

async function login(credentials)
{
    const url = new LoginUrlBuilder().login();
    const options = unauthenticatedOptions(HttpMethod.post, credentials); 
    return await safeFetch(url, options);
};

async function getRoles()
{
    const url = new RolUrlBuilder().roles();
    const options = defaultOptions(HttpMethod.get); 
    return await safeFetch(url, options);
};

async function registerUser(user)
{
    const url = new LoginUrlBuilder().register();
    const options = defaultOptions(HttpMethod.put, user);
    return await safeFetch(url, options);
}

const LoginRepository = {
    login : login,
    resgiste : registerUser,
    roles : getRoles
};

export default LoginRepository;