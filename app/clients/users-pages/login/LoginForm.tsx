"use client"
import { GrecaptchaFunc } from "@/app/sso"
import { UsersType } from "@/Type"
import { redirect } from "next/navigation"
import { useState } from "react"

function LoginForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const [load, setLoad] = useState(false)

    const dataForm = async () => {
        setMessage("")
        setLoad(true)
        const data: UsersType = { email, password }
        const req = await fetch("/server/users-routes/login", {
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
            dataForm()
        } catch (error) {
            console.log(error)
            setMessage("Une erreur est survenue")
            setLoad(false)
        }
    }

    return (
        <form className='row' onSubmit={(e) => submitForm(e)}>
            <a href="/clients/dashbord/dash" id="redirecte" hidden>redirecte</a>
            <div className="col-md-12">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Entrez votre email" required onChange={(e) => setEmail(e.target.value)} />
                    <label htmlFor="email">Email</label>
                </div>
            </div>
            <div className="col-md-12">
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Entrez votre mot de passe" required onChange={(e) => setPassword(e.target.value)} />
                    <label htmlFor="password">Mot de passe</label>
                </div>
            </div>
            <div className="col-md-12">
                {message !== "" && <p className="fw-bold p-2 text-center text-danger">{message}</p>}
                {!load ? (
                    <button className='btn btn-primary form-control' type='submit'>Se connecter</button>
                ) : (
                    <div className="spinner-grow text-primary" role="status">
                        <span className="visually-hidden">Connexion en cours...</span>
                    </div>
                )}

            </div>
        </form >
    )
}

export default LoginForm