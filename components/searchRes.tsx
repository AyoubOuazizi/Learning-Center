export default function SearchRes({book}: {book: any}) {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <img src={book.thumbnail_url} className="img-fluid" alt="..." style={{height: 200, width:130, "boxShadow": "0px 7.075728893280029px 24.765050888061523px 0px rgba(0, 0, 0, 0.25)" }} />
                </div>
                <div className="col-8" style={{ fontSize: 14 }}>
                    <table className="table table-borderless text-start" style={{ background: "#F9F9F9" }}>
                        <tbody>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Titre</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>{book.titre}</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Auteurs</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>{book.responsability_author.map((element: any, index: number) => index!=book.responsability_author.length-1?`${element.author.author_name}, `:element.author.author_name)}</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Type de document</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>{book.typdoc}</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Editeur</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>{book.publisher1?.name}</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>ISBN/ISSN/EAN</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>{book.isbn}</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Langues</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>{book.languages.map((element: any, index: number) => index!=book.languages.length-1?`${element.code_langue}, `:element.code_langue)}</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Mots-clés</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>{book.key_words.map((element: any, index: number) => index!=book.key_words.length-1?`${element.replace(/;/g, ", ")} `:element.replace(/;/g, ", "))}</td>
                            </tr>
                            <tr>
                                <th className="px-0 py-1" scope="row" style={{ "whiteSpace": "nowrap", background: "#F9F9F9" }}>Résumé</th>
                                <td className="py-1" style={{ background: "#F9F9F9" }}>:</td>
                                <td className="px-0 py-1" style={{ background: "#F9F9F9" }}>{book.n_gen}</td>
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
