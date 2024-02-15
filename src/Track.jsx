import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { TextureLoader } from "three/src/loaders/TextureLoader";

export default function Track() {
    const result = useLoader(
        GLTFLoader,
        '/models/track.glb'
    );

    const colorMap = useLoader(
        TextureLoader,
        '/textures/track.png'
    );

    useEffect(()=>{
        colorMap.anisotropy = 16
    },[colorMap]);

    let geometry = result.scene.children[0].geometry;

    return(
        <mesh>
            <primitive attach={'geometry'} object={geometry}/>
            <meshBasicMaterial
                toneMapped={false}
                map={colorMap}
            />
        </mesh>
    )
}