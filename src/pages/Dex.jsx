import { useState } from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../utils/mokdata";

const Dex = () => {
  const [myPokemon, setMyPokemon] = useState([]);
  return (
    <div>
      <Dashboard myPokemon={myPokemon} setMyPokemon={setMyPokemon}></Dashboard>
      <PokemonList pokemonList={MOCK_DATA} myPokemon={myPokemon} setMyPokemon={setMyPokemon} />
    </div>
  );
};

export default Dex;
