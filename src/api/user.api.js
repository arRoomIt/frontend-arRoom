const BASE_URL = "http://localhost:3000/user";

const uploadUrl = `${BASE_URL}/upload`;


export const uploadImage = async (form)=>{

    console.log("Uploading-->", form);

    const req = await fetch(uploadUrl, {
     method: 'POST',
     body: JSON.stringify(form),
     headers: {'Content-type':'application/json'} 
    });

    const response = await req.json();

    if(!req.ok){
        throw new Error(response.message);
    }
    return response;

}