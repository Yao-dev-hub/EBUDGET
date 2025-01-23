import React from 'react'
import InfosTransactions from './InfosTransactions'

function page() {
    return (
        <>
            <main className='container infos-transaction mt-2'>
                <div className="row">
                    <div className="col-md-12 ">
                        <InfosTransactions />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">

                    </div>
                    <div className="col-md-4"></div>
                </div>
            </main>
        </>
    )
}

export default page