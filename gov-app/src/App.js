// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Acesso from './pages/Acesso';
import Registro from './pages/Registro';
import Painel from './pages/Painel';

function App() {
  return (
    <Router>
      <Header />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Acesso />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/painel" element={<Painel />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
