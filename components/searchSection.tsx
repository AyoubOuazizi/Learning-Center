"use client"

import Link from 'next/link';
import { useEffect, useId, useState } from 'react'

const SearchSection = () => {
  const [checked, setChecked] = useState("auteur");
  const toBeSelectedId = useId();
  const [data, setData] = useState({ cle: '' });

  return (
    <div className="container-fluid bg-image text-white" style={{backgroundSize: "cover", "backgroundRepeat": "no-repeat","backgroundPosition": "center","backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0.13) 4.00%, rgba(0, 0, 0, 0.41) 64.00%, rgba(0, 0, 0, 0.79) 100%),\n    url('/images/background.jpeg')","flexDirection":"column","justifyContent":"flex-end","alignItems":"center"}}>
      <div className="container py-5">
        <div className="col-md-6 mx-auto">
          <h1 style={{"marginTop": 120, fontWeight: 700}}>Learning Center</h1>
          <p className="my-5">Le Lycée Mohammed VI d’Excellence (LM6E) est un établissement scientifique et technologique avec un campus résidentiel intégré. Il comporte le Secondaire Qualifiant et des Classes Préparatoires aux Grandes Ecoles.</p>
        </div>
        <form className="mt-5 col-md-8 mx-auto w-auto">
          <div className="inner-form row bg-white py-2 rounded m-auto" style={{width: "fit-content"}}>
            <div className="col-auto m-auto mx-md-0">
              <div className="d-flex form-inputs">
                <input className="form-control border-0" style={{"paddingLeft":"35px", "paddingRight":"50px"}} type="text" placeholder="Recherche sur le portail" value={data.cle} onChange={(event) => setData({ cle: event.target.value }) }/>
                <i className="fa fa-search text-black float-start"></i>
                <button className='border-0 bg-transparent text-white'>
                  <i className="fa fa-exchange p-2 rounded-circle float-end" style={{"rotate":"90deg","background":"#E95D40"}}></i>
                </button>
              </div>
            </div>
            <div className="col-auto-md col-12 d-flex flex-row justify-content-center align-items-center my-4 my-md-0 mx-auto" style={{width: "fit-content"}}>
              <img className='float-start' src="/images/search_type.svg" style={{"width":"23px"}}></img>
              <select defaultValue={"simple"} className="object-fit-contain float-end form-select border-0" aria-label="Default select example" style={{"width":"fit-content"}}>
                <option value="simple">Recherche simple</option>
                <option value="avancee">Recherche avancée</option>
              </select>
            </div>
            <div className="col-md-auto col-12">
              <Link href={{pathname: '/search', query: data}}><button className="btn btn-success rounded-pill px-4" type="submit" style={{"height":"45px","border":"1px solid #E95D40","background":"#E95D40", fontWeight: 700}}><i className="fa fa-search"></i> Recherche</button></Link>
            </div>
          </div>
          <div className="d-flex flex-sm-row justify-content-center mt-4 flex-column mx-auto" style={{width: "fit-content"}}>
            <div className="form-check mx-3 text-start">
              <input className="form-check-input" type="radio" id="flexRadioDefault1" value="auteur" checked={checked=="auteur"} onChange={() => setChecked("auteur")}/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Auteur
              </label>
            </div>
            <div className="form-check mx-3 text-start">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="titres" checked={checked=="titres"} onChange={() => setChecked("titres")}/>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Titres
              </label>
            </div>
            <div className="form-check mx-3 text-start">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="keywords" checked={checked=="keywords"} onChange={() => setChecked("keywords")}/>
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Mots-clés
              </label>
            </div>
            <div className="form-check mx-3 text-start">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="all" checked={checked=="all"} onChange={() => setChecked("all")}/>
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Tous les champs
              </label>
            </div>
          </div>
        </form>
        <div className="mx-auto" style={{"marginTop":"120px"}}>
          <button type="button" className="bigBtn btn btn-light rounded-circle p-3 mx-5 my-md-0 my-3">
            <img className='' style={{width: 55}} src="/images/database.svg"></img>
          </button>
          <button type="button" className="bigBtn btn btn-light rounded-circle p-3 mx-5 my-md-0 my-3">
            <img className='' style={{width: 48}} src="/images/biblio.svg"></img>
          </button>
          <button type="button" className="bigBtn btn btn-light rounded-circle p-3 mx-5 my-md-0 my-3">
            <img className='' style={{width: 48}} src="/images/journal.svg"></img>
          </button>
          <button type="button" className="bigBtn btn btn-light rounded-circle p-3 mx-5 my-md-0 my-3">
            <img className='' style={{width: 48}} src="/images/books.svg"></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchSection