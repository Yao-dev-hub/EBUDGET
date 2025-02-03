"use client"
// import { GrecaptchaFunc } from '@/app/sso'
import { UsersType } from '@/Type'
import { useState } from 'react'

function SignUpForm() {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [tel, setTel] = useState("")
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState("")


    const data = async () => {
        setMessage("")
        setLoad(true)
        const typeConnection = "standard"
        const data: UsersType = {
            nom, prenom, email, password, tel, typeConnection
        }
        const req = await fetch("/server/users-routes/sign-up", {
            headers: { "Content-type": "application/json" },
            method: "POST",
            body: JSON.stringify(data)
        })

        const res = await req.json()
        if (res && res.message === "ok") {
            localStorage.setItem("userInfo", JSON.stringify(res.data))
            setTimeout(() => {
                document.getElementById("redirecte")?.click()
            }, 100);
        } else {
            setMessage(res.message)
        }
        setLoad(false)
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            data()
            //GrecaptchaFunc(data)
        } catch (error) {
            console.log(error)
            setMessage("Une erreur est survenue")
            setLoad(false)
        }
    }

    return (
        <form className='row' onSubmit={(e) => submitForm(e)}>
            <div className="col-md-12">
                <div className="form-floating mb-3">
                    <input onChange={(e) => setNom(e.target.value)} type="text" className="form-control" id="nom" placeholder="Entrez votre nom" required />
                    <label htmlFor="nom">Nom</label>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-floating mb-3">
                    <input onChange={(e) => setPrenom(e.target.value)} type="text" className="form-control" id="prenom" placeholder="Entrez votre prenom" required />
                    <label htmlFor="prenom">Prenom</label>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-floating mb-3">
                    <input onChange={(e) => setTel(e.target.value)} type="tel" className="form-control" id="tel" placeholder="Entrez votre telephone" required />
                    <label htmlFor="tel">Téléphone</label>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-floating mb-3">
                    <input onChange={(e) => setEmail(e.target.value)} type="email" className="form-control" id="email" placeholder="Entrez votre email" required />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-floating mb-3">
                    <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control" id="password" placeholder="Entrez votre mot de passe" required />
                    <label htmlFor="password">Mot de passe</label>
                </div>
            </div>
            <div className="col-md-12">
                {message !== "" && <p className='mb-2 bg-danger text-white fw-bold'>{message}</p>}
                {!load ?
                    <button className='btn btn-primary form-control' type='submit'>S'inscrire</button>
                    : (
                        <button className="btn btn-warning form-control" type="button" disabled>
                            <span className="spinner-border spinner-border-sm" aria-hidden="true"></span>
                            <span role="status">Traitement en cours...</span>
                        </button>
                    )
                }
            </div>
            <a href="/clients/dashbord/dash" id="redirecte" hidden>redirecte</a>
        </form>
    )
}

export default SignUpForm