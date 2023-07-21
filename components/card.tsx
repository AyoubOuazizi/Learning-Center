const Card = () => {
    return (
        <div className="card p-3 mx-3 pb-0" style={{ "backgroundColor": "transparent","width":"255px"}}>
            <img src="https://www.agglo-moulins.fr/fileadmin/user_upload/mediatheque/images/mediatheque_moulins_salle_de_repos.jpg" className="card-img-top rounded" alt="..."/>
            <div className="card-body ps-0 text-start pb-0">
                <div className="rounded-pill" style={{"width": "fit-content","padding":"2px 8px","fontSize":"0.85rem","fontWeight":"600","color":"#F84525","backgroundColor":"#FEDAD3"}}>Actualités</div>
                <h6 className="card-title py-3" style={{"color":"rgb(41, 58, 81)","fontSize":"15px","fontWeight":"700","overflow":"hidden","display":"-webkit-box","WebkitLineClamp":"2","lineClamp":"2","WebkitBoxOrient":"vertical","maxHeight":"3.6em"}}>How Content Generators Work & How To Use Them to</h6>
                <div className="row g-2 mt-3">
                    <div className="col-auto">
                        <img className='' src="/images/sm-logo.svg"></img>
                    </div>
                    <div className="col">
                        <h6 className='my-1' style={{"fontSize":"12px","fontWeight":"700","color":"#293A51"}}>LM6E</h6>
                        <div className="row g-2" style={{"color":"#6B7989","fontSize":"11px","fontWeight":"400"}}>
                            <div className="col-auto date">
                                <p>Feb 10, 2023</p>
                            </div>
                            <div className="col">
                                <p>11 min read</p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card