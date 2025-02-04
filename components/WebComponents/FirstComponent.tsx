"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Tilt } from 'react-tilt'
import { FiArrowUpRight } from 'react-icons/fi'

function FirstComponent() {

    const defaultOptions = {
        reverse: false,  // reverse the tilt direction
        max: 35,     // max tilt rotation (degrees)
        perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
        scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
        speed: 1000,   // Speed of the enter/exit transition
        transition: true,   // Set a transition on enter/exit.
        axis: null,   // What axis should be disabled. Can be X or Y.
        reset: true,    // If the tilt effect has to be reset on exit.
        easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
    }


    return (
        <div>
            <div className="container">
                <div className="row container-home align-items-center">
                    <div className="col-lg-6 rounded-3 order-first order-lg-last mb-4 mb-md-0" data-aos="flip-right" >
                        <Tilt options={defaultOptions}>
                            <Image src="/images/afrique-du-sud-monnaie.jpg" layout="responsive" width={100} height={100} className="img-fluid rounded-5" alt="image" />
                        </Tilt>
                    </div>
                    <div className="col-lg-6 text-center text-md-start">
                        <h1 className='mb-3' data-aos="fade-up" >Favorisez votre avenir financier grâce à l'innovation et à l'IA</h1>
                        {/* <h1 id="Grand_titre" className="mb-3 fw-bold">Gérez votre argent intelligemment</h1> */}
                        <p className='mb-4 fw-semi-bold' data-aos="fade-up" >
                            Prenez le contrôle de votre budget avec <span className='text-danger'>E.</span>BUDGET, l'application qui vous aide à suivre vos revenus et dépenses en toute simplicité. Visualisez vos transactions en temps réel, fixez des objectifs d’épargne adaptés à vos besoins, et optimisez vos finances en quelques clics grâce à l'intelligence artificielle.
                        </p>
                        <Link className='btn-dark-emphasis' href="/clients/users-pages/sign-up" data-aos="fade-down">Commencer gratuitement<FiArrowUpRight /></Link>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FirstComponent