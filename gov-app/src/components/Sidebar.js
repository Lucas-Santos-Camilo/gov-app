// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <nav className="br-menu" id="main-navigation">
      <div className="menu-container">
        <ul>
          <li className="menu-acesso"><Link to="/">Acesso</Link></li>
          <li className="menu-registro"><Link to="/registro">Registro</Link></li>          
          <li className="menu-painel"><Link to="/painel">Painel</Link></li>
          <li className="menu-encerrar"><button onClick={() => console.log("Encerrar Sessão")}>Encerrar Sessão</button></li>
        </ul>
      </div>
    </nav>
  );
}

export default Sidebar;
