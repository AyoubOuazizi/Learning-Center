"use client"

import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const Contact = () => {
    // const mapRef = useRef(null);
    // const zoomIn = useRef(null);
    // let zoom = 13;

    // const markerIcon = new L.Icon({
    //     iconUrl: "images/marker.svg",
    //     iconRetinaUrl: "images/marker.svg",
    //     popupAnchor:  [-0, -0],
    //     iconSize: [32,45],     
    // });

    // const handleZoomClick = () => {
    //     if(zoom==18){
    //       let zm: HTMLInputElement = zoomIn.current!
    //       zm.disabled = true;
    //     }
    //     else {
    //       let zm: HTMLInputElement = zoomIn.current!
    //       zm.disabled = false;
    //     }
    //     let mapCurrent: {setZoom: (number: number)=> void} = mapRef.current!
    //     mapCurrent.setZoom(zoom);
    //     console.log(zoom)
    // };

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setPosts(data);
        //     })
        //     .catch((err) => {
        //         console.log(err.message);
        //     });
    })

    return (
        <>
            <div className="container-fluid bg-image text-white" style={{"backgroundRepeat": "no-repeat", "backgroundPosition": "center", "backgroundImage": "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 4.00%, rgba(0, 0, 0, 0.41) 64.00%, rgba(0, 0, 0, 0.79) 100%),\n    url('https://s3-alpha-sig.figma.com/img/c248/69bb/fb85ae7071cd3a9b2afc1bf8f8ef1a44?Expires=1690156800&Signature=KXUMckjT3AN2i~I6icpG2RVh0RhhHAm6ZWt21VZwTZTnebmD4hW2X~8hXGyONTf7pv~6pcbf8AkX418qjw2fmZr8nQf4ZYhiZanEEfFV9A8NmU5G5Pv90cifyRfMrfVDoGGET67TmUWR8UJjuD2inAfwk6AgH8jf71nAHcEsFPNN323lZkzlHsgekk3dHqgWhrxxlRsL6cM4ROE4cALBhQzgO1ATBD0ixT8OQwYKCntiuuCsZeBSoUrBSL68~g7RrpUdQj~x7pmTBsP7Sfzup2lCHSIrsJe-kr4h~xr50It5GeOp6W29eiiS-YYf~pEh9WQWr9kkaSmvds8raYZI-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')", "flexDirection": "column", "justifyContent": "flex-end", "alignItems": "center" }}>
                <div className="container py-5">
                    <div className="col-md-6 mx-auto">
                        <h1 style={{ "marginTop": 120 }}>CONTACTEZ NOUS</h1>
                        <p className="my-5">Nous sommes là pour vous aider. Si vous avez des questions ou des préoccupations, n&apos;hésitez pas à nous contacter en utilisant l&apos;une des méthodes</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid px-0 position-relative" style={{"zIndex":"0","margin": "-2px 0"}}>
                <div className="img-fluid">
                    {/* <MapContainer center={[32.207153925527, -7.937789475880331]} zoom={zoom} zoomControl={false} dragging={false} scrollWheelZoom={false} style={{ height: '800px', width: '100%' }} ref={mapRef}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                        <Marker position={[32.207153925527, -7.937789475880331]} icon={ markerIcon }>
                            <Popup>
                                Lycée Mohammed VI <br/> d&apos;Excellence
                            </Popup>
                        </Marker>
                    </MapContainer> */}
                </div>

                <div className="row w-100 mx-0 mb-0 mt-md-0 pb-5 pt-md-4 zoom" style={{"zIndex":"1","top":"0"}}>
                    <div className='d-flex justify-content-center align-items-center'>
                        <div className="card text-white bg-white mb-5 mt-3 rounded-pill" style={{"width":"fit-content"}}>
                            <div className="card-body text-black p-2 ps-3 py-1">
                                {/* <button className="btn btn-success my-2 my-sm-0 rounded-circle mx-2 p-1" type="button" style={{"width": 35,"height": 35,"border":"1px solid #F84525","background":"#F84525"}} onClick={()=>{zoom++; handleZoomClick()}} ref={zoomIn}>+</button>
                                <button className="btn btn-success my-2 my-sm-0 rounded-circle mx-2 p-1" type="button" style={{"width": 35,"height": 35,"border":"1px solid #F84525","background":"#F84525"}} onClick={()=>{zoom--; handleZoomClick()}}>-</button>
                                <button className="btn btn-success my-2 my-sm-0 rounded-pill me-0 ms-5 px-4 py-2" type="button" style={{"border":"1px solid #F84525","background":"#F84525"}} onClick={()=>{zoom=18; handleZoomClick()}}>Zoom</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card text-white bg-white my-4 mx-2 px-3">
                            <div className="card-body text-black pt-4">
                                <h4 className="card-title" style={{"color": "#293A51","fontSize":"19px","fontWeight":"700"}}>
                                    <img className='pb-1 pe-2' src="/images/phone.svg" style={{"width": 26}}></img> Contact
                                </h4>
                                <p className="card-text mt-3 px-3" style={{"color":"#6B7989","fontSize":"15px","fontWeight":"400"}}>+212 5 24 32 11 00</p>
                            </div>
                        </div>
                        <div className="card text-white bg-white my-4 mx-2 px-3">
                            <div className="card-body text-black pt-4">
                                <h4 className="card-title" style={{"color": "#293A51","fontSize":"19px","fontWeight":"700"}}>
                                    <img className='pb-1 pe-2' src="/images/mail.svg" style={{"width": 26}}></img> Adresse e-mail
                                </h4>
                                <p className="card-text mt-3 px-3" style={{"color":"#6B7989","fontSize":"15px","fontWeight":"400"}}>info@lm6e.ma</p>
                            </div>
                        </div>
                        <div className="card text-white bg-white my-4 mx-2">
                            <div className="card-body text-black pt-4">
                                <h4 className="card-title" style={{"color": "#293A51","fontSize":"19px","fontWeight":"700"}}>
                                    <img className='pb-1 pe-2' src="/images/position.svg" style={{"width": 26}}></img> Notre emplacement
                                </h4>
                                <p className="card-text mt-3 text-start px-3" style={{"color":"#6B7989","fontSize":"15px","fontWeight":"400"}}>Lycée Mohammed VI d’ExcellenceLot 660, Hay Moulay Rachid Ben Guerir, 43150, Morocco</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact