import styled from "styled-components";

import PokemonCard from "./PokemonCard";

import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

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

const PokemonList = ({ pokemonList }) => {
  const { addMyPokemon } = useContext(PokemonContext);

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
