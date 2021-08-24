import React from 'react'; // impostando o App react
import logo from './Image/logo.png'; // Adicionando a logo linkedin 

function Topo() {
    return (
      <div>
          <div class="topo">
              <div class="itens-topo">
                     <h1 class="titulo"><img src={logo} alt={'logo'} class="logo"/>LinkedIn</h1>    
              </div>             
          </div>
  
      </div>
    );
  }
  
  export default Topo;
  