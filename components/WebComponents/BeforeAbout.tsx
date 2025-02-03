import React from 'react'
import ImageAbout from './ImageAbout'
import Image from 'next/image'


function BeforeAbout() {
    return (
        <section>
            <div className='container'>
                <div className="row pb-5">
                    <div className="col-lg-8 mb-3" data-aos="fade-up" data-aos-delay="1000">
                        <div className="card bg-transparent border-0 t-100" >
                            <Image className='rounded-4' src="/images/st2.avif" alt='image' width={100} height={100} layout='responsive' />
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4 mb-lg-0" data-aos="fade-down" data-aos-delay="1000">
                        <div className="card bg-vert-citron rounded-4 border-0 t-100" >
                            <div className="card-body align-items-center d-flex h-100 t-100">
                                <div>
                                    <h2 className='h3 fw-bold'>Contrôlez efficacement vos revenues</h2>
                                    <p className='my-4'>Obtenez en temps reel des statisques pour mieux gérer vos finances en toute quiètude.</p>
                                    <img src="/images/statistic-image.png" alt="img" className='img-fluid' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BeforeAbout