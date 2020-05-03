#pragma glslify: grid = require('glsl-grid')

varying vec2 vUv;
varying vec3 vNormal;
uniform float uTime;
varying vec3 Position;

void main() {
        vec3 color = vec3(0.9, 0.9, 0.9);
        vec3 light = vec3( 0., 0., 1. );
        light = normalize( light );

        float lines = grid(Position, vec3(1.0, 1.0, 1.0), 1.0);

        float dProd = dot( vNormal, light ) * 0.5 + 0.5;
    
        vec4 gray = vec4( vec3( color.r * 0.3 + color.g * 0.59 + color.b * 0.11 ), 1.0 );

        gl_FragColor = gray * vec4( vec3(1. - lines) * vec3( color ) * vec3(dProd), 1.0 );
}