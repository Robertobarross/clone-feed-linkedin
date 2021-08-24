import React from 'react'; // impostando o App react
import home from './Image/home.png';
import rede from './Image/rede.png';
import vagas from './Image/vagas.png';
import mensagens from './Image/mensagens.png';
import notificacoes from './Image/notificacoes.png';
import foto from './Image/foto.png';


function Menu() {
    return (
      <div class="menu">
          <a href={home} class="links"><img src={home} alt={home} class="imglinks"/>Home</a>
          <a href={rede} class="links"><img src={rede} alt={rede} class="imglinks"/>Rede</a>       
          <a href={vagas} class="links"><img src={vagas} alt={vagas} class="imglinks"/>Vagas</a>       
          <a href={mensagens} class="links"><img src={mensagens} alt={mensagens} class="imglinks"/>Mens</a>       
          <a href={notificacoes} class="links"><img src={notificacoes} alt={notificacoes} class="imglinks"/>Notific</a>   
          <img src={foto} alt={foto} class="imglinks"/>    
          <select class="select">
              <option>Eu</option>
              <option>Perfil</option>
              <option>Conta</option>
              <option>Ajuda</option>
              <option>Idioma</option>
              <option>Sair</option>             
          </select>            
      </div>
    );
  }
  
  export default Menu;