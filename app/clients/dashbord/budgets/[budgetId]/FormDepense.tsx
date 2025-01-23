import React, { useState } from 'react'

function FormDepense() {

    const [montant, setMontant] = useState(0)
    const [titre, setTitre] = useState("")
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState("")

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        setMessage("")

        const data = { montant, titre }
        try {
            const req = await fetch("/")
        } catch (error) {

        }
    }

    return (
        <div>
            <form className='row' onSubmit={(e) => submitForm(e)}>
                <div className="col-md-12">
                    <div className="form-floating mb-3">
                        <input type="text" onChange={(e) => setTitre(e.target.value)} className="form-control" id="titre" placeholder="Entrez votre nom" required />
                        <label htmlFor="titre">Titre</label>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="form-floating mb-3">
                        <input type="number" min={1} onChange={(e) => setMontant(e.target.value)} className="form-control" id="montant" placeholder="Entrez votre prenom" required />
                        <label htmlFor="montant">montant</label>
                    </div>
                </div>
                <div className="col-md-12">
                    <button className='btn btn-dark p-2 rounded-5 form-control'>Ajouter une dépense</button>
                </div>
            </form>
        </div>
    )
}

export default FormDepense