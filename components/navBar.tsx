"use client"
import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
import Dropdown from 'react-bootstrap/Dropdown'
import { UsersType } from '@/Type';
import { useEffect, useState } from 'react';

function NavBar() {

    const [path, setPath] = useState("")
    const [user, setUser] = useState<UsersType>({})

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
                <Navbar expand="lg" className="bg-body-tertiary ">
                    <Container>
                        <Navbar.Brand href="/"><span className="text-danger fw-bold">e</span>BUDGET</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav mb-lg-0">
                            <Nav className="mx-auto">
                                <Link href="/clients/dashbord/dash" className="btn btn-warning fw-bold btn-sm ">Tableau de bord</Link>
                                <Link href="/clients/dashbord/budgets/new-budget" className=" btn btn-warning fw-bold btn-sm left-margin mx-2">Mes Budgets</Link>
                                <Link href="/clients/dashbord/transactions" className=" btn btn-warning fw-bold btn-sm">Mes transactions</Link>
                            </Nav>

                            <Dropdown className='d-flex justify-content-center justify-content-md-start'>
                                {
                                    user && user !== undefined && (
                                        <div>
                                            {/* <img src={user.photo !== "" ? user.photo : "/img/user.png"} alt="user" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /> */}
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
