import styled from "styled-components";

import PokemonCard from "./PokemonCard";
import { Slide, toast } from "react-toastify";

const StyledPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  grid-gap: 10px;
  padding: 10px;

  background-color: lightgray;
  border: 3px solid #7f9b7c;
  border-radius: 12px;
  box-shadow: 0 0 10px #444;
  margin: 10px;
`;
const toastOption = {
  position: "bottom-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "light",
  transition: Slide,
};

const PokemonList = ({ pokemonList, myPokemon, setMyPokemon }) => {
  const addMyPokemon = (pokemonId) => {
    const hasPokemon = myPokemon.some((pokemon) => pokemon.id === pokemonId);

    if (hasPokemon) {
      toast("🦄 이미 선택된 포켓몬입니다.", toastOption);
      return;
    }

    if (myPokemon.length === 6) {
      toast("❌ 포켓몬은 6마리까지 소유 가능합니다", toastOption);
      return;
    }

    setMyPokemon((prev) => {
      const newMyPokemon = pokemonList.find(
        (pokemon) => pokemon.id === pokemonId
      );

      return [...prev, newMyPokemon];
    });
  };

  return (
    <StyledPokemonList>
      {pokemonList.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          pokemonList={pokemonList}
          myPokemonHandler={addMyPokemon}
          statusButton="추가"
        ></PokemonCard>
      ))}
    </StyledPokemonList>
  );
};

export default PokemonList;
