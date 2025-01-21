import Image from 'next/image'
import React from 'react'
import SignUpForm from './SignUpForm'
import { CgMail } from "react-icons/cg";
import Link from 'next/link';
import GmailConnection from '@/components/GmailConnection';
import Head from 'next/head';

function Page() {
    return (
        <>
            <main className='millieu container-fluid'>
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col-md-6 bg-image bg-info d-none d-lg-block">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-8 text-center">
                                <h1 className='h3'>Gérez vos budgets en toute en efficacité</h1>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis, ducimus.</p>
                                <div className="mt-4">
                                    <Link className="btn btn-primary" href="/login">Se connecter</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                                <div className="mb-3">
                                    <GmailConnection />
                                </div>
                                <p className='mb-3 text-muted'>- ou - </p>
                                <h2 className='fw-bold text-center mb-4 h5'>Créer un compte</h2>
                                <SignUpForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Page