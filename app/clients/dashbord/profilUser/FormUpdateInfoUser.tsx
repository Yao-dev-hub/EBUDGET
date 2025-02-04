"use client"
import { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { ParamesID, UsersType } from '@/Type'
import { IoMdPerson } from "react-icons/io";
import { GiWorld } from 'react-icons/gi';
import { TfiEmail } from "react-icons/tfi";
import { BsTelephone } from "react-icons/bs";
import { FaCity } from 'react-icons/fa';
import { MdWork } from 'react-icons/md';



function FormUpdateInfoUser({ setUser, user }: UsersType) {

    const [load, setLoad] = useState(false)
    const [message, setMessage] = useState("")


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser!({ ...user, [name]: value });
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setUser!({ ...user, [name]: value });
    }

    const submitForm = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage("")
        setLoad(true)

        if (user && user !== undefined) {

            try {
                const req = await fetch("/server/users-routes/updateProfil", {
                    headers: { "Content-type": "application/json" },
                    method: "POST",
                    body: JSON.stringify(user)
                })

                const res = await req.json()
                if (res && res.message === "ok") {
                    console.log(res.data)
                    localStorage.setItem("userInfo", JSON.stringify(res.data))

                } else {
                    console.log(res)
                    setMessage("Erreur surenue lors de la soumission des données")
                }

            } catch (error) {
                console.log(error)
                setMessage("Erreur surenue lors de la soumission des données")
            }
        } else {
            console.log("user introuvable")
        }
    }

    return (

        <form className='row' onSubmit={(e) => submitForm(e)} >

            <div className="col-lg-6 table-responsive" id='tabInfoUser'>
                <Table borderless>
                    <tbody className='text-start'>
                        <tr>
                            <td className='text-start'>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><IoMdPerson /></span>
                                    <input name='nom' value={user && user?.nom} onChange={(e) => handleChange(e)} type="text" className="form-control" placeholder="nom" aria-label="nom" aria-describedby="basic-addon1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><IoMdPerson /></span>
                                    <input type="text" name='prenom' value={user && user?.prenom} onChange={(e) => handleChange(e)} className="form-control" placeholder="prenom" aria-label="prenom" aria-describedby="basic-addon1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><IoMdPerson /></span>
                                    <select title='genre' name="genre" className="form-select" value={user && user?.genre} onChange={(e) => handleSelectChange(e)}>
                                        <option value="">Selectionnez votre genre</option>
                                        <option value="Homme">Homme</option>
                                        <option value="Femme">Femme</option>
                                    </select>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><GiWorld /></span>
                                    <input type="text" name='pays' value={user && user?.pays} onChange={(e) => handleChange(e)} className="form-control" placeholder="pays" aria-label="pays" aria-describedby="basic-addon1" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="col-lg-6 table-responsive" id='tabInfoUser'>
                <Table borderless>
                    <tbody className='text-start'>
                        <tr>
                            <td className='text-start'>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><MdWork /></span>
                                    <input type="text" name='profession' value={user && user?.profession} onChange={(e) => handleChange(e)} className="form-control" placeholder="Profession" aria-label="Profession" aria-describedby="basic-addon1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><BsTelephone /></span>
                                    <input type="tel" name='tel' value={user && user?.tel} onChange={(e) => handleChange(e)} className="form-control" placeholder="tel" aria-label="tel" aria-describedby="basic-addon1" />
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className='text-start'>
                                <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><FaCity /></span>
                                    <input type="text" name='adresse' value={user && user?.adresse} onChange={(e) => handleChange(e)} className="form-control" placeholder="adresse" aria-label="adresse" aria-describedby="basic-addon1" />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </div>
            <div className="mb-3 text-start">
                <button className='btn btn-primary me-2' type='submit'>Sauvegarder</button>
                <button className='btn btn-danger' type='button'>Annuler</button>
            </div>
        </form>
    )
}
export default FormUpdateInfoUser