"use client"
import { useCallback } from "react";
import Particles from "react-particles";

function ParticlesComponents() {

    const particlesInit = async (main) => {
        await loadFull(main);
      };
      
    return (
        <Particles id="tsparticles" url="http://foo.bar/particles.json" init={particlesInit} loaded={particlesLoaded} />
    );
}

export default ParticlesComponents