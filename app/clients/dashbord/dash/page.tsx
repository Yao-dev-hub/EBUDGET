"use client"

import CardBudgets from "../CardBudgets"
import GraphComposant from "./GraphComposant"
import InfosBudgets from "./InfosBudgets"
import LastTransactions from "./LastTransactions"


function page() {
    return (
        <>
            <main className='container infos-transaction mt-2'>
                <div className="row">
                    <div className="col-lg-12">
                        <InfosBudgets />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <GraphComposant />
                        <LastTransactions />
                    </div>
                    <div className="col-lg-4">
                        <div className="row mt-3">
                            <h5 className="text-center mb-3">Vos (3) derniers budgets</h5>
                            <div className="col-lg-12">
                                <CardBudgets />
                                <CardBudgets />
                                <CardBudgets />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default page