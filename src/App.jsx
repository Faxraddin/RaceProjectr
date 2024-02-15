import "./index.css";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import Scene from "./Scene";

export default function App(){
  return(
    <>
      <Canvas>
        <Physics
          broadphase="SAP"
          gravity={[0, -2.6, 0]}
        >
          <Scene />
        </Physics>
      </Canvas>

      <div class="controls">
        <p>press w a s d to move</p>
        <p>press k to swap camera</p>
        <p>press r to reset</p>
        <p>press arrows for flips</p>
      </div>
    </>
)};