import React, { useState } from 'react'

const Book = () => {
    let rating = "90%";

    return (
        <div className="card border-0 mx-1" style={{ "backgroundColor": "transparent" }}>
            <div className='image card-img-top'>
                <img src="/images/book1.png" className="card-img-top" alt="..." style={{"boxShadow":"0px 7.075728893280029px 24.765050888061523px 0px rgba(0, 0, 0, 0.25)"}}/>
                <div className="overlay">
                    <i className="fa fa-eye"></i>
                </div>
            </div>
            <div className="card-body ps-0 text-start">
                <div className="rating mb-2">
                    <div className="stars-outer">
                        <div className="stars-inner" style={{ "width": rating }}></div>
                    </div>
                </div>
                <h6 className="card-title">Optimisation:Théorie et algorithmes</h6>
                <hr className='mb-1' />
                <h6 className="card-text">Auteur : inconnu</h6>
            </div>
        </div>
    )
}

export default Book