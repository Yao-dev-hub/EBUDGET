import Link from 'next/link';
import React from 'react'
import Table from 'react-bootstrap/Table';

function DetailsTransactiion() {
    return (
        <div className='table-responsive'>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Titre dépense</th>
                        <th>Montant dépense</th>
                        <th>Date</th>
                        <th>Détails</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Garba</td>
                        <td>500 FACFA</td>
                        <td>12/02/2004</td>
                        <td><Link href={"#a"} className='text-decoration-none'>voir plus</Link></td>

                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td >Larry the Bird</td>
                        <td>@twitter</td>
                        <td>@fat</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default DetailsTransactiion