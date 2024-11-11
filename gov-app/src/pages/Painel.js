// src/pages/Painel.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsuarios } from '../api';

function Painel() {
  const navigate = useNavigate();
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/');
    } else {
      fetchUsuarios();
    }
  }, [navigate]); // 'navigate' adicionado como dependência

  const fetchUsuarios = async () => {
    try {
      const data = await getUsuarios();
      setUsuarios(data);
    } catch (error) {
      console.error('Erro ao carregar usuários', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div>
      <h2>Painel de Usuários</h2>
      <button onClick={handleLogout}>Encerrar Sessão</button>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Data de Nascimento</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.id}</td>
              <td>{usuario.email}</td>
              <td>{usuario.dt_nascimento}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Painel;
