'use client'
import ProgressBar from "@ramonak/react-progress-bar";
import Link from "next/link";

function CardBudgets() {
    return (
        <Link href={"/clients/dashbord/budgets/id"} className='card px-2 mb-3 text-decoration-none hover-zoom'>
            <div className="card-body">
                {/* Premier Container */}
                <div className="d-flex justify-content-between mb-2 div-main ">
                    <div className='d-flex'>
                        <h4 className='text-center me-2'>😊</h4>
                        <div>
                            <h4 className='h5'>Titre du budget</h4>
                            <p className='color-gay p-0 m-0'>4 transaction(s) effectués</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-warning color-gay">600 FCFA</h4>
                    </div>
                </div>
                {/* Deuxième container */}
                <div className=" d-flex justify-content-between p-2 rounded-2">
                    <h6 className='text-start color-gay'><span className="fw-bold">500 FCFA</span> dépensés</h6>
                    <h6 className='text-end color-gay'><span className='fw-bold'>100 FCFA</span> resctants</h6>
                </div>
                {/* Troisième Container */}
                <ProgressBar completed={50} bgColor={"#000"} />
            </div>
        </Link>
    )
}

export default CardBudgets