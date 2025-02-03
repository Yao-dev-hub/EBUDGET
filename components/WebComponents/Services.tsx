import Image from 'next/image'
import React from 'react'
import { FaMoneyBillWave, FaRegLightbulb } from 'react-icons/fa'
import { FaChartLine, FaPiggyBank } from 'react-icons/fa6'
import { GiWallet } from 'react-icons/gi'

function Services() {
    return (
        <section className="bg-blanc-oeuf" data-aos="fade-up">
            <div className='container py-5'>
                <div className="row text-center justify-content-center align-items-center">
                    <p data-aos="fade-up"><span className='bg-vert-citron text-center fw-bold rounded-4 py-2 px-3'>Nos Objectifs</span></p>

                    <div className="col-lg-8 text-center mb-5" data-aos="fade-up">
                        <h1 className='text-center fw-bold'>
                            Vous offrir un outil intelligent, simple et efficace pour gérer vos budgets
                        </h1>
                    </div>

                    <div className="col-lg-12">
                        <div className="row align-items-center">

                            <div className="col-lg-6 mb-3" data-aos="fade-up">
                                <img src="/images/ia4.webp" className='img-fluid object-fit-cover rounded-4' style={{ width: "100%", height: "80vh" }} alt="statistics image" />
                            </div>

                            <div className="col-lg-6 mb-3">

                                <div className="card p-4 text-start bg-light rounded-4 mb-3" data-aos="fade-up">
                                    <div className="card-body d-lg-flex align-items-center ">
                                        <div className='icons-2 me-4 mb-3'><FaRegLightbulb /></div>
                                        <div>
                                            <h2 className="h5 fw-bold">Rendre la gestion budgétaire accessible</h2>
                                            <p className='mb-0'>
                                                Nous simplifions le suivi de vos finances en utilisant l'IA, permettant ainsi une planification facile et rapide de vos budgets.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-4 text-start bg-light rounded-4 mb-3" data-aos="fade-up">
                                    <div className="card-body d-lg-flex align-items-center ">
                                        <div className='icons-2 me-4 mb-3'><FaChartLine /></div>
                                        <div>
                                            <h2 className="h5 fw-bold">Optimiser vos finances personnelles</h2>
                                            <p className='mb-0'>
                                                L'IA analyse vos habitudes de dépenses pour vous offrir des solutions personnalisées et vous aider à mieux gérer votre argent.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="card p-4 text-start bg-light rounded-4 mb-3" data-aos="fade-up">
                                    <div className="card-body d-lg-flex align-items-center ">
                                        <div className='icons-2 me-4 mb-3'><FaPiggyBank /></div>
                                        <div>
                                            <h2 className="h5 fw-bold">Encourager l’épargne et la stabilité financière</h2>
                                            <p className='mb-0'>
                                                Nos outils intelligents vous aident à définir des objectifs d’épargne réalistes et à suivre vos progrès vers une stabilité financière durable.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services