import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Map = () => {
    const mapRef = useRef(null);
    const zoomIn = useRef(null);
    let zoom = 13;

    const markerIcon = new L.Icon({
        iconUrl: "images/marker.svg",
        iconRetinaUrl: "images/marker.svg",
        popupAnchor:  [-0, -0],
        iconSize: [32,45],     
    });

    const handleZoomClick = () => {
        if(zoom==18){
          let zm: HTMLInputElement = zoomIn.current!
          zm.disabled = true;
        }
        else {
          let zm: HTMLInputElement = zoomIn.current!
          zm.disabled = false;
        }
        let mapCurrent: {setZoom: (number: number)=> void} = mapRef.current!
        mapCurrent.setZoom(zoom);
        console.log(zoom)
    };

    return (
                    <MapContainer center={[32.207153925527, -7.937789475880331]} zoom={zoom} zoomControl={false} dragging={false} scrollWheelZoom={false} style={{ height: '800px', width: '100%' }} ref={mapRef}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[32.207153925527, -7.937789475880331]} icon={ markerIcon }>
                            <Popup>
                                Lycée Mohammed VI <br/> d&apos;Excellence
                            </Popup>
                        </Marker>
                    </MapContainer>
    )
}

export default Map