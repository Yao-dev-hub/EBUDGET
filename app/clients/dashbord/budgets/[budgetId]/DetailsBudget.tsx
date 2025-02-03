"use client"
import { MdDelete } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"
import { DepenseType, MoneyOptions } from "@/Type"
import { useEffect, useState } from "react"

function DetailsBudget({ listTransactions }: DepenseType) {



    const [cpter, setCpter] = useState(10)
    const [length, setLength] = useState(listTransactions!.length)
    const [replica, setReplica] = useState(listTransactions)
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(replica!.length / cpter);
    const startIndex = (currentPage - 1) * cpter;
    const paginatedData = replica?.slice(startIndex, startIndex + cpter);


    //On filtre le tableau par date
    const filtreSubmit = (e: string) => {
        if (e && e !== undefined && e !== "") {
            const filtre = new Date(e).setHours(0, 0, 0, 0)
            const data = listTransactions?.filter(item => {
                const itemDate = new Date(item.date!).setHours(0, 0, 0, 0);
                return itemDate === filtre;
            });
            if (data && data.length > 0) {
                console.log(data)
                setReplica(data)
            } else {
                setReplica([])
            }
        } else {
            setReplica(listTransactions)
        }
    }


    useEffect(() => {

        const data: DepenseType[] = listTransactions!.sort((a: DepenseType, b: DepenseType) => {
            const dateA = a.date ? new Date(a.date).getTime() : 0;
            const dateB = b.date ? new Date(b.date).getTime() : 0;
            return dateB - dateA;
        });
        setReplica(data)
        setLength(listTransactions!.length)

    }, [listTransactions])


    return (
        <>
            <div className="mb-4">
                <div className="row">
                    <div className="col-5 col-md-3 mb-md-0">
                        <label htmlFor="cpter" className="block">Nombre Eléments</label>
                        <select name="cpter" title="cpter" className="form-select shadow-none" onChange={(e) => {
                            setCpter(Number(e.target.value));
                            setCurrentPage(1);
                        }}>
                            <option value="10">10</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>
                    <div className="col-7 col-md-9 text-md-end">
                        <div className="row justify-content-end">
                            <div className="col-8 col-md-4">
                                <label htmlFor="date" className="block text-start text-left">Filtrer par date</label>
                                <input type="date" name="date" className="form-control" placeholder="filtre par date" onChange={(e) => filtreSubmit(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="table-responsive">
                <table className="table table-hover table-borderless">
                    <thead className="sticky-top mb-3">
                        <tr>
                            <th className="text-end text-muted">Montant</th>
                            <th></th>
                            <th className="text-muted">Transactions</th>
                            <th className="text-center text-muted">Date</th>
                            <th className="text-center text-muted">Heure</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody className="table-group-divider border-top border-bottom">
                        {
                            paginatedData && paginatedData.length > 0 ? (
                                paginatedData.map((items) => (
                                    <tr key={items?._id}> {/* Ajoute une clé unique ici */}
                                        <td className="text-end"><span className="btn btn-sm btn-warning">-{Number(items?.montant).toLocaleString("fr-FR", MoneyOptions)}</span></td>
                                        <td></td>
                                        <td>{items?.titre}</td>
                                        <td className="text-center">{items?.date && new Date(items.date).toLocaleDateString("fr")}</td>
                                        <td className="text-center">{items?.date && new Date(items.date).getHours() + ':' + new Date(items.date).getMinutes()}</td>
                                        <td className='text-center'>
                                            <button title='supprimer' className="btn btn-danger btn-sm">
                                                <MdDelete />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={6} className="text-center">Aucune transaction trouvée</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
                {paginatedData && paginatedData.length > 0 &&
                    <div className="d-flex justify-content-center mt-3">
                        <button className="btn btn-warning mx-1 btn-sm" disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>Précédent</button>
                        <span className="align-self-center">Page {currentPage} / {totalPages}</span>
                        <button className="btn btn-warning mx-1 btn-sm" disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>Suivant</button>
                    </div>
                }
            </div>
        </>
    )
}

export default DetailsBudget