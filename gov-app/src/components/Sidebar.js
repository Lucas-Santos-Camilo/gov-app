// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="br-menu" id="main-navigation">
      {/* Estrutura HTML do menu lateral */}
      <nav>
        <ul>
          <li><Link to="/">Acesso</Link></li>
          <li><Link to="/registro">Registro</Link></li>
          {/* Condicionalmente mostre o Painel e Encerrar Sessão após autenticação */}
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
