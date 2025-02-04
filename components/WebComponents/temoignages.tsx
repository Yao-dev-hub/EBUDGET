
"use client"
import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';

function Temoignages() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any) => {
        setIndex(selectedIndex);
    };

    return (
        <section className='mt-5'>
            <div className="container">
                <div className="row">

                    <div className="col-lg-8 text-center text-lg-start mb-5" data-aos="fade-up">
                        <p data-aos="fade-up"><span className='bg-vert-citron text-center fw-bold rounded-4 py-2 px-3'>Témoignages</span></p>
                        <h1 className='fw-bold'>
                            Ils ont transformé leur gestion financière avec <span className='text-danger'>E.</span>BUDGET !
                        </h1>
                    </div>

                    <div className="col-lg-6 mb-3" data-aos="fade-up">
                        <img src="/images/t5.webp" className='img-fluid object-fit-cover rounded-4' style={{ width: "100%", height: "60vh" }} alt="ebuget" />
                    </div>

                    <div className="col-lg-6 mb-3" data-aos="fade-up">
                        <div className="d-flex align-items-center p-5 bg-vert-nuit rounded-4 border-0" style={{ width: "100%", height: "60vh" }}>
                            <div className="card-body text-center">
                                <h2 className="h4 fw-bold text-vert-citron mb-4">Ce que nos clients disent de E.Budget</h2>

                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item className='px-lg-5'>
                                        <div className="card bg-jaune-oeuf rounded-4 text-start p-5 t-100">
                                            <p>
                                                Avec eBudget, j’ai enfin une vision claire de mes finances. L’IA m’aide à repérer mes dépenses inutiles et à mieux gérer mon budget professionnel et personnel.
                                            </p>
                                            <div className="flex-warp d-flex align-items-center justify-content-between">
                                                <div className="d-flex gap-4 align-items-center">
                                                    <img className="img-fluid w-25 rounded-circle" alt="image" src="/images/user.png" />
                                                    <div>
                                                        <h3 className='h5 fw-bold'>Jean-Marc K</h3>
                                                        <span>Entrepreneur</span>
                                                    </div>
                                                </div>
                                                <img className="img-fluid w-25" src="/images/r1.png" alt="image" />
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item className='px-lg-5'>
                                        <div className="card bg-jaune-oeuf rounded-4 text-start p-5 t-100">
                                            <p>
                                                Avant, je perdais souvent le fil de mes dépenses. Grâce à eBudget, je sais exactement où va mon argent et je peux mettre de côté chaque mois sans stress.
                                            </p>
                                            <div className="flex-warp d-flex align-items-center justify-content-between">
                                                <div className="d-flex gap-4 align-items-center">
                                                    <img className="img-fluid w-25 rounded-circle" alt="image" src="/images/user.png" />
                                                    <div>
                                                        <h3 className='h5 fw-bold'>Awa D</h3>
                                                        <span>Enseignante</span>
                                                    </div>
                                                </div>
                                                <img className="img-fluid w-25" src="/images/r1.png" alt="image" />
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                    <Carousel.Item className='px-lg-5'>
                                        <div className="card bg-jaune-oeuf rounded-4 text-start p-5 t-100">
                                            <p>
                                                Gérer un petit budget en tant qu’étudiant n’est pas facile, mais eBudget m’a aidé à mieux répartir mes dépenses et éviter les fins de mois difficiles. L’application est simple et efficace !
                                            </p>
                                            <div className="flex-warp d-flex align-items-center justify-content-between">
                                                <div className="d-flex gap-4 align-items-center">
                                                    <img className="img-fluid w-25 rounded-circle" alt="image" src="/images/user.png" />
                                                    <div>
                                                        <h3 className='h5 fw-bold'>Mamadou</h3>
                                                        <span>Étudiant</span>
                                                    </div>
                                                </div>
                                                <img className="img-fluid w-25" src="/images/r1.png" alt="image" />
                                            </div>
                                        </div>
                                    </Carousel.Item>

                                </Carousel>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Temoignages