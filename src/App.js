import React from 'react';
import Topo from './pages/Topo';
import Menu from './pages/Menu';
import Perfil from './pages/Perfil';
import Pesquisar from './pages/Pesquisar';
import Publicar from './pages/Publicar';
import Feed from './pages/Feed';
import './App.css';

function App() {
  return (     
    <div className="App">
      <div class="body">
        <Topo></Topo>
        <Menu></Menu>
        <Perfil></Perfil>
        <Pesquisar></Pesquisar>
        <Publicar></Publicar>
        <Feed></Feed>
      </div>
    </div>    
  );
}

export default App;
