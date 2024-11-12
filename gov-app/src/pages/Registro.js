// src/pages/Registro.js
import React, { useState } from 'react';
import { register } from '../api';
import './Style.css';

function Registro() {
  const [email, setEmail] = useState('');
  const [dtNascimento, setDtNascimento] = useState('');
  const [senha, setSenha] = useState('');
  const [mensagem, setMensagem] = useState(null);
  const [erro, setErro] = useState(null);

  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      const data = await register(email, dtNascimento, senha);
      setMensagem(data.message || 'Registro realizado com sucesso');
      setErro(null);
    } catch (error) {
      setErro(error.message || 'Erro ao registrar');
    }
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <label>Data de Nascimento:</label>
        <input type="date" value={dtNascimento} onChange={(e) => setDtNascimento(e.target.value)} required />
        <label>Senha:</label>
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} required />
        <button type="submit">Registrar</button>
      </form>
      {mensagem && <div className="success-message">{mensagem}</div>}
      {erro && <div className="error-message">{erro}</div>}
    </div>
  );
}

export default Registro;
