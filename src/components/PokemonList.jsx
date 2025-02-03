import styled from "styled-components";

import PokemonCard from "./PokemonCard";

const StyledPokemonList = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    grid-gap: 10px;
    padding: 10px;

    background-color : lightgray ;
    border: 3px solid #7f9b7c;
    border-radius: 12px;
    box-shadow: 0 0 10px #444;
    margin: 10px;
`;

const PokemonList = ({ pokemonList, myPokemon,setMyPokemon }) => {
  
  const addMyPokemon = (pokemonId) => {

    const hasPokemon = myPokemon.some((pokemon) => pokemon.id === pokemonId)
    
    if (hasPokemon) {
      alert("이미 선택된 포켓몬입니다.")
      return
    }
    
    setMyPokemon((prev) => {
        const newMyPokemon = pokemonList.find((pokemon) => pokemon.id === pokemonId)
        
        return [...prev, newMyPokemon]
    })
  }
  

  return (
    <StyledPokemonList>
          {pokemonList.map((data) => (
              <PokemonCard key={data.id} data={data} pokemonList={pokemonList} myPokemonHandler={addMyPokemon}></PokemonCard>

      ))}
    </StyledPokemonList>
  );
};

export default PokemonList;
