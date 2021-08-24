import React from 'react';
import Dev_Web from './Image/Dev_Web.png';
import foto from './Image/foto.png';

function Perfil() {
    return (
        <div class="perfil">
            <img src={Dev_Web} alt={Dev_Web} class="img-dev-web"/>
            <img src={foto} alt={foto} class="foto-perfil"/>

            <h1 class="nome">Roberto Barros</h1>
            <h2 class="titulo-perfil">Desenvolvedor Web | HTML | CSS | JS | REACTJS | PHP | LARAVEL | GIT .</h2>

            <div class="linha"></div>

            <h3 class="titulo-perfil">Quem viu seu perfil</h3>
            <h4 class="titulo-perfil">Viram sua publicação</h4>

            <div class="linha"></div>

            <h5 class="titulo-perfil">Recentes</h5>

        </div>  
    );
  }
  
  export default Perfil;
  