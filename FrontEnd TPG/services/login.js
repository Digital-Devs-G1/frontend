import { API_URLS } from "../Scripts/apiConfig";

// --- Comunication to 'Login Servicies' --- 
async function login(data, errorCallback, okCallback) {
    const url = API_URLS.LOGIN;
  
    return fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      mode: 'cors',
      cache: 'default'
    })
    .then(async (response) => {
      if (response.ok) {
        return response.json().then(async (json) => {
            console.log(json);
            localStorage.setItem("token", "Bearer ".concat(json.result.token));
            localStorage.setItem("tokenExpiration", json.result.expiration);
            okCallback();
        });
      } else {
        return response.json().then(async (errors) => {
            errorCallback(errors);
        });
      }
    })
    .catch((error) => {
      console.error("Error en la solicitud:", error);
    });
  }

const API = {
  Login : loginAsync(data, errorCallback, okCallback)
}

export default API;





async function loginAsync(data, errorCallback, okCallback) {
  const url = API_URLS.LOGIN;

  let response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    mode: 'cors',
    cache: 'default'
  })
  if(response.ok){
    let json = await response.json();
    console.log(json);
    localStorage.setItem("token", "Bearer ".concat(json.result.token));
    localStorage.setItem("tokenExpiration", json.result.expiration);
    okCallback();
  } else {
    let json = await response.json();
    console.log(json);
    errorCallback(json);
  }
}