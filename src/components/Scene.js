import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Phone from "./Phone";

export default function Scene(){
    return (
        <div className="canvas">
            <Suspense >
                <Canvas orthographic camera={{ zoom: 120, position: [0, 0, 100] }} className="canvas">
                    <directionalLight position={[10,10,10]}/>
                    <directionalLight position={[10,10,-10]}/>
                    <Phone />
                    <OrbitControls 
                                enableZoom={false} 
                                minPolarAngle={.9} 
                                maxPolarAngle={2.2}
                                maxAzimuthAngle={.9}
                                minAzimuthAngle={-.9}
                                />

                </Canvas>
            </Suspense>
        </div>
    )
}