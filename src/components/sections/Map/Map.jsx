import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, MapConsumer } from 'react-leaflet';
import './Map.css';
import L from 'leaflet';


function Map() {

                // const myIcon = L.icon({
                //     iconUrl: require('../../../assets/images/icon.svg'),
                //     iconSize: [64,64],
                //     iconAnchor: [32, 64],
                //     popupAnchor: null,
                //     shadowUrl: null,
                //     shadowSize: null,
                //     shadowAnchor: null
                // });
    return (
        <div className="map-container">
            {/* <MapContainer center={{lat: '40.2839', lng: '-3.80033'}} zoom={13} scrollWheelZoom={true}> */}
            <MapContainer center={{lat: '40.7903', lng: '-1.3541'}} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker  position={{lat: '40.2839', lng: '-3.80033'}}>
            <Marker  position={{lat: '40.7903', lng: '-1.3541'}}>
            
            
            </Marker>
            </Marker>
            </MapContainer>
        </div>
    )
}

export { Map };