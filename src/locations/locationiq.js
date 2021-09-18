const BASE_URL = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATION_API_KEY}&q=`

const locationiq = async (direction) => {

    direction = direction.replace(/,/g, ' ');

    try {
       const req = await fetch(`${BASE_URL}&q=${direction}&format=json`,{
           method: 'GET',
           headers:{
            Accept: 'application/json',
            },
            mode: 'cors',
       })

       const response = await req.json();
       
       if(!req.ok){
           throw new Error (response.message);
       }

       const mapData = {
           latitude: response[0].lat,
           longitude: response[0].lon,
       }
       return mapData;
       
    } catch (error) {
        console.error(error)
    }

}

export default locationiq;


// import locationiq  from '../../locations/locationiq';
// useEffect(() =>{
//     locationiq("calle de segovia, 5, fuenlabrada, madrid")
//         .then(result=>{
//             console.log(result);
//         })
//         .catch(error=>{console.log(error)})
// },[]);