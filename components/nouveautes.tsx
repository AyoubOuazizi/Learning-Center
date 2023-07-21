import React, { useState } from 'react'
import Book from './book'

const Nouveautes = () => {

    return (
        <div className="container-fluid" style={{"backgroundColor": "rgb(248 69 37 / 5%)"}}>
            <div className="row g-2 p-5 pt-4">
                <div className="col-auto text-start mx-md-5 mx-0">
                    <h2 className='tiret mt-2' style={{ "marginLeft": "-43px", "color": "#292962", "fontWeight": "bold" }}>Nouveautés</h2>
                </div>
                <div className="col float-end">
                    <form className="col mx-auto float-end">
                        <div className="inner-form row bg-white py-2 rounded" style={{"border":"1px solid #E95D40","background":"#FFF","boxShadow":"0px 10px 26px 0px rgba(0, 0, 0, 0.10)"}}>
                            <div className="col-auto m-auto">
                                <div className="d-flex form-inputs">
                                    <input className="form-control border-0" style={{"width":"300px", "paddingLeft": "35px", "paddingRight": "30px", fontSize: 14 }} type="text" placeholder="Rechercher complet sur le portail" />
                                    <i className="fa fa-search text-black float-start"></i>
                                    <button className='border-0 bg-transparent text-white'>
                                        <i className="fa fa-exchange p-2 rounded-circle float-end" style={{ "rotate": "90deg", "background": "#E95D40" }}></i>
                                    </button>
                                </div>
                            </div>
                            <div className="col d-flex flex-row justify-content-center align-items-center my-3 my-md-0">
                                <img className='float-start' src="/images/search_type.svg" style={{ "width": "23px" }}></img>
                                <select className="object-fit-contain float-end form-select border-0" aria-label="Default select example" style={{ "width": "fit-content" }}>
                                    <option selected>Recherche simple</option>
                                    <option value="1">Recherche avancée</option>
                                </select>
                            </div>
                            <div className="col-auto m-auto m-md-0">
                                <button className="btn btn-success rounded-pill px-4" type="submit" style={{ fontWeight: 700,"height": "45px", "border": "1px solid #E95D40", "background": "#E95D40" }}><i className="fa fa-search"></i> Recherche</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="d-flex flex-row" id="scroll" style={{"overflowX": "scroll"}}>
                <a className="card-container mx-3" style={{"cursor":"pointer","textDecoration":"none"}}>
                    <Book/>
                </a>
                <a className="card-container mx-3" style={{"cursor":"pointer","textDecoration":"none"}}>
                    <Book/>
                </a>
                <a className="card-container mx-3" style={{"cursor":"pointer","textDecoration":"none"}}>
                    <Book/>
                </a>
                <a className="card-container mx-3" style={{"cursor":"pointer","textDecoration":"none"}}>
                    <Book/>
                </a>
                <a className="card-container mx-3" style={{"cursor":"pointer","textDecoration":"none"}}>
                    <Book/>
                </a>
                <a className="card-container mx-3" style={{"cursor":"pointer","textDecoration":"none"}}>
                    <Book/>
                </a>
                <a className="card-container mx-3" style={{"cursor":"pointer","textDecoration":"none"}}>
                    <Book/>
                </a>
            </div>
        </div>
    )
}

export default Nouveautes