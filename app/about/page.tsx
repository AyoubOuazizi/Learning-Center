export default function About() {
    return (
        <>
            <div className="container-fluid bg-image text-white" style={{ "backgroundRepeat": "no-repeat", "backgroundPosition": "center", "backgroundImage": "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 4.00%, rgba(0, 0, 0, 0.41) 64.00%, rgba(0, 0, 0, 0.79) 100%),\n    url('https://gambolthemes.net/html-items/edututs-plus/images/about/team.jpg')", "flexDirection": "column", "justifyContent": "flex-end", "alignItems": "center" }}>
                <div className="container py-5">
                    <div className="col-md-6 mx-auto">
                        <h1 style={{ "marginTop": 120 }}><span className="text-uppercase">à</span> propos</h1>
                        <p className="my-5">Le Lycée Mohammed VI d&apos;Excellence (LM6E) est un établissement scientifique et technologique avec un campus résidentiel intégré. Il comporte le Secondaire Qualifiant et des Classes Préparatoires aux Grandes Ecoles.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row g-2 p-5">
                    <div className="col-md text-start mx-0 me-md-4">
                        <h6 className='text-uppercase' style={{ "color": "#F05201" }}>notre Learning Center</h6>
                        <h2 className='mt-2' style={{"maxWidth": 370, "color": "#292962", "fontWeight": "bold" }}>Notre learning Center et sa vision spécifique.</h2>
                        <p className='mt-4' style={{ "textAlign": "justify", fontSize: "0.9rem" }}>
                            Dans notre centre d&apos;apprentissage, nous sommes passionnés par l&apos;autonomisation des individus pour qu&apos;ils atteignent leur plein potentiel grâce à l&apos;éducation et au développement des compétences. Nous croyons que l&apos;apprentissage est un voyage qui dure toute la vie et nous nous efforçons de créer un environnement où les apprenants de tous âges et de tous horizons peuvent s&apos;épanouir.
                        </p>
                        <p style={{ fontSize: "0.9rem", color: "#60697B" }}><span className="fa fa-check" style={{"color":"white","background":"#F05201"}}></span> Notre mission est de fournir des expériences d&apos;apprentissage de haute qualité.</p>
                        <p style={{ fontSize: "0.9rem", color: "#60697B" }}><span className="fa fa-check" style={{"color":"white","background":"#F05201"}}></span> Nous proposons une large gamme de cours et de programmes conçus pour répondre aux divers besoins.</p>
                        <p style={{ fontSize: "0.9rem", color: "#60697B" }}><span className="fa fa-check" style={{"color":"white","background":"#F05201"}}></span> l&apos;importance de la flexibilité dans le monde trépidant d&apos;aujourd&apos;hui nous offrons un apprentissage.</p>
                    </div>
                    <div className="col-md-5 float-end">
                        <img className='img-fluid' src='/images/about.png' />
                    </div>
                </div>
            </div>
        </>
    )
}
