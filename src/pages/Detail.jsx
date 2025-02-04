import {  useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const Detail = () => {
  const StyledDetailCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    width: 50%;
    margin: 0 auto;
    height: 100vh;
  `;

  const StylePokemonName = styled.p`
    font-weight: bold;
  `;

  const [isBookmarked, setIsBookmarked] = useState(false);

  // page query data에서 id와 state 추출
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const { pokemonList } = location.state;
  const id = searchParams.get("id");
  // router
  const navigation = useNavigate();



  const pokemon = pokemonList.find((list) => list.id === Number(id));

  return pokemon ? (
    <StyledDetailCard>
      <img src={pokemon.img_url}></img>
      <p>No.{String(id).padStart(3, "0")}</p>
      <StylePokemonName>{pokemon.korean_name}</StylePokemonName>
      <p>{pokemon.types}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigation("/Dex")}>뒤로가기</button>
      <button onClick={() => addMyPokemon} />
    </StyledDetailCard>
  ) : (
    <div>선택하신 포켓몬이 없습니다.</div>
  );
};

export default Detail;
