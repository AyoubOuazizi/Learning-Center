const LearningCenter = () => {
  return (
    <div className="container-fluid">
        <div className="row g-2 p-5">
            <div className="col-md-5 text-start mx-0 mx-md-5">
                <h6 className='text-uppercase' style={{"color":"#F05201"}}>learning center</h6>
                <h2 className='tiret mt-2' style={{"marginLeft":"-43px","color":"#292962", "fontWeight":"bold"}}>learning center</h2>
                <p className='mt-4' style={{"textAlign":"justify"}}>
                Bienvenue dans notre Learning Center ! Nous sommes ravis de vous aider à acquérir de nouvelles connaissances et à développer vos compétences. Que vous souhaitiez approfondir vos compétences professionnelles, explorer de nouveaux domaines ou simplement enrichir votre bagage intellectuel, notre Learning Center est l'endroit idéal pour commencer.<br/>
Notre mission est de faciliter l'accès à l'information et de favoriser la curiosité intellectuelle. Que vous soyez étudiant, chercheur, professionnel ou simplement passionné, notre centre regorge de trésors qui vous aideront à approfondir vos domaines d'intérêt, à découvrir de nouvelles perspectives et à nourrir votre esprit.
                </p>
                <button className="btn rounded-pill px-4 py-2" type="button" style={{"marginTop":20,"color":"#F84525","border":"1.5px solid #F84525","background":"rgba(248, 69, 37, 0.15)"}}>
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

export default LearningCenter