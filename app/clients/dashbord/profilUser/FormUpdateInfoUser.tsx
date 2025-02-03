
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { ParamesID, UsersInfoUpdateType, UsersType } from '@/Type'
import { log } from 'console'

function FormUpdateInfoUser({data}: UsersType) {

    const [nom, setNom] = useState("")
    const [prenom, setPrenom] = useState("")
    const [ville, setVille] = useState("")
    const [email, setEmail] = useState("")
    const [tel, setTel] = useState("")
    const [pays, setPays] = useState("")
    const [genre, setGenre] = useState("")
    const [profession, setProfession] = useState("")
    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState("")
    const [user, setUser] = useState<UsersType | null>(null)

    useEffect(() => {
        const storedUID = JSON.parse(localStorage.getItem("userInfo")!)
        setUser(storedUID)
    })


    const submitForm = async (e: React.FormEvent) => {
        e.preventDefault()
        setLoad(true)
        if (user && user !== undefined) {
            const uid = user.uid
            const data: UsersInfoUpdateType = {
                nom, prenom, ville, email, tel, pays, profession, genre,
            }

            try {
                const req = await fetch(`/server/users-routes/updateProfil/${uid}`, {
                    headers: { "Content-type": "application/json" },
                    method: "POST",
                    body: JSON.stringify(data)
                })

                const res = await req.json()

            } catch (error) {
                console.log(error)
            }
        } else {
            console.log("UID introuvable")
        }



    }

    return (

        <form className='row' onClick={(e) => submitForm(e)} >
            <div className="col-lg-6 table-responsive" id='tabInfoUser'>
                <Table striped hover>
                    <tbody className='text-start'>
                        <tr>
                            <td className='text-start'>Nom</td>
                            <td>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" className="form-control" id="nom" aria-label="nom" required />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>Prenom</td>
                            <td>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" className="form-control" id="prenom" aria-label="prenom" required />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>Genre</td>
                            <td>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" className="form-control" id="genre" aria-label="genre" required />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>ville</td>
                            <td>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" className="form-control" id="ville" aria-label="ville" required />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="col-lg-6 table-responsive" id='tabInfoUser'>
                <Table striped>
                    <tbody className='text-start'>
                        <tr>
                            <td className='text-start'>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1">@</span>
                                    <input type="text" className="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"  />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>Telephone</td>
                            <td>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" className="form-control" aria-label="prenom" required />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>Profession</td>
                            <td>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" className="form-control" id="profession" aria-label="profession" required />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>Pays</td>
                            <td>
                                <div className="col-lg-12 mb-3">
                                    <input type="text" className="form-control" id="pays" aria-label="pays" required />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="mb-3 ">
                <button className='btn btn-primary me-2' type='submit'>Sauvegarder</button>
                <button className='btn btn-danger' type='button'>Annueler</button>
            </div>
        </form>
    )
}

export default FormUpdateInfoUser