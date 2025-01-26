"use client"
import { ParamesID, UsersType } from '@/Type'
import { useEffect, useState } from 'react'
import Spinner from 'react-bootstrap/Spinner'

function FormDepense({ params }: ParamesID) {

    const [montant, setMontant] = useState(0)
    const [titre, setTitre] = useState("")
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState("")
    const [user, setUser] = useState(localStorage.getItem("userInfo")!)


    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoad(true)
        setMessage("")

        //const user = JSON.parse(user)
        // const budgetId = await getParams()
        const data = { montant, titre }
        console.log(data)
        try {
            const req = await fetch(`/server/depense-routes/new-depense`, {
                headers: { "Content-type": "application/json" },
                method: "POST",
                body: JSON.stringify(data)
            })

            const res = await req.json()
            console.log(res)
            return

        } catch (error) {
            console.log(error);
            setMessage("Erreur lors de la soumission des données")
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
                        <input type="number" min={1} onChange={(e) => setMontant(Number(e.target.value))} className="form-control" id="montant" placeholder="Entrez votre prenom" required />
                        <label htmlFor="montant">montant</label>
                    </div>
                </div>

                <div className="col-md-12">
                    <button className='btn btn-dark p-2 rounded-5 form-control'>Ajoutez une depense</button>
                </div>
            </form>
        </div>
    )
}

export default FormDepense