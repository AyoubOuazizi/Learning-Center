import Link from 'next/link'
 
export default function NotFound() {
  return (
        <div className="container-fluid bg-image text-white" style={{"backgroundRepeat": "no-repeat", "backgroundPosition": "center", "backgroundImage": "linear-gradient(180deg, rgba(0, 0, 0, 0.13) 4.00%, rgba(0, 0, 0, 0.41) 64.00%, rgba(0, 0, 0, 0.79) 100%),\n    url('https://s3-alpha-sig.figma.com/img/c248/69bb/fb85ae7071cd3a9b2afc1bf8f8ef1a44?Expires=1690156800&Signature=KXUMckjT3AN2i~I6icpG2RVh0RhhHAm6ZWt21VZwTZTnebmD4hW2X~8hXGyONTf7pv~6pcbf8AkX418qjw2fmZr8nQf4ZYhiZanEEfFV9A8NmU5G5Pv90cifyRfMrfVDoGGET67TmUWR8UJjuD2inAfwk6AgH8jf71nAHcEsFPNN323lZkzlHsgekk3dHqgWhrxxlRsL6cM4ROE4cALBhQzgO1ATBD0ixT8OQwYKCntiuuCsZeBSoUrBSL68~g7RrpUdQj~x7pmTBsP7Sfzup2lCHSIrsJe-kr4h~xr50It5GeOp6W29eiiS-YYf~pEh9WQWr9kkaSmvds8raYZI-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')", "flexDirection": "column", "justifyContent": "flex-end", "alignItems": "center" }}>
            <div className="container py-5 text-center">
                <div className="col-md-6 mx-auto">
                    <img src="/images/notfound.png" className="img-fluid rounded-top" alt="" style={{ "width": 400 }}/>
                    <p className="mb-5 mt-2">Nous sommes désolés, la page que vous avez demandée est introuvable.<br/>Veuillez retourner à la page d'accueil.</p>
                    <Link className="nav-link" href="/"><button className="btn btn-success rounded-pill px-4" type="submit" style={{"height":"45px","border":"1px solid #F84525","background":"#F84525"}}><i className="fa fa-home"></i> Accueil</button></Link>
                </div>
            </div>
        </div>
  )
}