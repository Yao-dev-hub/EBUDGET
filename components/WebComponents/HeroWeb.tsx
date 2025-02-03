import Link from 'next/link'
import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

function HeroWeb() {
    return (
        <div className='container mt-2 p-5'>
            <div className="row ">
                <div className="col-lg-12 d-flex justify-content-center align-items-center">
                    <h6 className='border text-center rounded-5 few-bold bg-white p-1 mb-2 '><span className='text-danger fw-bold'>e</span>Budget : Application de gestion de budget</h6>
                </div>
                <div className="col-lg-12 d-flex justify-content-center align-items-center p-3">
                    <h1 className='h1 fw-bold text-center' id='en-tete'>Autonomiser l'avenir financier avec l'innovation pour un monde plus intelligent </h1>
                </div>
                <div className="col-lg-12 d-flex justify-content-center align-items-center p-3">
                    <p className='h6 text-center'>
                        Nous façonnons une nouvelle ère de services financiers en combinant expertise et technologie de pointe.
                        Notre mission est de créer des solutions fintech intelligentes et accessibles, qui rapprochent la finance traditionnelle du numérique.
                    </p>
                </div>
                <div className="col-lg-12 d-flex justify-content-center align-items-center p-3">
                    <Link href="#" className='btn btn-success mx-2 p-3 rounded-3'>A propos de nous <sup className=' fw-bold'><GoArrowUpRight className='fs-5' /></sup></Link>
                    <Link href="#" className='btn btn-primary mx-2 p-3 rounded-3'>Contactez-nous <sup className=' fw-bold'><GoArrowUpRight className='fs-5' /></sup></Link>
                </div>
                <div className="col-lg-12">
                    Description Component
                </div>
            </div>
        </div>
    )
}

export default HeroWeb