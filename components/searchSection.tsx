"use client"

import Link from 'next/link';
import { useEffect, useId, useState } from 'react'

const SearchSection = () => {
  const [checked, setChecked] = useState("auteur");
  const toBeSelectedId = useId();
  const [data, setData] = useState({ cle: '' });

  return (
    <div className="container-fluid bg-image text-white" style={{"backgroundRepeat": "no-repeat","backgroundPosition": "center","backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0.13) 4.00%, rgba(0, 0, 0, 0.41) 64.00%, rgba(0, 0, 0, 0.79) 100%),\n    url('https://s3-alpha-sig.figma.com/img/c248/69bb/fb85ae7071cd3a9b2afc1bf8f8ef1a44?Expires=1690156800&Signature=KXUMckjT3AN2i~I6icpG2RVh0RhhHAm6ZWt21VZwTZTnebmD4hW2X~8hXGyONTf7pv~6pcbf8AkX418qjw2fmZr8nQf4ZYhiZanEEfFV9A8NmU5G5Pv90cifyRfMrfVDoGGET67TmUWR8UJjuD2inAfwk6AgH8jf71nAHcEsFPNN323lZkzlHsgekk3dHqgWhrxxlRsL6cM4ROE4cALBhQzgO1ATBD0ixT8OQwYKCntiuuCsZeBSoUrBSL68~g7RrpUdQj~x7pmTBsP7Sfzup2lCHSIrsJe-kr4h~xr50It5GeOp6W29eiiS-YYf~pEh9WQWr9kkaSmvds8raYZI-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')","flexDirection":"column","justifyContent":"flex-end","alignItems":"center"}}>
      <div className="container py-5">
        <div className="col-md-6 mx-auto">
          <h1 style={{"marginTop": 120}}>Learning Center</h1>
          <p className="my-5">Le Lycée Mohammed VI d’Excellence (LM6E) est un établissement scientifique et technologique avec un campus résidentiel intégré. Il comporte le Secondaire Qualifiant et des Classes Préparatoires aux Grandes Ecoles.</p>
        </div>
        <form className="mt-5 col-md-8 mx-auto w-75 w-md-auto">
          <div className="inner-form row bg-white py-2 rounded">
            <div className="col-auto m-auto">
              <div className="d-flex form-inputs">
                <input className="form-control border-0" style={{"paddingLeft":"35px", "paddingRight":"85px"}} type="text" placeholder="Recherche sur le portail" value={data.cle} onChange={(event) => setData({ cle: event.target.value }) }/>
                <i className="fa fa-search text-black float-start"></i>
                <button className='border-0 bg-transparent text-white'>
                  <i className="fa fa-exchange p-2 rounded-circle float-end" style={{"rotate":"90deg","background":"#F84525"}}></i>
                </button>
              </div>
            </div>
            <div className="col-md col-12 d-flex flex-row justify-content-center align-items-center my-4 my-md-0">
              <img className='float-start' src="/images/search_type.svg" style={{"width":"23px"}}></img>
              <select defaultValue={"simple"} className="object-fit-contain float-end form-select border-0" aria-label="Default select example" style={{"width":"fit-content"}}>
                <option value="simple">Recherche simple</option>
                <option value="avancee">Recherche avancée</option>
              </select>
            </div>
            <div className="col-md-auto col-12">
              <Link href={{pathname: '/search', query: data}}><button className="btn btn-success rounded-pill px-4" type="submit" style={{"height":"45px","border":"1px solid #F84525","background":"#F84525"}}><i className="fa fa-search"></i> Recherche</button></Link>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center mt-4">
            <div className="form-check mx-3">
              <input className="form-check-input" type="radio" id="flexRadioDefault1" value="auteur" checked={checked=="auteur"} onChange={() => setChecked("auteur")}/>
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Auteur
              </label>
            </div>
            <div className="form-check mx-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="titres" checked={checked=="titres"} onChange={() => setChecked("titres")}/>
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Titres
              </label>
            </div>
            <div className="form-check mx-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="keywords" checked={checked=="keywords"} onChange={() => setChecked("keywords")}/>
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Mots-clés
              </label>
            </div>
            <div className="form-check mx-3">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="all" checked={checked=="all"} onChange={() => setChecked("all")}/>
              <label className="form-check-label" htmlFor="flexRadioDefault4">
                Tous les champs
              </label>
            </div>
          </div>
        </form>
        <div className="mx-auto" style={{"marginTop":"120px"}}>
          <button type="button" className="bigBtn btn btn-light rounded-circle p-3 mx-5 my-md-0 my-3">
            <img className='pt-2 ps-2' src="/images/database.svg"></img>
          </button>
          <button type="button" className="bigBtn btn btn-light rounded-circle p-3 mx-5 my-md-0 my-3">
            <img className='' src="/images/biblio.svg"></img>
          </button>
          <button type="button" className="bigBtn btn btn-light rounded-circle p-3 mx-5 my-md-0 my-3">
            <img className='' src="/images/journal.svg"></img>
          </button>
          <button type="button" className="bigBtn btn btn-light rounded-circle p-3 mx-5 my-md-0 my-3">
            <img className='' src="/images/books.svg"></img>
          </button>
        </div>
      </div>
    </div>
  )
}

export default SearchSection