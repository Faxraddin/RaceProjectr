import { useBox } from "@react-three/cannon";
import { useLoader,useFrame } from "@react-three/fiber";
import { useEffect,useRef } from "react";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

export default function Car() {
    const mesh = useLoader(
        GLTFLoader,
        '/models/car.glb'
    ).scene;

    const position = [-1.5,0.5,3];
    const width = 0.15;
    const height = 0.7;
    const front = 0.15;
    const wheelRadius = 0.05;

    const chassisBodyArgs = [width, height, front * 2];
    const [chassisBody,chassisApi] = useBox(
        ()=>({
            args: chassisBodyArgs,
            mass: 150,
            position
        }),
        useRef(null)
    );

    useEffect(()=>{
        mesh.scale.set(0.0012,0.0012,0.0012);
        mesh.children[0].position.set(-365,-18,-67);
    },[mesh]);

    return(
        <mesh ref={chassisBody}>
            <meshBasicMaterial transparent={true} opacity={0.3}/>
            <boxGeometry args={chassisBodyArgs}/>
        </mesh>
    )
};