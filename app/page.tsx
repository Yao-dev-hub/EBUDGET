"use client"
import BeforeAbout from "@/components/WebComponents/BeforeAbout";
import About from "@/components/WebComponents/About";
import FirstComponent from "@/components/WebComponents/FirstComponent";
import NavWeb from "@/components/WebComponents/NavWeb";
import Services from "@/components/WebComponents/Services";
import AOS from "aos";
import 'aos/dist/aos.css';
import "@/css/home.css"
import { useEffect } from "react";
import Partenaires from "@/components/WebComponents/Partenaires";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: 'ease-in-out',
      offset: 100
    });
  }, [])

  return (
    <>
      <NavWeb />
      {/*  <ParticlesComponents /> */}
      <div className="bg-blanc-oeuf">
        <FirstComponent />
        <BeforeAbout />
        <Partenaires />
      </div>
      <About />
      <Services />
    </>
  );
}

