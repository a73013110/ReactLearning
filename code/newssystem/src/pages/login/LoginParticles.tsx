import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from 'react';

export default function LoginParticles() {
    const particlesInit = useCallback(async (engine: any) => {
        // console.log(engine);
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: any) => {
        // await console.log(container);
    }, []);

    return (
        <Particles id="tsparticles" url="./particles.json" init={particlesInit} loaded={particlesLoaded} />
    )
}
