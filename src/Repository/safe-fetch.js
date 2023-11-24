const HttpMethod = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH'
};

function unauthenticatedOptions(method, data = null) 
{
    if (!Object.values(HttpMethod).includes(method))
        throw new Error('Método HTTP no válido');

    return {
        method: method,
        headers: { 
            "Content-Type": "application/json",
        },
        mode: 'cors',
        cache: 'default',
        body: data ? JSON.stringify(data) : null
    }
}


function defaultOptions(method, data = null) 
{
    if (!Object.values(HttpMethod).includes(method))
        throw new Error('Método HTTP no válido');

    let options = unauthenticatedOptions(method, data);
    let token = localStorage.getItem("token");
    options.headers["Authorization"] = "Bearer ".concat(token);
    return options;
}

async function safeFetch(url, options)
{
    try
    {
        const result = await fetch(url, options);
        if(result.status === 401)
            window.location.href = `../login/login.html?href=${window.location.href}`;
        return result;
    }
    catch (error) 
    {
        let msg = 'Comunication error ->';
        msg += `URL: {url} |`;
        msg += `Options: {options}.`;
        console.error(msg, error);
        return null;
    }
}

export {
    HttpMethod,
    defaultOptions,
    unauthenticatedOptions,
    safeFetch
};