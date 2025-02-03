"use client"
import { DepenseType, FormType, ParamesID, UsersType } from '@/Type'
import { useSnackbar } from 'notistack'
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

const FormDepense = ({submitForm, montantSaisie, TitreSaisie, loadform, formRef}: FormType) => {

    return (
        <div>
            <form ref={formRef} className='row' id="forme" onSubmit={(e) => submitForm(e)}>
                <div className="col-md-12">
                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => TitreSaisie(e)} className="form-control" id="titre" placeholder="Entrez la transaction" required />
                        <label htmlFor="titre">Depense</label>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-floating mb-3">
                        <input type="number" min={1} onChange={(e) => montantSaisie(e)} className="form-control" id="montant" placeholder="Entrez un montant" required />
                        <label htmlFor="montant">montant</label>
                    </div>
                </div>

                <div className="col-md-12">
                    {loadform === false ? (
                        <button type='submit' className='btn btn-dark p-2 rounded-3 form-control'>Ajoutez une depense</button>
                    ) : (
                        <button className="btn btn-warning" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span role="status">Traitement...</span>
                        </button>
                    )}

                </div>
            </form>
        </div>
    )
}

export default FormDepense