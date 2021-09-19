import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet';
import './Map.css';

import { Box } from "@chakra-ui/react"


function Map(props) {


    return (
        <Box mt="6" mb="10">
            <div className="map-container">

                <MapContainer center={{ lat: `${props.lat}`, lng: `${props.lng}` }} zoom={13} scrollWheelZoom={true}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={{ lat: `${props.lat}`, lng: `${props.lng}` }}></Marker>
                </MapContainer>
            </div>
        </Box>
    )
}

export default Map;