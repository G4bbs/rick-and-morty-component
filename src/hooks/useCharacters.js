import { useState } from 'react';
import API from '../utils/API';

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  async function getCharacters(page = 1) {
    setLoading(true);
    try {
      const response = await API.get(`character?page=${page}`);
      if (response.data) {
        setCharacters(response.data.results);
      }
    } catch (error) {
      console.error("Erro ao buscar personagens:", error);
    } finally {
      setLoading(false);
    }
  }

  return { characters, loading, getCharacters };
}

export default useCharacters;