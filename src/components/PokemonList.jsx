import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import useMypokemon from "../hooks/useMyPokemon";
import { useSelector } from "react-redux";

const StyledPokemonList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap: 10px;
  padding: 10px;

  background-color: #f0f8e8;
  border: 3px solid #7f9b7c;
  border-radius: 12px;
  box-shadow: 0 0 10px #444;
  margin: 10px;
`;

const PokemonList = ({ pokemonList }) => {
  const { addPokemon } = useMypokemon();
  const { myPokemon } = useSelector((state) => state.myPokemon)
 
  let buttonLabel = myPokemon.length === 6 ? "❌초과" : "추가"
  
  return (
    <StyledPokemonList>
      {pokemonList.map((data) => (
        <PokemonCard
          key={data.id}
          data={data}
          myPokemonHandler={addPokemon}
          statusButton={buttonLabel}
        ></PokemonCard>
      ))}
    </StyledPokemonList>
  );
};

export default PokemonList;
