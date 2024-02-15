import { Environment,OrbitControls,PerspectiveCamera } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";

export default function Scene () {
    const [thirdPerson, setThirdPerson] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([-6, 3.9, 6.21]);
    
    return(
        <Suspense>
            <Environment
                files={'./textures/envmap.hdr'}
                background={'both'}
            />

            <PerspectiveCamera makeDefault position={cameraPosition} fov={40} />
            <OrbitControls target={[-2.64, -0.71, 0.03]} />
        </Suspense>
    )
}