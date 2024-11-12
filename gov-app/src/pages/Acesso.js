// src/pages/Acesso.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../api';
import '../pages/Style.css';

function Acesso() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState(null);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const data = await login(email, senha);
      localStorage.setItem('user', JSON.stringify(data)); // Salva o usuário no localStorage
      navigate('/painel');
    } catch (error) {
      setErro(error.message || 'Erro ao fazer login');
    }
  };

  return (
    <div>
      <h2>Acesso</h2>
      <form onSubmit={handleLogin}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Acessar</button>
      </form>
      {erro && <div className="error-message">{erro}</div>}
    </div>
  );
}

export default Acesso;
