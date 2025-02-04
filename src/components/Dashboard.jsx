import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useContext } from "react";
import { PokemonContext } from "../context/PokemonContext";

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

const StyledPokeBall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width : 100px;
  height : 100px;
  padding : 10px;
  border: 3px dotted #befcc1;
  border-radius: 12px;
  background-color: white;
  transition: transform 0.3s ease-in-out;
`

const Dashboard = ({ pokemonList }) => {
  const { myPokemon, removeMyPokemon } = useContext(PokemonContext);
  const MAX_POKEMON = 6;
  const slots = Array.from({ length: MAX_POKEMON }, (_, i) => {
    // i번째 슬롯에 선택된 포켓몬이 있다면 포켓몬 카드 컴포넌트를 렌더링
    if (i < myPokemon.length) {
      const data = myPokemon[i];
      return (
        <PokemonCard
          key={data.id}
          data={data}
          myPokemonHandler={removeMyPokemon}
          pokemonList={pokemonList}
          statusButton="삭제"
        />
      );
    }
    // 아직 선택되지 않은 슬롯은 포켓볼 이미지로 표시
    return (
      <StyledPokeBall key = {Date.now()+i}>
      <img
        key={`pokeball-${i}`}
        src={"/src/assets/pokeball.png"}
        alt="Pokeball"
        />
        </StyledPokeBall>
    );
  });

  return (
    <StyledDashboard>
      <h1>나만의 포켓몬</h1>
      <StyledMypokemonContainer>{slots}</StyledMypokemonContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
