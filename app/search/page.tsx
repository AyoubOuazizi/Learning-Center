"use client"

import SearchRes from '@/components/searchRes';
import { useState } from 'react'

export default function ResultsPage() {
    const categories = [
        { categorie: "Informatique et automatique", count: 13478 },
        { categorie: "Telecomunications", count: 13478 },
        { categorie: "Gestion et Management ", count: 13478 },
        { categorie: "Électronique", count: 13478 },
        { categorie: "Mathématiques", count: 13478 },
        { categorie: "Économie et finances", count: 13478 },
        { categorie: "Droit", count: 13478 },
        { categorie: "Divers", count: 13478 },
        { categorie: "Sciences de la vie", count: 13478 },
        { categorie: "Sociologie", count: 13478 },
        { categorie: "Gestion et Management", count: 13478 }
    ]

    const [hidden, setHidden] = useState(false);

    return (
        <>
            <div className="container-fluid bg-image text-white" style={{ "backgroundColor": "rgb(248 69 37 / 5%)", borderBottom: "1px solid rgba(248, 69, 37, 0.15)" }}>
                <div className="container py-5">
                    <form className="col col-md-8 mx-auto">
                        <div className="inner-form row bg-white py-2 rounded" style={{ "border": "1px solid #F84525", "background": "#FFF", "boxShadow": "0px 10px 26px 0px rgba(0, 0, 0, 0.10)" }}>
                            <div className="col-auto m-auto">
                                <div className="d-flex form-inputs">
                                    <input className="form-control border-0" style={{ "width": "300px", "paddingLeft": "35px", "paddingRight": "30px" }} type="text" placeholder="Rechercher complet sur le portail" />
                                    <i className="fa fa-search text-black float-start"></i>
                                    <button className='border-0 bg-transparent text-white'>
                                        <i className="fa fa-exchange p-2 rounded-circle float-end" style={{ "rotate": "90deg", "background": "#F84525" }}></i>
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
                                <button className="btn btn-success rounded-pill px-4" type="submit" style={{ "height": "45px", "border": "1px solid #F84525", "background": "#F84525" }}><i className="fa fa-search"></i> Recherche</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <div className="container-fluid cheatsheet" style={{ background: "#F9F9F9" }}>
                <div className="row">
                    <div className="col-md-3 p-0">
                        <div className="category bg-white">
                            <h3 className="category-heading border-bottom row justify-content-between px-3 py-4 w-100 m-0" style={{ "fontSize": "16px" }} onClick={() => { setHidden(hidden => !hidden) }}>
                                <span className="col-auto">Categorie</span>
                                <div className="col-auto" style={{ width: "fit-content" }}>
                                    <span className="badge rounded-pill" style={{ background: "#F84525" }}>{categories.length + 1}</span>
                                    <span className="">
                                        <i className={hidden ? "fa fa-chevron-down ps-2" : "fa fa-chevron-up ps-2"} style={{ color: "#F84525" }}></i>
                                    </span>
                                </div>
                            </h3>
                            <ul className="list-group py-2" style={{ "fontSize": "15px", fontWeight: 500, display: hidden ? "none" : "" }}>
                                {
                                    categories.map((cat) => {
                                        return <li key={cat.categorie} className="list-group-item list-group-item-action border-0">
                                            <span className="float-start">{cat.categorie}</span>
                                            <span className="float-end" style={{ color: "#F84525" }}>{cat.count}</span>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-9 pt-5 px-4 row">
                        <div className="col-md-6 border-bottom mb-4">
                            <SearchRes/>
                        </div>
                        <div className="col-md-6 border-bottom mb-4">
                            <SearchRes/>
                        </div>
                        <div className="col-md-6 border-bottom mb-4">
                            <SearchRes/>
                        </div>
                        <div className="col-md-6 border-bottom mb-4">
                            <SearchRes/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <SearchRes/>
                        </div>
                        <div className="col-md-6 mb-4">
                            <SearchRes/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
