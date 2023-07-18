export default function SearchRes() {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <img src="/images/book1.png" className="img-fluid" alt="..." style={{ "boxShadow": "0px 7.075728893280029px 24.765050888061523px 0px rgba(0, 0, 0, 0.25)" }} />
                </div>
                <div className="col-8" style={{ fontSize: 14 }}>
                    <table className="table table-borderless text-start" style={{ background: "#F9F9F9" }}>
                        <tbody>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Titre</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>The magazine of the american library association</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Auteurs</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>Laurie D. BORMAN, Editeur scientifique</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Type de document</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>Périodique : texte imprimé</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Editeur</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>Booklist publications</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>ISBN/ISSN/EAN</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>0002-9769Langues</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Langues</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>Anglais</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Mots-clés</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>Notification</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Résumé</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>The article reviews the books "Delivering the Best Start</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="row justify-content-center align-items-center g-4 mt-1 mb-3 pb-2">
                <div className="col-auto m-0">
                    <button className="btn btn-success my-2 my-sm-0 rounded-pill me-4 px-4 py-2 float-end" type="submit" style={{ "border": "1px solid #F84525", "background": "#F84525" }}>
                        <i className="fa fa-shopping-cart"></i> Ajouter au Panier
                    </button>
                </div>
                <div className="col-auto m-0">
                    <button className="btn my-2 my-sm-0 rounded-pill px-4 py-2 float-start" type="button" style={{ "marginTop": 20, "color": "#F84525", "border": "1.5px solid #F84525" }}>
                        <i className="fa fa-calendar"></i> Réserver
                    </button>
                </div>
            </div>
        </>
    )
}
