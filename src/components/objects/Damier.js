import React, { useRef, useMemo } from 'react'
import { useFrame } from 'react-three-fiber'
import fragmentShader from '../../assets/shaders/basic.frag';
import vertexShader from '../../assets/shaders/basic.vert';

export function Damier() {
    
    const ref = useRef();
    useFrame(() => {
        ref.current.material.uniforms.uTime.value += 0.01;
        ref.current.material.extensions = {
            derivatives: true
         };
    });

    const data = useMemo(
        () => ({
            uniforms: {
                uTime: { value: 0 },
                lights: true
            },
            fragmentShader,
            vertexShader,
        }),
        []
    )

    return (
        <group position={[0, 0, 9]}>
            <mesh ref={ref}>
                <planeBufferGeometry attach="geometry" args={[10, 10,  128, 128]}></planeBufferGeometry>
                <shaderMaterial attach="material" {...data} />
            </mesh>
        </group>
    )
}
