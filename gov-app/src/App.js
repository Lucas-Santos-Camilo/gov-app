// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Acesso from './pages/Acesso';
import Registro from './pages/Registro';
import Painel from './pages/Painel';

function App() {
  return (
    <Router>
      <Header />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Acesso />} />
            <Route path="/registro" element={<Registro />} />
            <Route path="/painel" element={<Painel />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
