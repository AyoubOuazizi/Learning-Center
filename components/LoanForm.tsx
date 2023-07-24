export default function LoanForm() {
  return (
    <>
        <div id="loanForm" className="container-fluid pt-5 bg-image text-white" style={{backgroundSize: "cover", "backgroundRepeat": "no-repeat","backgroundPosition": "center","backgroundImage":"linear-gradient(180deg, rgba(0, 0, 0, 0.13) 4.00%, rgba(0, 0, 0, 0.41) 64.00%, rgba(0, 0, 0, 0.79) 100%),\n    url('https://s3-alpha-sig.figma.com/img/fb05/ff2b/be313b2bb0a1b12ec55ea85e704c0615?Expires=1690761600&Signature=DhmO7Hhl73JPhJ-GCtQBtQgoZPkdATP~RxBK52VWHcv-YdJ1bYypvqASwICsr-bfJtgMgYeVpQ3CZSvItM1vOfLv0XGItLQU2YlRYYnKnNq04SsZJ2r48ANn-HykpS5mBdTPZaibkad76eoo-knVzf-BGbecCJJbblSMgOi6s~fnHED1OvgKjS8ns6CAqPCV1P4hRSsaT1P1XWuGumYsiV7qMdL0R0~foxV2mW8rp-9602XR3RHKBtvjqVCH~FYyif1hDvyu1lycqyMuj3oopAJ5H11xM15Rkeh5v4OM7yQTGkV5EtMB9-oPMA0s2zSgfh4RLj~QTpvhs9AaArq2Tw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')"}}>
            <div className="row p-5 justify-content-between align-items-start g-2">
                <div className="col-auto col-md-5 text-start">
                    <h5 className="py-3" style={{fontSize: 30, fontWeight: 700}}>Emprunter un document</h5>
                    <p style={{fontSize: 21}}>Pour toute information, veuillez nous contacter
    en utilisant ce formulaire.</p>
                    <p className="pt-2" style={{fontSize: 13, color: "rgba(255, 255, 255, 0.70)"}}>Il existe de nombreuses variantes de passages de lorem ipsum disponibles, mais la majorité ont subi une altération sous une forme ou une autre.</p>
                </div>
                <div className="col-auto col-md-4 mx-auto mx-md-0">
                    <div className="card text-white bg-white mb-5 mt-3 rounded float-md-end p-3 text-start w-100" style={{"width":"fit-content", "boxShadow": "0px 10px 26px 0px rgba(0, 0, 0, 0.10)"}}>
                        <div className="card-body text-black p-2 py-1" style={{"zIndex":"1","top":"0"}}>
                            <h5 className="mb-4 mt-2" style={{fontSize: 18, fontWeight: 700}}>Veuillez remplir le formulaire</h5>
                            <form>
                                <div className="mb-3">
                                    <input type="email" className="form-control py-2" placeholder="Votre E-mail" style={{background: "#FDEFEC"}}/>
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control py-2" placeholder="Objet" style={{background: "#FDEFEC"}}/>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control py-2" placeholder="Message" rows={5} style={{background: "#FDEFEC"}}></textarea>
                                </div>
                                <button className="btn btn-success mt-2 mb-3 rounded-pill me-0 px-4 py-2" type="button" style={{"border":"1px solid #F84525","background":"#F84525", fontWeight: 700}}><img src="/images/send.svg" className="img-fluid"/> Envoyer</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container-fluid">
            <div className="row g-2 p-5">
                <div className="col-md-5 text-start mx-0 mx-md-5">
                    <h2 className='tiret mt-2' style={{"marginLeft":"-43px","color":"#292962", "fontWeight":"bold"}}>Suggestion d’achat d’ouvrages</h2>
                    <p className='mt-4' style={{fontSize: 13}}>
                    Un livre ou un autre document que vous aimeriez emprunter ne fait pas partie des collections ? Vous pouvez suggérer au centre de documentation et d’information du LM6E de l’acheter. Faites une demande en ligne.
                    </p>
                    <button className="btn btn-success mt-2 mb-3 rounded-pill me-0 px-4 py-2" type="button" style={{"border":"1px solid #F84525","background":"#F84525", fontWeight: 700}}><img src="/images/send2.svg" className="img-fluid"/> remplir le formulaire</button>
                </div>
            </div>
        </div>
    </>
  )
}
