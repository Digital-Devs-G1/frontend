export async function getData(result)
{
    if(result === null || result.status === 401)
    {
        alert("Error en la comunicacion con la API");
        return null;
    } 

    if(result.status === 204 || result.status === 201)
        return true;
    if (result.ok){
        return await result.json();
    }

    if(result.status === 404)
        return null;
    // PORQUE EL 404 NO LO PARSEA??????
    //const errorResponse = await result.json();
    
    //alert(errorResponse.message);
    return null;
    // Que hacemos con 
        // 400
        // 401
        // 404 
        // 409
        // 422
        // 500
}

export async function booleanResponse(result, msgOk, errorMsg)
{
    if (result.ok)
    {
        result = true;
    } else
    {
        result = false;
    }
    return result;
}