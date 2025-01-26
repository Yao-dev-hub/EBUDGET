import React from 'react'
import Table from 'react-bootstrap/Table'

function LastTransactions() {
    return (
        <div className='container mt-5'>
            <div className="row">
                <h5 className='fw-bold text-center mb-4'>Vos (5) derniers transactions</h5>
                <div className="col-lg-12 table-responsive">
                    <Table striped hover>
                        <thead>
                            <tr>
                                <th>Dépense</th>
                                <th>Titre</th>
                                <th>date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><span className='rounded-3 border bg-warning fw-bold w-15'>-200</span> FCFA</td>
                                <td>Sport</td>
                                <td>26/01/2025</td>
                            </tr>
                            <tr>
                                <td><span className='rounded-3 border bg-warning fw-bold w-15'>-200</span> FCFA</td>
                                <td>Sport</td>
                                <td>26/01/2025</td>
                            </tr>
                            <tr>
                                <td><span className='rounded-3 border bg-warning fw-bold w-15'>-200</span> FCFA</td>
                                <td>Sport</td>
                                <td>26/01/2025</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </div>
        </div>
    )
}

export default LastTransactions