"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'
import { FaCircleUser } from "react-icons/fa6";
import { UsersType } from '@/Type';

function NavBar() {

    const path = document.location.pathname
    const user: UsersType = JSON.parse(localStorage.getItem("userInfo")!)
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
                                    user && user !== undefined && (
                                        <div>
                                            <img src={user.photo !== "" ? user.photo : "/img/user.png"} alt="user" style={{ width: "30px", height: "30px", borderRadius: "50%" }} />
                                            <NavDropdown title={user.nom} id="basic-nav-dropdown">
                                                <NavDropdown.Item href="#action/3.1">Se deconnecter</NavDropdown.Item>
                                            </NavDropdown>
                                        </div>
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
