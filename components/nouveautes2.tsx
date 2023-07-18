"use client"

import { useEffect, useRef, useState } from 'react'
import Card from './card'

const Nouveautes2 = () => {
    const cardsDiv = useRef(null);
    const [cardsNbr, setcardsNbr] = useState(5);

    const cards = () => {
        let res=[]
        for (let index = 0; index < cardsNbr; index++) {
            res.push(<div key={index} className="col-auto px-0 mb-2 mb-md-0"><Card/></div>);
        }
        return res;
    };

    useEffect(() => {
        let nbr = Math.trunc((cardsDiv.current!['offsetWidth']/287));
        setcardsNbr(nbr>2?nbr:2);
    })

    return (
        <div className="container-fluid mt-5">
            <h6 className='text-uppercase' style={{ "color": "#F05201" }}>nouveautés</h6>
            <h2 className='mt-3' style={{ "color": "#292962", "fontWeight": "bold" }}>
                "Nouveautés et Actualités:
                <br />
                Restez à l'affût des Dernières Informations"
            </h2>
            <form className="d-flex mx-auto justify-content-center my-5">
                <div className="inner-form row bg-white py-2 rounded" style={{ "border": "1px solid #F84525", "background": "#FFF", "boxShadow": "0px 10px 26px 0px rgba(0, 0, 0, 0.10)" }}>
                    <div className="col-md-auto col-6 m-auto col-auto-width ms-0 ms-md-auto">
                        <div className="d-flex form-inputs">
                            <input className="form-control border-0" style={{ "paddingLeft": "35px"}} type="text" placeholder="Recherche sur le portail" />
                            <i className="fa fa-search text-black float-start"></i>
                        </div>
                    </div>
                    <div className="col-auto">
                        <button className="btn btn-success rounded-pill px-4" type="submit" style={{ "height": "45px", "border": "1px solid #F84525", "background": "#F84525" }}><i className="fa fa-search"></i> Recherche</button>
                    </div>
                </div>
            </form>
            <div className="row justify-content-center align-items-center mx-5 pb-3" ref={cardsDiv}>
                {cards()}
            </div>
            <div className="row justify-content-center align-items-center g-4 pt-3 mt-3 mb-5 pb-2">
                <div className="col">
                    <button className="btn my-2 my-sm-0 rounded-pill px-4 py-2 float-end" type="button" style={{"marginTop":20,"color":"#F84525","border":"1.5px solid #F84525","background":"rgba(248, 69, 37, 0.15)"}}>
                        <i className="fa fa-arrow-left" style={{"fontSize": 13}}></i> Précédent
                    </button>
                </div>
                <div className="col">
                    <button className="btn btn-success my-2 my-sm-0 rounded-pill me-4 px-4 py-2 float-start" type="submit" style={{"border":"1px solid #F84525","background":"#F84525"}}>
                        Suivant <i className="fa fa-arrow-right" style={{"fontSize": 13}}></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Nouveautes2