import React from 'react';
import foto from './Image/foto.png';
import not from './Image/not.jpg';
import gostar from './Image/gostar.png';
import comente from './Image/comente.png';
import compartilhar from './Image/compartilhar.png'
import enviar from './Image/enviar.png';

function Feed() {
  return (
      <div class="feed">
        <img src={foto} alt={foto} class="foto-feed"/> 
        <h1 class="nome-feed">Roberto Barros</h1>
        <h2 class="nome2-feed">Desenvolvedor Web</h2> 

        <form class="form">
          <h3>Embora tenha um conceito simples, o software engloba um vasto conjunto de aplicações na área de Tecnologia de Informação (TI). Um dos primeiros relatos de um software foi registrado no século XIX quando Ada Lovelace, conhecida como a primeira programadora da história, escreveu um algoritmo que possibilitou à Máquina Analítica calcular uma sequência chamada Números de Bernoulli.
          Fonte: Tecmundo    
          </h3>  
          <img src={not} alt={not} class="img-post"/>       
        </form> 

        <img src={gostar} alt={gostar} class="opcoes"/>
        <img src={comente} alt={comente} class="opcoes"/>   
        <img src={compartilhar} alt={compartilhar} class="opcoes"/>   
        <img src={enviar} alt={enviar} class="opcoes"/>      
      </div> 
  );
}

export default Feed;
