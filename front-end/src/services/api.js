import axios from 'axios';

// Configuração da instância Axios
const api = axios.create({
  baseURL: 'http://localhost:4000/graphql',
});

export const fetchHello = async () => {
  const query = `
    {
      hello
    }
  `;

  try {
    // Fazendo o POST para o endpoint GraphQL com a query
    const response = await api.post('', { query });
    
    // Retornando a resposta do GraphQL
    return response.data.data.hello;
  } catch (error) {
    console.error('Error fetching data', error);
  }
};
