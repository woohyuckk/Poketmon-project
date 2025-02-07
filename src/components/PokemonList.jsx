import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import useMypokemon from "../hooks/useMyPokemon";

const StyledPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 10px;
  padding: 10px;

  background-color: #F0F8E8;
  border: 3px solid #7f9b7c;
  border-radius: 12px;
  box-shadow: 0 0 10px #444;
  margin: 10px;
`;

const PokemonList = ({ pokemonList }) => {

  const { addPokemon } = useMypokemon();
  return (
    <StyledPokemonList>
      {pokemonList.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          myPokemonHandler={addPokemon}
          statusButton="추가"
        ></PokemonCard>
      ))}
    </StyledPokemonList>
  );
};

export default PokemonList;
