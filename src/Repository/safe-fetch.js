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
        headers: { 
            "Content-Type": "application/json",
            "Authorization" : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2ZjQ1MTAxMi1iNzk0LTRmNTQtYjM4NS1jMDY0ZWVlYTAwYzEiLCJpYXQiOiIxNS1Ob3YtMjMgMTI6MDM6MTMgQU0iLCJpZCI6IjEwIiwiZW1haWwiOiJtQDQuY29tIiwicm9sIjoiQWRtaW4iLCJleHAiOjE3MDAwMjA5OTMsImlzcyI6ImxvY2FsaG9zdCIsImF1ZCI6InVzZXJzIn0.DEV3Xyg8Uc071papsOBFRI36C04euZ5VT0SPtcYUgyg"
        },
        mode: 'cors',
        cache: 'default',
        body: data ? JSON.stringify(data) : null
    }
}

async function safeFetch(url, options)
{
    try
    {
        return await fetch(url, options);
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
    safeFetch
};