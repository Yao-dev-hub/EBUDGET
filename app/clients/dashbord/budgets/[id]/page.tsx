"use client"
import React from 'react'
import CardBudgets from '../new-budget/CardBudgets'
import FormDepense from './FormDepense'
import DetailsBudget from './DetailsBudget'

function page() {
    return (
        <div className='container my-5'>
            <div className="row">
                <div className="col-md-4">
                    <CardBudgets />
                    <button type='submit' className='btn btn-danger p-2 mb-3 form-control rounded-5'>Suuprimer le budget</button>
                    <div className="card my-3">
                        <div className="card-body">
                            <FormDepense />
                        </div>
                    </div>
                </div>
                <div className="col-md-8">
                    <DetailsBudget />
                </div>
            </div>
        </div>
    )
}

export default page