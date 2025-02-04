"use client"
import React, { useEffect, useState } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { FaHome } from "react-icons/fa"
import Table from 'react-bootstrap/Table'
import Image from 'next/image'
import { UsersType } from '@/Type'
import { MdEditSquare } from "react-icons/md";
import FormUpdateInfoUser from './FormUpdateInfoUser'
import { IoMdCloseCircle } from 'react-icons/io'


function NavigateBarUser() {
    const [user, setUser] = useState<UsersType>({})
    const [show, setShow] = useState(false)
    const [checked, setChecked] = useState(false)

    const showForm = () => {
        setShow(!show)
    }

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem("userInfo")!))
    }, [])

    return (
        <div className='container mt-3'>

            <div className="row p-3 rounded-3 align-items-center bg-light">
                <div className="col-lg-6">
                    <h1 className="h3 mb-0">Profil Utilisateur</h1>
                    <p className='mb-0'>Bienvenue sur votre page profil utilisateur</p>
                </div>
                <div className="col-lg-6">
                    <Breadcrumb className='d-flex justify-content-end text-md-center  '>
                        <Breadcrumb.Item href="/clients/dashbord/dash"><FaHome className='text-dark' /></Breadcrumb.Item>
                        <Breadcrumb.Item href="/clients/dashbord/budgets" active>Mes budgets</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className="row bg-light mt-5 d-md-flex justify-content-md-center text-md-center">
                <div className="col-lg-12 rounded-4" id='backGround'>
                    <div className="userPhoto rounded-3">
                        <Image src="/images/ebudget-app.avif" className='rounded-3' layout='responsive' width={100} height={100} alt="aa" />
                    </div>
                    {
                        user ? (
                            <div className="userInfos">
                                <span className='text-white text-sm-center'>{user.nom}</span>
                                <span className='text-start ms-2 fs-6 text-white ' >{user.prenom}</span>
                            </div>
                        ) : (
                            <div className="userInfos">
                                <span className='text-start text-white ms-2'>Nom</span>
                                <span className='text-white ms-2'>Prenom</span>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-lg-12 d-flex bg-light justify-content-between p-1">
                    <h4>Information personnelle</h4>
                    <button type='button' className='btn btn-warning btn-sm' onClick={() => showForm()}><MdEditSquare className='fs-5 ' />Modifier</button>
                </div>
            </div>

            {
                !show ? (
                    <div className="row mt-5 d-md-flex justify-content-md-center text-md-center my-2">
                        {user ? (
                            <>
                                <div className="col-lg-6 table-responsive" id='tabInfoUser'>
                                    <Table striped hover>
                                        <tbody className='text-start'>
                                            <tr>
                                                <td className='text-start'>Nom</td>
                                                <td>{user.nom}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start'>Prenom</td>
                                                <td>{user.prenom}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start'>Genre</td>
                                                <td>{user.genre}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start'>ville</td>
                                                <td>{user.adresse}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                                <div className="col-lg-6 table-responsive" id='tabInfoUser'>
                                    <Table striped hover>
                                        <tbody className='text-start'>
                                            <tr>
                                                <td className='text-start'>Email</td>
                                                <td>{user.email}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start'>Profession</td>
                                                <td>{user.profession}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start'>Telephone</td>
                                                <td>{user.tel}</td>
                                            </tr>
                                            <tr>
                                                <td className='text-start'>Pays</td>
                                                <td>{user.pays}</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>
                            </>
                        ) : (
                            <p>Aucune information disponible.</p>
                        )}
                    </div>
                ) : (
                    <div className="row mt-5 d-md-flex justify-content-md-center text-md-center my-2">
                        <FormUpdateInfoUser user={user} setUser={setUser} onClick={() => showForm()} />
                    </div>
                )
            }

        </div >
    )
}

export default NavigateBarUser