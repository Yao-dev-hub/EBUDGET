import NavBar from '@/components/navBar'
import React from 'react'
import CardBudgets from './CardBudgets'
import AddBudget from './AddBudget'


function page() {
    return (
        <div className='container mt-5 '>
            <div className="row">
                <div className="col-md-3 my-1">
                    <AddBudget />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <CardBudgets />
                </div>
                <div className="col-md-4">
                    <CardBudgets />
                </div>
                <div className="col-md-4">
                    <CardBudgets />
                </div>
            </div>

        </div>
    )
}

export default page