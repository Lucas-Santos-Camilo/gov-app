// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav className="br-menu" id="main-navigation">
      <div className="menu-container">
        <ul>
          <li><Link to="/">Acesso</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          {/* Apenas exibir o Painel e Encerrar Sessão após autenticação */}
          <li><Link to="/painel">Painel</Link></li>
          <li><button onClick={() => console.log("Encerrar Sessão")}>Encerrar Sessão</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
