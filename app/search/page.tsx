"use client"

import Loading from '@/components/Loading';
import Pagination from '@/components/Pagination';
import SearchRes from '@/components/searchRes';
import Sections from '@/components/sections';
import getSearchResults from '@/lib/getSearchResults';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import './search.css'

export default function ResultsPage() {
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState([]);
    const [localisation, setLocalisation] = useState([]);
    const [books, setBooks] = useState<any[]>([])
    const [paginationData, setPaginationData] = useState<{ last_page: number, current_page: number }>()
    const [data, setData] = useState({ phrase: '' });
    const [checked, setChecked] = useState("auteur");
    const [selectedValue, setSelectedValue] = useState('simple');

    const handlePageChange = async (newPage: number) => {
        setLoading(true);
        const newResults = await getSearchResults({
            page: newPage,
            phrase: data.phrase,
            sections: searchParams.get('sections'),
            locations: searchParams.get('locations'),
        } as any)
        if (newResults && !newResults.error) {
            setCategories(newResults.facettes.section);
            setLocalisation(newResults.facettes.localisation);
            let { data: books, ...paginationData } = newResults!.notices;
            setBooks(books);
            setPaginationData(paginationData);
        } else {
            setCategories([]);
            setLocalisation([]);
            setBooks([]);
            setPaginationData({ last_page: 1, current_page: 1 });
        }
        setLoading(false);
    };

    const searchParams = useSearchParams()
    const [phrase, setPhrase] = useState(searchParams.get('phrase'))

    useEffect(() => {
        setLoading(true);
        const fetchResults = async () => {
            let newResults;
            if (phrase)
                newResults = await getSearchResults({
                    phrase: searchParams.get('phrase'),
                    sections: searchParams.get('sections'),
                    locations: searchParams.get('locations'),
                })
            else
                newResults = await getSearchResults({
                    sections: searchParams.get('sections'),
                    locations: searchParams.get('locations'),
                })
            if (newResults && !newResults.error) {
                setCategories(newResults.facettes.section);
                setLocalisation(newResults.facettes.localisation);
                let { data: books, ...paginationData } = newResults!.notices;
                setBooks(books);
                setPaginationData(paginationData);
            }
            else {
                setCategories([]);
                setLocalisation([]);
                setBooks([]);
                setPaginationData({ last_page: 1, current_page: 1 });
            }
            setLoading(false);
        }
        fetchResults();
    }, [searchParams])


    return (

        <>
            {
                loading ?
                    <div className="container-fluid vh-100 d-flex justify-content-center align-items-center" >
                        <Loading />
                    </div>
                    :
                    <>
                        <div className="container-fluid bg-image text-white" style={{ "backgroundColor": "rgb(248 69 37 / 5%)", borderBottom: "1px solid rgba(248, 69, 37, 0.15)" }}>
                            <div className="container-fluid py-5">
                                <form className="col col-md-7 mx-auto">
                                    <div className="inner-form row bg-white py-2 rounded" style={{ "border": "1px solid #F84525", "background": "#FFF", "boxShadow": "0px 10px 26px 0px rgba(0, 0, 0, 0.10)" }}>
                                        <div className="col-auto m-auto">
                                            <div className="d-flex form-inputs">
                                                <input className="form-control border-0" style={{ "width": "300px", "paddingLeft": "35px", "paddingRight": "30px" }} type="text" placeholder="Recherche sur le portail" value={data.phrase} onChange={(event) => setData({ phrase: event.target.value })} />
                                                <i className="fa fa-search text-black float-start"></i>
                                                <button className='border-0 bg-transparent text-white' type='button' onClick={()=>{selectedValue == "avancee"? setSelectedValue("simple"): setSelectedValue("avancee")}}>
                                                    <i className="fa fa-exchange p-2 rounded-circle float-end" style={{ "rotate": "90deg", "background": "#F84525" }}></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col d-flex flex-row justify-content-center align-items-center my-3 my-md-0">
                                            <img className='float-start' src="/images/search_type.svg" style={{ "width": "23px" }}></img>
                                            <select defaultValue={"simple"} className="object-fit-contain float-end form-select border-0" aria-label="Default select example" style={{ "width": "fit-content" }} value={selectedValue} onChange={(e) => { setSelectedValue(e.target.value); }}>
                                                <option value="simple">Recherche simple</option>
                                                <option value="avancee">Recherche avancée</option>
                                            </select>
                                        </div>
                                        <div className="col-auto m-auto m-md-0">
                                            <Link href={{ pathname: '/search', query: data }} onClick={() => { setPhrase(data.phrase) }}><button className="btn btn-success rounded-pill px-4" type="submit" style={{ "height": "45px", "border": "1px solid #E95D40", "background": "#E95D40" }}><i className="fa fa-search"></i> Recherche</button></Link>
                                        </div>
                                    </div>
                                    {
                                        selectedValue == "avancee" &&
                                        <div className="d-flex flex-sm-row justify-content-center mt-4 flex-column mx-auto" style={{ width: "fit-content" }}>
                                            <div className="form-check mx-3 text-start">
                                                <input className="form-check-input" type="radio" id="flexRadioDefault1" value="auteur" checked={checked == "auteur"} onChange={() => setChecked("auteur")} />
                                                <label className="form-check-label text-dark" htmlFor="flexRadioDefault1">
                                                    Auteur
                                                </label>
                                            </div>
                                            <div className="form-check mx-3 text-start">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="titres" checked={checked == "titres"} onChange={() => setChecked("titres")} />
                                                <label className="form-check-label text-dark" htmlFor="flexRadioDefault2">
                                                    Titres
                                                </label>
                                            </div>
                                            <div className="form-check mx-3 text-start">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" value="keywords" checked={checked == "keywords"} onChange={() => setChecked("keywords")} />
                                                <label className="form-check-label text-dark" htmlFor="flexRadioDefault3">
                                                    Mots-clés
                                                </label>
                                            </div>
                                            <div className="form-check mx-3 text-start">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" value="all" checked={checked == "all"} onChange={() => setChecked("all")} />
                                                <label className="form-check-label text-dark" htmlFor="flexRadioDefault4">
                                                    Tous les champs
                                                </label>
                                            </div>
                                        </div>
                                    }
                                </form>
                            </div>
                        </div>
                        <div className="container-fluid cheatsheet" style={{ background: "#F9F9F9" }}>
                            <div className="row">
                                <div className="col-md-3 p-0">
                                    <Sections data={categories!} title='Categorie' paramName='sections' />
                                    <Sections data={localisation!} title='Localisation' paramName='locations' />
                                </div>
                                <div className="col-md-9 pt-5 px-4 row">
                                    {
                                        books.length != 0 ?
                                            books!.map((book: any, index: number) => {
                                                return (
                                                    books.length - 1 != index ?
                                                        <div key={index} className="col-md-12 border-bottom mb-4">
                                                            <SearchRes book={book} />
                                                        </div>
                                                        :
                                                        <div key={index} className="col-md-12 mb-4">
                                                            <SearchRes book={book} />
                                                        </div>
                                                );
                                            })
                                            :
                                            <h3>aucun résultat</h3>
                                    }
                                    {
                                        paginationData &&
                                        <Pagination
                                            currentPage={paginationData.current_page}
                                            totalPages={paginationData.last_page}
                                            onPageChange={handlePageChange}
                                        />
                                    }
                                </div>
                            </div>
                        </div>
                    </>
            }
        </>
    )
}