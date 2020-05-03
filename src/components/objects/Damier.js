import React, { useRef, useMemo } from 'react'
import { useFrame } from 'react-three-fiber'
import { vertexShader } from '../../assets/shaders/damier_shaders';
import fragmentShader from '../../assets/shaders/basic.frag';

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
            fragmentShader: fragmentShader,
            vertexShader,
        }),
        []
    )

    return (
        <group position={[0, 0, 9]}>
            <mesh ref={ref}>
                <planeBufferGeometry attach="geometry" args={[10, 10,  128, 128]}></planeBufferGeometry>
                {/* <sphereGeometry attach="geometry" args={[2, 128, 128]} /> */}
                <shaderMaterial attach="material" {...data} />
            </mesh>
        </group>
    )
}
