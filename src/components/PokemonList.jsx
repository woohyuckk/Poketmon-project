import styled from "styled-components";
import MOCK_DATA from "../utils/mokdata";
import PokemonCard from "./PokemonCard";

const StyledPokemonList = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-gap: 10px;
    padding: 10px;

    background-color : lightgray ;
    border: 3px solid #7f9b7c;
    border-radius: 12px;
    box-shadow: 0 0 10px #444;
    margin: 10px;
`;

const PokemonList = () => {
  return (
    <StyledPokemonList>
          {MOCK_DATA.map((data) => (
          <PokemonCard key ={data.id} data={data}></PokemonCard>

      ))}
    </StyledPokemonList>
  );
};

export default PokemonList;
