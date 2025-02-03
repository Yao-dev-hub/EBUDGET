"use client"
import Dropdown from 'react-bootstrap/Dropdown'
import { UsersType } from '@/Type';
import { useEffect, useState } from 'react'
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { FaUser } from "react-icons/fa";
import { MdOutlineRestartAlt } from "react-icons/md";
import { useRouter } from "next/navigation";
import { FiArrowUpRight } from "react-icons/fi";
import Link from 'next/link';





function NavWeb() {
    const router = useRouter()

    const [user, setUser] = useState<UsersType | null>(null)


    return (
        <>
            <Navbar expand="md" bg="light" variant="light" className="mb-3 py-3 fixed-top">
                <Container>
                    {/* Titre de la navbar */}
                    <Navbar.Brand href="/"><span className="text-danger fw-bold">E.</span>BUDGET</Navbar.Brand>

                    {/* Contenu du Offcanvas */}
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                        <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"><span className="text-danger fw-bold">E.</span>BUDGET</Offcanvas.Title>
                        </Offcanvas.Header>
                        <Offcanvas.Body >
                            <Nav className="flex-grow-1 pe-3 justify-content-center">
                                <Nav.Link href="#">Accueil</Nav.Link>
                                <Nav.Link href="#about">A propos</Nav.Link>
                                <Nav.Link href="#faq" >Faq</Nav.Link>
                                <Nav.Link href="#contact-us" >Contactez-nous</Nav.Link>
                            </Nav>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Link className='btn-emphasis m-0 d-none d-md-block' href="/clients/users-pages/sign-up">Commencer<FiArrowUpRight /></Link>

                    {/* Bouton pour ouvrir le Offcanvas sur petits écrans */}
                    <Navbar.Toggle aria-controls="offcanvasNavbar" className='m-0 border-0 shadow-none' />

                </Container>
            </Navbar>
        </>
    )
}

export default NavWeb




