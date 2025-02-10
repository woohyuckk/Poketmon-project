import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import {  useSelector } from "react-redux";
import useMypokemon from "../hooks/useMyPokemon";
import { useEffect } from "react";
const MAX_POKEMON = 6;

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f8e8;
  border: 3px solid #7f9b7c;
  border-radius: 12px;
  box-shadow: 0 0 10px #444;
  margin: 10px;
`;

const StyledMypokemonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

const StyledPokeBall = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 180px;
  padding: 10px;
  border: 3px dotted rgba(255, 90, 90, 1);
  border-radius: 12px;
  background-color: white;
  transition: transform 0.3s ease-in-out;
`;

const Title = styled.h1`
  font-family: "Noto Sans KR", sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #333;
  text-align: center;
  padding: 1rem;
  margin: 1rem auto;
  border-radius: 8px;

  @media (max-width: 600px) {
    font-size: 2.5rem;
    padding: 0.75rem;
  }
`;


const Dashboard = ({ pokemonList }) => {
  const myPokemon = useSelector((state) => state.myPokemon.myPokemon);
  const { removePokemon } = useMypokemon();

  // myPokemon이 변경 될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
  },[myPokemon])

  const pokemonSlot = Array.from({ length: MAX_POKEMON }, (_, i) => {
    // i번째 슬롯에 선택된 포켓몬이 있다면 포켓몬 카드 컴포넌트를 렌더링
    if (i < myPokemon.length) {
      const data = myPokemon[i];
      return (
        <PokemonCard
          key={data.id}
          data={data}
          myPokemonHandler={removePokemon}
          pokemonList={pokemonList}
          statusButton="삭제"
        />
      );
    }
    // 아직 선택되지 않은 슬롯은 포켓볼 이미지로 표시
    return (
      <StyledPokeBall key={Date.now() + i}>
        <img
          key={`pokeball-${i}`}
          src={
            "https://github.com/woohyuckk/Poketmon-project/blob/main/src/assets/pokeball.png?raw=true"
          }
          alt="Pokeball"
        />
      </StyledPokeBall>
    );
  });

  return (
    <StyledDashboard>
      <Title>나만의 포켓몬 고르기</Title>
      <StyledMypokemonContainer>{pokemonSlot}</StyledMypokemonContainer>
    </StyledDashboard>
  );
};

export default Dashboard;
