import React, { Component, Suspense } from 'react';
import { Canvas, useThree, extend } from 'react-three-fiber';
/* import { DefaultThing } from './objects/DefaultObject';
import { DefaultTextObject } from './objects/DefaultTextObject'; */
import { Damier } from './objects/Damier';
import { OrbitControls } from '../assets/orbit';

extend({ OrbitControls })

const Scene = () => {
    const {
        camera,
        gl: { domElement }
    } = useThree();

    return (
        <>
            <group>
                <Damier></Damier>
            </group>
            <orbitControls args={[camera, domElement]} />
        </>
    )
}

class Home extends Component {

    render() {
        return (
            <div className="home-container">
                <div className="canvas-container">
                    <Canvas gl={{ antialias: false, alpha: false }} camera={{ position: [0, 0, 15] }} onCreated={({ gl }) => gl.setClearColor('lightpink')}>
                        <Suspense fallback={null}>
                            <Scene></Scene>
                        </Suspense>
                    </Canvas>
                </div>
            </div>
        );
    }
}

export default Home;