import React from 'react';
import foto1 from './Image/foto1.png';
import video from './Image/video.png';
import evento from './Image/evento.png';
import artigo from './Image/artigo.png';
  

function Publicar() {
  return (
      <div class="publicar">
          <input type="text" id="publicar" class="publica" placeholder="Cameçar a publicar..."/>          
          <p>
          <a href={foto1} class="links"><img src={foto1} alt={foto1} class="foto1"/>Foto</a>
          <a href={video} class="links"><img src={video} alt={video} class="foto1"/>Video</a>
          <a href={evento} class="links"><img src={evento} alt={evento} class="foto1"/>Evento</a>
          <a href={artigo} class="links"><img src={artigo} alt={artigo} class="foto1"/>Artigo</a>
          </p>                   
      </div>   
  );
}

export default Publicar;
