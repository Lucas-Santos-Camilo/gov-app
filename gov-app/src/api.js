// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8000/api', // Altere para a URL da API do back-end
});

export const login = async (email, senha) => {
  try {
    const response = await api.post('/acessar', { email, senha });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const register = async (email, dt_nascimento, senha) => {
  try {
    const response = await api.post('/registrar', { email, dt_nascimento, senha });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getUsuarios = async () => {
  try {
    const response = await api.get('/listagem-usuarios');
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export default api;
