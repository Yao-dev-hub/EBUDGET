import React from 'react'
import { FaCheckCircle, FaMoneyBillWave } from 'react-icons/fa'
import SectionFonctionalite from './SectionFonctionalite'

function About() {
    return (
        <section className="bg-vert-nuit" data-aos="fade-up">
            <div className='container py-5'>
                <div className="row align-items-center">
                    <div className="col-lg-7 mb-3 text-center text-lg-start">
                        <h2 className='h6 mb-5' data-aos="fade-up">
                            <span className='rounded-4 bg-vert-citron p-3 text-center'>A propos de nous</span>
                        </h2>
                        <h1 className='text-white fs-1 fw-bold mb-4' data-aos="fade-up">Votre chemin vers des décisions financières intelligentes.</h1>
                        <p className='text-white col-lg-10' data-aos="fade-up">
                            E.Budget est une application intuitive de gestion des budgets qui vous aide à créer, organiser et suivre vos dépenses en toute simplicité. Grâce à une interface claire et des outils interactifs, elle vous permet de mieux maîtriser vos finances et de prendre des décisions éclairées pour un avenir financier serein. 🚀💰
                        </p>
                        <div className="col-lg-10">
                            <p className='bg-vert-pale p-3 rounded-4 text-white fw-bold' data-aos="fade-up">
                                <span className='text-vert-citron h5 me-2'><FaCheckCircle /></span>
                                Votre guide vers une gestion financière optimisée.
                            </p>
                            <p className='bg-vert-pale p-3 rounded-4 text-white fw-bold' data-aos="fade-up">
                                <span className='text-vert-citron h5 me-2'><FaCheckCircle /></span>
                                Votre allié pour un suivi clair et efficace de vos dépenses
                            </p>
                            <p className='bg-vert-pale p-3 rounded-4 text-white fw-bold' data-aos="fade-up">
                                <span className='text-vert-citron h5 me-2'><FaCheckCircle /></span>
                                Un outil simple pour organiser votre budget au quotidien.
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-5" data-aos="fade-up">
                        <img src="/images/st3.jpg" className='img-fluid object-fit-cover rounded-4' style={{ width: "100%", height: "80vh" }} alt="statistics image" />
                    </div>
                </div>

                <div className="row">
                    <h3 className='text-center text-vert-citron my-5' data-aos="fade-up">Gérez vos budgets en toute sérénité grâce à notre IA</h3>
                    <div className="col-lg-4 mb-3" data-aos="fade-up">
                        <div className="card border-0 bg-vert-pale rounded-4 t-100">
                            <div className="card-body p-3 text-white">
                                <div className='icons mb-3'><FaMoneyBillWave className='icons-items' /></div>
                                <h2 className="h5 fw-bold text-white">Création et organisation simplifiées</h2>
                                <p>
                                    Créez des budgets personnalisés grâce à l'IA. Organisez vos dépenses en quelques clics. Visualisez précisément où va votre argent. Profitez d’une interface simple, intuitive et intelligente.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3" data-aos="fade-up">
                        <div className="card border-0 bg-vert-pale rounded-4 t-100">
                            <div className="card-body p-3 text-white">
                                <div className='icons mb-3'><FaMoneyBillWave className='icons-items' /></div>
                                <h2 className="h5 fw-bold text-white">Analyse en temps réel grace à notre IA</h2>
                                <p>
                                    Suivez vos finances à tout moment grâce à l'IA. Consultez des graphiques clairs et détaillés. Recevez des alertes intelligentes de notre IA en cas de dépassement. Gardez le contrôle total sur votre budget.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-3" data-aos="fade-up">
                        <div className="card border-0 bg-vert-pale rounded-4 t-100">
                            <div className="card-body p-3 text-white">
                                <div className='icons mb-3'><FaMoneyBillWave className='icons-items' /></div>
                                <h2 className="h5 fw-bold text-white">Optimisation et maîtrise des finances</h2>
                                <p>
                                    Identifiez vos dépenses superflues grâce à l'IA. Fixez des objectifs d’épargne précis et personnalisés. Prenez des décisions financières éclairées avec l’analyse intelligente de vos habitudes. Avancez sereinement vers la stabilité financière, guidé par l'IA.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About