#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;

//Un Fragment Shader minimaliste

 void main (void)
{
float x=gl_FragCoord.x/800.0-0.5;
float y=gl_FragCoord.y/800.0-0.5;
float r=0.0;
float g=0.0;
if(x*x+y*y>0.125){
g=1.0;
r=0.0;
}
else{
g=0.0;
r=1.0;
}
color = vec4(r,g,0.0,0.0);
}
