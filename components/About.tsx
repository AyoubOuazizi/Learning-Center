const About = () => {
  return (
    <div className="container-fluid">
        <div className="row g-2 p-5">
            <div className="col-md-5 text-start mx-0 mx-md-5">
                <h6 className='text-uppercase mb-4' style={{"color":"#E95D40", fontSize: 15, fontWeight: 600}}>learning center</h6>
                <h2 className='tiret mt-2' style={{"marginLeft":"-43px","color":"#292962", "fontWeight":"bold"}}>À propos</h2>
                <p className='mt-4' style={{"textAlign":"justify"}}>
                Le centre de documentation et d’information (CDI) du Lycée Mohammed VI d’Excellence de Ben Guerir est un espace de ressources documentaire, de lecture, d’information, de recherche et de travail sur documents, d’accompagnement et d’étude, ouvert aux élèves, ainsi qu'à l'ensemble de la communauté éducative de l’établissement.<br/>
L’équipe chargée de sa gestion dispensent à tous les élèves un parcours de formation à la culture de l’information. Elle est à la disposition des usagers pour les former à la recherche documentaire et les aider à exploiter pleinement les ressources du CDI.                </p>
                <p className='mini-tiret' style={{"marginLeft":"-2.1rem","color":"#2B2F37", "fontWeight":"bold"}}>Règlement du centre de documentation et d’information.  <a href="#" style={{color: "#E95D40", textDecoration: "none"}}>attacher pièce jointe <img src="/images/download.svg" className="img-fluid"></img></a></p>
                <p className='mini-tiret' style={{"marginLeft":"-2.1rem","color":"#2B2F37", "fontWeight":"bold"}}>Guide d’utilisation du catalogue en ligne. <a href="#" style={{color: "#E95D40", textDecoration: "none"}}>attacher pièce jointe <img src="/images/download.svg" className="img-fluid"></img></a></p>
                <button className="btn rounded-pill px-4 py-2" type="button" style={{fontWeight: 700,"marginTop":10,"color":"#E95D40","border":"1.5px solid #E95D40","background":"rgba(233, 93, 64, 0.10)"}}>
                    Lire plus <i className="fa fa-arrow-right" style={{"fontSize": 13}}></i>
                </button>
            </div>
            <div className="col-md-5 mx-5 float-end">
                <img className='img-fluid' src='/images/learningCenter.png'/>
            </div>
        </div>
    </div>
  )
}

export default About