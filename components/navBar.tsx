"use client"
import Dropdown from 'react-bootstrap/Dropdown'
import { UsersType } from '@/Type';
import { useEffect, useState } from 'react'
import Link from 'next/link'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUser } from "react-icons/fa";







function NavBar() {

    const [path, setPath] = useState("")
    const [user, setUser] = useState<UsersType>({})

    const deconnecte = async () => {
        setTimeout(() => {
            localStorage.removeItem("userInfo")!
            location.href = "/clients/users-pages/login"
        })
    }

    useEffect(() => {
        setTimeout(() => {
            const userInfo = localStorage.getItem("userInfo")!
            setPath(window.location.pathname)
            setUser(JSON.parse(userInfo))
        }, 100)
    }, [])

    if (path !== "/clients/users-pages/sign-up" && path !== "/clients/users-pages/login") {

        return (
            <>
                <Navbar expand="md" bg="light" variant="light" className="mb-3">
                    <Container>
                        {/* Titre de la navbar */}
                        <Navbar.Brand href="/"><span className="text-danger fw-bold">e</span>BUDGET</Navbar.Brand>

                        {/* Bouton pour ouvrir le Offcanvas sur petits écrans */}
                        <Navbar.Toggle aria-controls="offcanvasNavbar" />

                        {/* Contenu du Offcanvas */}
                        <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                            <Offcanvas.Header closeButton>
                                <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                                <Nav className="mx-auto">
                                    <Link href="/clients/dashbord/dash" className=" fw-bold btn-sm view-mobile mb-2 text-center ">Tableau de bord</Link>
                                    <Link href="/clients/dashbord/budgets/new-budget" className="  fw-bold btn-sm left-margin mx-2 view-mobile mb-2 text-center ">Mes Budgets</Link>
                                    <Link href="/clients/dashbord/transactions" className="  fw-bold btn-sm view-mobile mb-2 text-center">Mes transactions</Link>
                                </Nav>
                                <Dropdown className='d-flex justify-content-center justify-content-md-start'>
                                    {
                                        user && user !== undefined && (
                                            <div>
                                                {/* <img src={user.photo !== "" ? user.photo : "/img/user.png"} alt="user" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /> */}
                                                <NavDropdown title={user.nom} id="nom-user">
                                                    {
                                                        user.typeConnection ? user.typeConnection === "standard" && (
                                                            <>
                                                                <NavDropdown.Item href="/clients/dashbord/profilUser" ><FaUser /> profil</NavDropdown.Item>
                                                                <NavDropdown.Item href="#action/3.1" onClick={() => deconnecte()} >Se deconnecter</NavDropdown.Item>
                                                            </>
                                                        ) :

                                                            (
                                                                <>
                                                                    <NavDropdown.Item href="#action/3.1" onClick={() => deconnecte()} >Se deconnecter</NavDropdown.Item>
                                                                </>
                                                            )
                                                    }

                                                </NavDropdown>
                                            </div>
                                        )
                                    }
                                </Dropdown>
                            </Offcanvas.Body>
                        </Navbar.Offcanvas>
                    </Container>
                </Navbar>
            </>

        )
    }

}

export default NavBar




