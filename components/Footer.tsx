const Footer = () => {
  return (
    <div className="container-fluid py-3 px-5 text-white" style={{"backgroundColor":"#1C1C56", "fontSize":"15px"}}>
        <div className="row">
            <div className="col-md-auto mb-md-0 mb-3 text-center float-start">
                ©2023. Powred by Harmony Technology
            </div>
            <div className="col-md text-md-end">
                <ul className="list-inline m-0">
                    <a className='mx-3' href="#"><img src="/images/social-media/linkedin.png" className="img-fluid rounded-top" alt=""/></a>
                    <a className='mx-3' href="#"><img src="/images/social-media/fb.png" className="img-fluid rounded-top" alt=""/></a>
                    <a className='mx-3' href="#"><img src="/images/social-media/insta.png" className="img-fluid rounded-top" alt=""/></a>
                    <a className='mx-3' href="#"><img src="/images/social-media/twitter.png" className="img-fluid rounded-top" alt=""/></a>
                    <a className='mx-3' href="#"><img src="/images/social-media/mail.png" className="img-fluid rounded-top" alt=""/></a>            
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer