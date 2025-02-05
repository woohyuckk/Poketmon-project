import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../utils/mokdata";

const Dex = () => {
  return (
    <>
      <Dashboard pokemonList={MOCK_DATA}></Dashboard>
      <PokemonList pokemonList={MOCK_DATA} />
    </>
  );
};

export default Dex;
