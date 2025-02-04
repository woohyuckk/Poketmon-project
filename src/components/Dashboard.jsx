import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  border: 3px solid #7f9b7c;
  border-radius: 12px;
  box-shadow: 0 0 10px #444;
  margin: 10px;
`;

const StyledMypokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
  flex-wrap: wrap;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const Dashboard = ({pokemonList, myPokemon, setMyPokemon }) => {
  const removeMyPokemon = (pokemonId) => {
    setMyPokemon((prev) => {
      const deletePokemon = prev.filter((pokemon) => pokemon.id !== pokemonId);
      return deletePokemon;
    });
  };
  return (
    <StyledDashboard>
      <h1>나만의 포켓몬</h1>
      <StyledMypokemonContainer>
        {myPokemon.map((data) => (
          <PokemonCard
            key={data.id}
            data={data}
            myPokemonHandler={removeMyPokemon}
            pokemonList={pokemonList}
            statusButton = "삭제"
            
          ></PokemonCard>
        ))}
      </StyledMypokemonContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
