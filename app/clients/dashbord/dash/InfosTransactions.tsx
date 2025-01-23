import React from 'react'
import { GiMoneyStack } from "react-icons/gi"
import { TbPigMoney } from "react-icons/tb"
import { GiTakeMyMoney } from "react-icons/gi"

function InfosTransactions() {
    return (
        <div className='container-fluid my-3'>
            <div className="row">
                {/* 1 */}
                <div className="col-md-4 g-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6">
                                    <h6 className='text-start'>Total des transactions</h6>
                                    <h4 className='text-warning text-start'>2000 FCFA</h4>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <GiMoneyStack className='h1 bg-warning rounded-circle p-2 text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 2 */}
                <div className="col-md-4 g-3 ">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6">
                                    <h6 className='text-start'>Nombre de transactions</h6>
                                    <h4 className='text-warning text-start'>20</h4>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <TbPigMoney className='h1 bg-warning rounded-circle p-2 text-white fw-bold' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* 3 */}
                <div className="col-md-4 g-3">
                    <div className="card">
                        <div className="card-body">
                            <div className="row d-flex justify-content-between">
                                <div className="col-md-6">
                                    <h6 className='text-start'>Budgets atteints</h6>
                                    <h4 className='text-warning text-start'>1/8</h4>
                                </div>
                                <div className="col-md-4 d-flex justify-content-center align-items-center ">
                                    <GiTakeMyMoney className='h1 bg-warning rounded-circle p-2 text-white' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfosTransactions