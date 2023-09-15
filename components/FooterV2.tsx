import Link from "next/link"

const FooterV2 = () => {
    return (
      <div className="container-fluid py-3 px-4 text-white" style={{color: "#DDD", "backgroundRepeat": "no-repeat","backgroundPosition": "center","backgroundImage":"linear-gradient(180deg, rgba(28, 30, 39, 0.85), rgba(28, 30, 39, 0.85), rgba(28, 30, 39, 0.85)),\n    url('https://s3-alpha-sig.figma.com/img/0fac/874a/827500bb706df11debc9b87dd309c053?Expires=1690761600&Signature=btIqGmZH768VA2wCqkdweTSxzjiRhDs7-dt0~uotVcGn514PsC~aIFlEwiXBQYdbZII36vXAc41dK~n3-lMtbZ8KgOLXRPwnobRPypWgOvh~aYT-jbXqsaMYZpsy5urq4n5MVZAp-hjZVjIyi0o7WweGDfMjFb5-vdol5iKgnf8XUBUqeajXAdNdI~PgMlo6mZJTv1DPOx2fl2idLeo4yYXWZIsNe4uZ6BVRIO~9kpMNggINaTxhKtbTNnhwuM9jmI~mwZ-VUXHv5MJD9ZUnayNAlAn8E2yKePw13ofvKaG95bXIS28TQYGW~P5hdUgG2ECQ4J88f6PqoSNxUM~nqA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')", backgroundSize: "cover","flexDirection":"column","justifyContent":"flex-end","alignItems":"center", "fontSize":"15px"}}>
          <div className="row justify-content-center align-items-start g-2">
                <div className="col-auto col-md-3 text-md-start">
                    <img src="/images/logo-LM6E.png" className="img-fluid rounded-top my-4" alt="" style={{"width": 140}}></img>
                    <p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Le centre de documentation et d’information (CDI) du Lycée Mohammed VI d’Excellence de Ben Guerir est un espace de ressources documentaire.</p>
                    <ul className="list-inline m-0">
                        <a className='me-3' href="#"><img src="/images/social-media/fb.png" className="img-fluid rounded-top" alt="" width={20}/></a>
                        <a className='me-3' href="#"><img src="/images/social-media/twitter.png" className="img-fluid rounded-top" alt="" width={20}/></a>
                        <a className='me-3' href="#"><img src="/images/social-media/linkedin2.svg" className="img-fluid rounded-top" alt="" width={20}/></a>
                        <a className='me-3' href="#"><img src="/images/social-media/insta.png" className="img-fluid rounded-top" alt="" width={20}/></a>
                    </ul>
                </div>
                <div className="col-12 col-md-2 text-md-start pt-3">
                    <h6 className="pb-1 mb-4 mx-auto mx-md-0" style={{borderBottom: "2px solid #E95D40", width: "fit-content"}}>Pages</h6>
                    <p className="d-flex align-items-start justify-content-center justify-content-md-start"><Link href="/about" style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)", textDecoration: "none"}}>À propos</Link></p>
                    <p className="d-flex align-items-start justify-content-center justify-content-md-start"><Link href="/about" style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)", textDecoration: "none"}}>Nos Bibliothèques</Link></p>
                    <p className="d-flex align-items-start justify-content-center justify-content-md-start"><Link href="/search" style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)", textDecoration: "none"}}>Recherche</Link></p>
                    <p className="d-flex align-items-start justify-content-center justify-content-md-start"><Link href="/#nouveautes" style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)", textDecoration: "none"}}>Nouveautés</Link></p>
                </div>
                <div className="col-12 col-md-2 text-md-start pt-3">
                    <h6 className="pb-1 mb-4 mx-auto mx-md-0" style={{borderBottom: "2px solid #E95D40", width: "fit-content"}}>Service</h6>
                    <p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Acquérir</p>
                    <p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Rassembler</p>
                    <p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Organiser l&apos;information</p>
                </div>
                <div className="col-12 col-md-2 text-md-start pt-3">
                    <h6 className="pb-1 mb-4 mx-auto mx-md-0" style={{borderBottom: "2px solid #E95D40", width: "fit-content"}}>Contact</h6>
                    <div className="d-flex align-items-start justify-content-center justify-content-md-start"><img className='pb-1 me-2' src="/images/phone2.svg" style={{"width": 18}}></img><p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>0-524 - 32 - 11 - 00</p></div>
                    <div className="d-flex align-items-start justify-content-center justify-content-md-start"><img className='pb-1 me-2' src="/images/mail2.svg" style={{"width": 18}}></img><p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Info@lm6e.Ma</p></div>
                    <div className="d-flex align-items-start justify-content-center justify-content-md-start"><img className='pb-1 ms-1 me-2' src="/images/position2.svg" style={{"width": 12}}></img><p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Ville verte mohammed VI 42150 benguerir maroc</p></div>
                </div>
                <div className="col-12 col-md-3 text-md-start pt-3">
                    <h6 className="pb-1 mb-4 mx-auto mx-md-0" style={{borderBottom: "2px solid #E95D40", width: "fit-content"}}>Horaires d’ouverture</h6>
                    <p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>De lundi au vendredi : de 10h00 à 00h00.</p>
                    <p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Samedi : de 09h00 à 13h00 et de 17h00 à 00h00.</p>
                    <p style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Dimanche : de 10h00 à 13h00 et de 16h00 à 00h00.</p>
                </div>
          </div>
          <br/>
          <div className="row justify-content-center align-items-center g-2 border-top w-75 pt-3 m-auto">
            Réalisé par Harmony Technology
          </div>
      </div>
    )
  }
  
  export default FooterV2