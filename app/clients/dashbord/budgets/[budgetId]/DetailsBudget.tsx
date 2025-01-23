import React from 'react'
import { MdDelete } from "react-icons/md"
import { AiFillEdit } from "react-icons/ai"

function DetailsBudget() {
    return (
        <div className='table-responsive'>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Dépenses</th>
                        <th scope="col">Montant</th>
                        <th scope="col">Date</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sport</td>
                        <td>2000 FCFA</td>
                        <td>10/02/2024</td>
                        <td className='text-center'><button title='supprimer' className="btn btn-danger btn-sm"><MdDelete /></button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default DetailsBudget