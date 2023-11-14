const HttpMethod = {
    get: 'GET',
    post: 'POST',
    put: 'PUT',
    delete: 'DELETE',
    patch: 'PATCH'
};

function defaultOptions(method, data = null) 
{
    if (!Object.values(HttpMethod).includes(method))
        throw new Error('Método HTTP no válido');

    return {
        method: method,
        headers: { "Content-Type": "application/json" },
        mode: 'cors',
        cache: 'default',
        body: data ? JSON.stringify(data) : null
    }
}

async function safeFetch(url, options)
{
    try
    {
        let result = await fetch(url, options);
        if (result.ok)
            return result.json;
        else
        {
            alert(result.json.message);
            // Que hacemos con 
            // 400
            // 401
            // 404 
            // 409
            // 422
            // 500
        }
    }
    catch (error) 
    {
        let msg = 'Comunication error ->';
        msg += `URL: {url} |`;
        msg += `Options: {options}.`;
        console.error(msg, error);
    }
}

export {
    HttpMethod,
    defaultOptions,
    safeFetch
};