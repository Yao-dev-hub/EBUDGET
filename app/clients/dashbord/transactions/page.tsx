"use client"
import DetailsTransactiion from './DetailsTransactiion'
import TransacForm from './TransacForm'

function page() {
    return (
        <div className='container mt-5 '>
            <div className="row">
                <div className="col-md-12">
                    <TransacForm />
                </div>
                <div className="col-md-12">
                    <DetailsTransactiion />
                </div>
            </div>
        </div>
    )
}

export default page