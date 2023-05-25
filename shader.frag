#version 330 core

// Variable de sortie (sera utilisé comme couleur)
out vec4 color;
error
//Un Fragment Shader minimaliste
void main (void)
{
  //Couleur du fragment
  color = vec4(1.0,0.0,0.0,1.0);
}
