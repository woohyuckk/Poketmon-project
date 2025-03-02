import styled from "styled-components";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";
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

const Dashboard = () => {
  const myPokemon = useSelector((state) => state.myPokemon.myPokemon);
  const { removePokemon } = useMypokemon();

  // myPokemon이 변경 될 때마다 localStorage에 저장
  useEffect(() => {
    localStorage.setItem("myPokemon", JSON.stringify(myPokemon));
  }, [myPokemon]);

  const pokemonSlot = Array.from({ length: MAX_POKEMON }, (_, i) => {
    // i번째 슬롯에 선택된 포켓몬이 있다면 포켓몬 카드 컴포넌트를 렌더링
    if (i < myPokemon.length) {
      const data = myPokemon[i];
      return (
        <PokemonCard
          key={data.id}
          data={data}
          myPokemonHandler={removePokemon}
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
            "https://private-user-images.githubusercontent.com/192562150/411798104-d8733f5a-870d-4b20-ab12-393c3c94d20f.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MzkzMzA1NDcsIm5iZiI6MTczOTMzMDI0NywicGF0aCI6Ii8xOTI1NjIxNTAvNDExNzk4MTA0LWQ4NzMzZjVhLTg3MGQtNGIyMC1hYjEyLTM5M2MzYzk0ZDIwZi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMjEyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDIxMlQwMzE3MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT0wZGFjOGE4M2YyNTM0NWEzNGNiM2M4MmFlYWQyYTBkNTkyZTY2NjdlYzlhZGM5NjBlZjVmZDU3ODM4OTFmNWNhJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.x2y_dd8OuwYVuOMFZTnrDL9E_acSYtIpYMiyNxm5v68"
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
