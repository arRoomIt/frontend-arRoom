const BASE_URL = "http://localhost:3000/reservation";
const postUrl = `${BASE_URL}/create`;

export const postReservation = async (form) => {

    try {
        
        const req = await fetch(postUrl, {
            method: 'POST',
            headers: {'Content-type':'application/json'},
            credentials: 'include',
            body: JSON.stringify(form),
        });

        const res = await req.json();

        if(!req.ok){
            throw new Error (res.message);
        }  
        
        return res;

    } catch (error) {
        console.error(error);
    }

}