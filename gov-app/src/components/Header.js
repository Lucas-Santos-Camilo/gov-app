// src/components/Header.js
import React from 'react';

function Header() {
  return (
    <header className="br-header mb-4" id="header">
      <div className="container-lg">
        <div className="header-top">
          <div className="header-logo">
            <img src="logo.png" alt="Logo do Governo" />
            <span className="br-divider vertical"></span>
            <div className="header-sign">Sistema de Autenticação</div>
          </div>
        </div>
        <div className="header-bottom">
          <div className="header-title">Sistema de Autenticação</div>
        </div>
      </div>
    </header>
  );
}

export default Header;
