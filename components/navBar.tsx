"use client"
import Link from 'next/link'
import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'
import { FaCircleUser } from "react-icons/fa6";
import { UsersType } from '@/Type';

function NavBar() {

    const path = document.location.pathname

    const user = localStorage.getItem("userInfo")
    if (!user) {
        document.location.href = "/clients/users-pages/login"
        return;
    }



    if (path !== "/clients/users-pages/sign-up" && path !== "/clients/users-pages/login") {

        return (
            <>
                <Navbar expand="lg" className="bg-body-tertiary ">
                    <Container>
                        <Navbar.Brand href="/"><span className="text-danger fw-bold">e</span>BUDGET</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav mb-lg-0">
                            <Nav className="mx-auto">
                                <Nav.Link href="/clients/dashbord/dash" className="btn btn-warning fw-bold btn-sm ">Tableau de bord</Nav.Link>
                                <Nav.Link href="/clients/dashbord/budgets/new-budget" className=" btn btn-warning fw-bold btn-sm left-margin mx-2">Mes Budgets</Nav.Link>
                                <Nav.Link href="/clients/dashbord/transactions" className=" btn btn-warning fw-bold btn-sm">Mes transactions</Nav.Link>
                            </Nav>

                            <Dropdown className='d-flex justify-content-center justify-content-md-start'>
                                {
                                    user ? (
                                        <>
                                            <Dropdown.Toggle variant="light" id="dropdown-basic" className='d-flex justify-content-center '  >
                                                <FaCircleUser className='fs-5' /><span className='ms-2 '>Nom</span>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='form-control mb-md-2'>
                                                <Dropdown.Item href="#/action-1" className='d-flex justify-content-center '>Se Deconnecter</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </>
                                    ) : (
                                        <>
                                            <Dropdown.Toggle variant="success" id="dropdown-basic" className='d-flex justify-content-center justify-content-md-start'>
                                                <FaCircleUser />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className='d-flex justify-content-center justify-content-md-start'>
                                                <Dropdown.Item href="#/action-1">Se Connecter</Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">S'inscrire</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </>
                                    )
                                }
                            </Dropdown>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>

        )
    }

}

export default NavBar

{/* <div className="dropdown">
                            <button className="btn btn-outline-primary rounded-circle dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown button
                            </button>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" href="/dashbord/account">Mon compte</Link></li>
                                <li><a className="dropdown-item" href="#a" onClick={() => deconnect()}>Se deconnecter</a></li>
                            </ul>
                        </div> */}