'use client'
import { BudgetType, ListBudgetType, MoneyOptions } from "@/Type";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Link from "next/link";

function CardBudgets({ item }: ListBudgetType) {

    const reste = Number(item?.fond) - Number(item?.depense)
    const pourcentage = (Number(item?.depense) * 100) / Number(item?.fond)


    return (

        <Link href={`/clients/dashbord/budgets/${item?._id}`} className='card px-2 mb-3 text-decoration-none hover-zoom'>
            <div className="card-body">
                {/* Premier Container */}
                <div className="d-flex justify-content-between mb-2 div-main ">
                    <div className='d-flex'>
                        <h4 className='text-center me-2 h6'>{item ? item?.emoji : "😊"}</h4>
                        <div>
                            <h4 className='h6'>{item ? item?.titre : "Titre du budget"}</h4>
                            <p className='color-gay p-0 m-0'>{item ? item?.nbreTransact : 0} Transactions</p>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-warning color-gay h5">{item ? Number(item.fond).toLocaleString("fr-FR", MoneyOptions) : "600 FCFA"}</h4>
                    </div>
                </div>
                {/* Deuxième container */}
                <div className=" d-flex justify-content-between p-2 rounded-2">
                    <p className='text-start color-gay'>{item ?
                        (Number(item?.depense) > 1 ? `${item.depense!.toLocaleString("fr-FR", MoneyOptions)} dépensés` : `${item.depense!.toLocaleString("fr-FR", MoneyOptions)} dépensé`)
                        :
                        ("500 FCFA")
                    }</p>
                    <p className='text-start color-gay'>{reste ?
                        (reste > 1 ? `${reste.toLocaleString("fr-FR", MoneyOptions)} Restants` : `${reste.toLocaleString("fr-FR", MoneyOptions)} Restant`)
                        :
                        ("100 FCFA")
                    }</p>
                </div>
                {/* Troisième Container */}
                <ProgressBar now={!Number.isNaN(pourcentage) ? pourcentage : 50} label={`${pourcentage.toFixed(2)}%`} variant={pourcentage > 99 ? "danger"
                    : pourcentage > 69 ? "warning" : "dark"} />
            </div>
        </Link>
    )
}

export default CardBudgets