varying vec3 Normal;
varying vec3 Position;
varying vec2 vUv;
uniform float uTime;
varying vec3 vNormal;

void main(){
    vUv=uv;
    vNormal=normal;
    vec3 pos=position;
    Position=position;
    vec4 localPosition=vec4(position,1.);
    vec4 worldPosition=modelMatrix*localPosition;
    vec4 viewPosition=viewMatrix*worldPosition;
    vec4 projectedPosition=projectionMatrix*viewPosition;
    
    gl_Position=projectedPosition;
}