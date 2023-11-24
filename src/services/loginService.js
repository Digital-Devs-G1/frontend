import LoginRepository from "../Repository/loginApi/loginRepository.js";
import {getData} from "./simpleErrorManager.js";

async function login(credentials)
{
    let result = await LoginRepository.login(credentials);
    return getData(result);
};

const LoginService = {
    login: login
}

export default LoginService;