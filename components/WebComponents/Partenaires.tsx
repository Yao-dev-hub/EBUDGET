import { SlideOptions } from '@/controllers/SlideOptions';
import Image from 'next/image';
import React from 'react'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";

function Partenaires() {
    return (
        <div className="container pb-5" id='about'>
            <div className='d-flex justify-content-between table-responsive'>
                <img src="/images/p1.png" className='me-2' style={{ height: "40px" }} alt='ebudget' />
                <img src="/images/p2.png" className='me-2' style={{ height: "40px" }} alt='ebudget' />
                <img src="/images/p3.png" className='me-2' style={{ height: "40px" }} alt='ebudget' />
                <img src="/images/p4.png" className='me-2' style={{ height: "40px" }} alt='ebudget' />
                <img src="/images/p5.png" className='me-2' style={{ height: "40px" }} alt='ebudget' />
            </div>
        </div>
    )
}

export default Partenaires