import { API_HEADERS, API_URLS } from "../apiConfig";

// --- Comunication to 'Get Users' --- 
export async function getUsers(errorCallback) {
    const url = API_URLS.GET_USER;
    let response = await fetch(url, {
      method: "GET",
      headers: API_HEADERS,
      mode: 'cors',
      cache: 'default'
    });
    if(response.ok){
        let json = await response.json();
        console.log(json);

    } else if(response.status === 401) {
        window.location.href = "login.html";
    } else {
        let json = await response.json();
        errorCallback(json);
    }
}