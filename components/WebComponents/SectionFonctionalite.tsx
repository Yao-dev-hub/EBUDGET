import React from 'react'
import { FaMoneyBillWave } from 'react-icons/fa'
import { FaHandHoldingDollar } from "react-icons/fa6";

function SectionFonctionalite() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <div className="col-lg-4">
                    <div className="card bg-card p-5 rounded-5">
                        <h1 className='ms-3'><FaMoneyBillWave className='animation-icons ' /></h1>
                        <div className="card-body">
                            <h3 className='text-white fw-bold'>Solutions Financières</h3>
                            <p className='text-white'>Avec une suite complète de produits allant de la banque numérique au traitement des paiements.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card bg-card p-5 rounded-5">
                        <h1 className='ms-3'><FaHandHoldingDollar className='animation-icons ' /></h1>
                        <div className="card-body">
                            <h3 className='text-white fw-bold'>Expertise et Conseil</h3>
                            <p className='text-white'>Bénéficiez d’une suite complète de produits allant de la banque numérique au traitement des paiements.</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="card bg-card p-5 rounded-5">
                        <h1 className='ms-3'><FaMoneyBillWave className='animation-icons ' /></h1>
                        <div className="card-body">
                            <h3 className='text-white fw-bold'>Innovation en Finance</h3>
                            <p className='text-white'>Profitez d’une suite complète de produits allant de la banque numérique au traitement des paiements.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SectionFonctionalite