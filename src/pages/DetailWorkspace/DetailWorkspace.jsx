import React, { useState, useEffect } from 'react'
import { Map, CalendarDetail } from '../../components/sections';
import { getWorkspaceById } from  '../../api/WorkspaceApi'
import { useLocation } from 'react-router-dom';
import { Image, Box, Grid} from "@chakra-ui/react";
import './DetailWorkspace.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUserFriends, faBookOpen, faDoorOpen, faFrown, faSmile, faMoneyBillWave, faTimes, faCheck } from '@fortawesome/free-solid-svg-icons';
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Typography from '@mui/material/Typography';
// import ButtonBase from '@mui/material/ButtonBase';

function DetailWorkspace() {

    // const Img = styled('img')({
    //     margin: 'auto',
    //     display: 'block',
    //     maxWidth: '100%',
    //     maxHeight: '100%',
    //   });
      

    const location = useLocation();
    const divitions = location.pathname.split("/", 3);
    const workSpaceId = divitions[2];
    
    const[detail, setDetail] = useState({});
    const [change, setChange] = useState(false);
    

    
    useEffect(() => {
    if(workSpaceId !== undefined){
    getWorkspaceById(workSpaceId).then(result => {
        setDetail(result);
        setChange(false); 
    })
}
}, [change, workSpaceId]);

    
    
    return (
        <div>
        <div className="boxImage">
        <Box maxW="lg" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={detail.images} />
        </Box>
        </div>
        <Grid
            container
            direction="col"
            justifyContent="center"
            alignItems="center">
          <div className="boxText">
              
            <p className="size"><FontAwesomeIcon icon={faHome}/>&nbsp;{detail.title}</p>
            <p className="size"><FontAwesomeIcon icon={faBookOpen}/>&nbsp;{detail.summary}</p>
            <p className="size"><FontAwesomeIcon icon={faUserFriends}/>&nbsp;{detail.totalOccupancy}</p>
            <p className="size"><FontAwesomeIcon icon={faDoorOpen}/>&nbsp;{detail.roomType}</p>
            <p className="size"><FontAwesomeIcon icon={faMoneyBillWave}/>&nbsp;Precio{detail.price}€</p>
            <p className="size">Calefacción:&nbsp; 
                {detail.hasAirHeating === true ? <FontAwesomeIcon className="green" icon={faCheck}/> : <FontAwesomeIcon className="red" icon={faTimes}/>}
            </p>
            <p className="size">Aire acondicionado:&nbsp; 
                {detail.hasAirCon === true ? <FontAwesomeIcon className="green" icon={faCheck}/> : <FontAwesomeIcon className="red" icon={faTimes}/>}
            </p>
            <p className="size">Internet:&nbsp; 
                {detail.hasInternet === true ? <FontAwesomeIcon  className="green" icon={faCheck}/> : <FontAwesomeIcon className="red" icon={faTimes}/>}
            </p>
            <p>Normas del Workspace</p>
            <p>Covid-19</p>
            <p>Cancelación</p>
          </div>
          </Grid>
          

            <Map />
            <CalendarDetail/>
        </div>
    )
}

export default DetailWorkspace



// export default function ComplexGrid() {
//   return (
//     <Paper sx={{ p: 2, margin: 'auto', maxWidth: 500, flexGrow: 1 }}>
//       <Grid container spacing={2}>
//         <Grid item>
//           <ButtonBase sx={{ width: 128, height: 128 }}>
//             <Img alt="complex" src="/static/images/grid/complex.jpg" />
//           </ButtonBase>
//         </Grid>
//         <Grid item xs={12} sm container>
//           <Grid item xs container direction="column" spacing={2}>
//             <Grid item xs>
//               <Typography gutterBottom variant="subtitle1" component="div">
//                 Standard license
//               </Typography>
//               <Typography variant="body2" gutterBottom>
//                 Full resolution 1920x1080 • JPEG
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 ID: 1030114
//               </Typography>
//             </Grid>
//             <Grid item>
//               <Typography sx={{ cursor: 'pointer' }} variant="body2">
//                 Remove
//               </Typography>
//             </Grid>
//           </Grid>
//           <Grid item>
//             <Typography variant="subtitle1" component="div">
//               $19.00
//             </Typography>
//           </Grid>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// }