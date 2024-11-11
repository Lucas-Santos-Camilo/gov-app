// src/pages/Acesso.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Acesso() {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const senha = event.target.senha.value;

    try {
      const response = await axios.post('http://localhost:8000/api/acessar', { email, senha });
      // Autenticação fictícia
      if (response.data.auth) {
        navigate('/painel');
      } else {
        alert('Erro no login');
      }
    } catch (error) {
      console.error(error);
      alert('Erro ao acessar');
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label>Email:</label>
      <input type="email" name="email" required />
      <label>Senha:</label>
      <input type="password" name="senha" required />
      <button type="submit">Acessar</button>
    </form>
  );
}

export default Acesso;
