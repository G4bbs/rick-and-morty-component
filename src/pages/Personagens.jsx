import { useEffect } from "react";
import useCharacters from "../hooks/useCharacters";
import "./Personagens.css";

// Funções para traduzir status e espécies
function traduzStatus(status) {
  switch (status) {
    case "Alive":
      return "Vivo";
    case "Dead":
      return "Morto";
    case "unknown":
      return "Desconhecido";
    default:
      return status;
  }
}

function traduzEspecie(species) {
  const mapa = {
    Human: "Humano",
    Alien: "Alienígena",
    Robot: "Robô",
    Humanoid: "Humanoide",
    unknown: "Desconhecido"
  };
  return mapa[species] || species;
}

function Personagens() {
  const { characters, loading, getCharacters } = useCharacters();

  useEffect(() => {
    getCharacters(); // Carregar página 1 ao montar
  }, []);

  return (
    <div className="container">
      <h1>Personagens de Rick and Morty</h1>

      {loading && <p>Carregando...</p>}

      <div className="grid">
        {characters.map((char) => (
          <div className="card" key={char.id}>
            <img src={char.image} alt={char.name} />
            <h2>{char.name}</h2>
            <p><strong>Status:</strong> {traduzStatus(char.status)}</p>
            <p><strong>Espécie:</strong> {traduzEspecie(char.species)}</p>
            <p><strong>Origem:</strong> {char.origin.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Personagens;