import React, { useState, useEffect } from 'react'
import { Map } from '../../components/sections/Map/Map'
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


    const location = useLocation();
    const divitions = location.pathname.split("/", 3);
    const workSpaceId = divitions[2];
    
    const[detail, setDetail] = useState({});
    const [change, setChange] = useState(false);
    

    
    useEffect(() => {

    getWorkspaceById(workSpaceId).then(result => {
        setDetail(result);
        setChange(false);
        
    })
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
        
    <div class="row">
        <div class="col">

        
            <p className="bone"><FontAwesomeIcon icon={faHome}/>&nbsp;Workspace</p>
            <p className="btitle">{detail.title}</p>
            <p className="btop"><FontAwesomeIcon icon={faUserFriends}/>&nbsp;Occupancy</p>
            <p>{detail.totalOccupancy}</p>
            <p className="btop"><FontAwesomeIcon icon={faDoorOpen}/>&nbsp;Workspace Type</p>
            <p>{detail.roomType}</p>
            <p className="btop"><FontAwesomeIcon icon={faMoneyBillWave}/>&nbsp;Price</p>
            <p>{detail.price}€</p>
            <p className="btop">Heating:&nbsp; 
                {detail.hasAirHeating === true ? <FontAwesomeIcon className="green" icon={faCheck}/> : <FontAwesomeIcon className="red" icon={faTimes}/>}
            </p>
            <p className="btop">Air Conditioning:&nbsp; 
                {detail.hasAirCon === true ? <FontAwesomeIcon className="green" icon={faCheck}/> : <FontAwesomeIcon className="red" icon={faTimes}/>}
            </p>
            <p className="btop">Internet:&nbsp; 
                {detail.hasInternet === true ? <FontAwesomeIcon  className="green" icon={faCheck}/> : <FontAwesomeIcon className="red" icon={faTimes}/>}
            </p>
            <p className="bsummary"><FontAwesomeIcon icon={faBookOpen}/>&nbsp;Description</p>
            <p>{detail.summary}</p>
        
        </div>
        <div class="col">
                <h1>Botón?????</h1>
            </div>
        </div>
        
    </div>
          </Grid>
            <Map />
    </div>
    
    )

    
}

export default DetailWorkspace



{/* <div class="row">
  <div class="col">
    Ancho del 50%
  </div>
  <div class="col">
    Ancho del 50%
  </div>
</div> */}