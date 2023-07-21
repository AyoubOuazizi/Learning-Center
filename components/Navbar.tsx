"use client"

import Link from "next/link"
import { usePathname } from 'next/navigation';

function Navbar() {

    {/* Get the current route */}
    const currentRoute = usePathname();


  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-white" style={{"boxShadow":"0px 10px 26px 0px rgba(0, 0, 0, 0.10)"}}>
          <div className="container-fluid mx-4 my-2">
            <img src="/images/logo-LM6E.png" className="img-fluid rounded-top" alt="" style={{"width": 140}}></img>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav mx-auto mt-2 mt-lg-0 d-flex justify-content-around" style={{"fontWeight": 600}}>
                    <li className="nav-item mx-2">
                        <Link className={(currentRoute === "/") ? 'nav-link active' : "nav-link"} href="/" aria-current="page"><span className='text'>Accueil</span></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className={(currentRoute === "/about") ? 'nav-link active' : "nav-link"} href="/about"><span className='text'>À propos</span></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#"><span className='text'>Nos Bibliothèques</span></a>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className={(currentRoute === "/search") ? 'nav-link active' : "nav-link"} href="/search"><span className='text'>Recherche</span></Link>
                    </li>
                    <li className="nav-item mx-2">
                        <a className="nav-link" href="#"><span className='text'>Nouveautés</span></a>
                    </li>
                    <li className="nav-item mx-2">
                        <Link className={(currentRoute === "/contact-us") ? 'nav-link active' : "nav-link"} href="/contact-us"><span className='text'>Contact</span></Link>
                    </li>
                    {/* <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <a className="dropdown-item" href="#">Action 1</a>
                            <a className="dropdown-item" href="#">Action 2</a>
                        </div>
                    </li> */}
                </ul>
                <div className="d-flex my-2 my-lg-0 justify-content-center align-items-center">
                    <button className="btn btn-success my-2 my-sm-0 rounded-pill me-4 px-4 py-2" type="submit" style={{fontWeight: 700, "border":"1px solid #E95D40","background":"#E95D40"}}>Se connnecter</button>
                    <div className="dropdown text-dark" style={{fontWeight: 700}}>
                        <button className=" btn my-2 my-sm-0 rounded-pill px-4 py-2 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false"  style={{fontWeight: 700,"border":"1.5px solid #E95D40","background":"rgba(233, 93, 64, 0.15)"}}>
                            <span className="flag-icon flag-icon-fr"> </span>  <i className="fa fa-chevron-down" style={{"fontSize": 13}}></i>  Langue
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#" style={{fontWeight: 700}}><span className="flag-icon flag-icon-fr"> </span>  Français</a></li>
                            <li><a className="dropdown-item" href="#" style={{fontWeight: 700}}><span className="flag-icon flag-icon-us"> </span>  Anglais</a></li>
                            <li><a className="dropdown-item" href="#" style={{fontWeight: 700}}><span className="flag-icon flag-icon-ma"> </span>  Arabe</a></li>
                        </ul>
                    </div>
                </div>
            </div>
      </div>
    </nav>    
  )
}

export default Navbar