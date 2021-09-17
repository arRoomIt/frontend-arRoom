const BASE_URL = "http://localhost:3000/auth";


const registerUrl = `${BASE_URL}/register`;
const loginUrl = `${BASE_URL}/login`;
const checkSessionUrl = `${BASE_URL}/check-session`;
const logoutUrl = `${BASE_URL}/logout`;



export const registerApi = async (form) => {
    console.log(form);
    const req = await fetch(registerUrl, {
       method: 'POST',
       headers:{
           Accept: 'application/json',
           'Content-Type': 'application/json',
           'Access-Control-Allow-Origin': '*',
       },
       credentials: 'include',
       body: JSON.stringify(form),
    });
    const response = await req.json();

    if(!req.ok){
        throw new Error(response.message);
    }
    console.log(response);
    return response;
};




export const loginApi = async (form) => {
    const req = await fetch(loginUrl, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials:'include',
        body: JSON.stringify(form),
});
const response = await req.json();

if(!req.ok){
    throw new Error(response.message);
}

return response
};




export const checkSession = async (form) => {
    const req = await fetch(checkSessionUrl, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
    });
    const response = await req.json();

    return response;
};




export const logout = async (form) => {
    const req = await fetch(logoutUrl, {
        method: 'POST',
        headers: { 
            Accept: 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
        },
        credentials: 'include',
    });
    const response = await req.json();

    if(!req.ok){
        throw new Error(req.message);
    }
    return response;
}