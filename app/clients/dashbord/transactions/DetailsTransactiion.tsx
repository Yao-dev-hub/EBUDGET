import Link from 'next/link';
import React from 'react'
import Table from 'react-bootstrap/Table'
import { MdDelete } from "react-icons/md";

function DetailsTransactiion() {
    return (
        <div className='table-responsive' >
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Titre</th>
                        <th>Montant dépense</th>
                        <th>Date</th>
                        <th>Supprimer</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <span className='bg-warning rounded-3 px-1 fw-bold ' > - 200 FCFA</span> Courses
                        </td>
                        <td>500 FCFA</td>
                        <td>12/02/2004</td>
                        <td ><MdDelete className='fs-4' /></td>

                    </tr>
                    <tr>
                        <td>
                            <span className='bg-warning rounded-3 px-1 fw-bold ' > - 200 FCFA</span> Courses
                        </td>
                        <td>500 FACFA</td>
                        <td>12/02/2004</td>
                        <td ><MdDelete className='fs-4' /></td>
                    </tr>
                    <tr>
                        <td>
                            <span className='bg-warning rounded-3 px-1 fw-bold ' > - 200 FCFA</span> Courses
                        </td>
                        <td>500 FACFA</td>
                        <td>12/02/2004</td>
                        <td ><MdDelete className='fs-4' /></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DetailsTransactiion