import { useSelector, useDispatch } from "react-redux";
import {  useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { addMyPokemon, removeMyPokemon } from "../store/myPokemonSlice";
import pokemonList from"../utils/mokdata"

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

const StyledPokemonImg = styled.img`
width: 30%;
`

const Detail = () => {
  // URL에서 query parameters 가져오기
  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get("id"));

  // Redux Hooks 사용
  const myPokemon = useSelector((state) => state.myPokemon.myPokemon);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // 현재 포켓몬이 이미 내 포켓몬인지 확인
  const isMyPokemon = myPokemon.some((pokemon) => pokemon.id === id);
  const pokemon = pokemonList.find((list) => list.id === id);

  return pokemon ? (
    <StyledDetailCard>
      <StyledPokemonImg src={pokemon.img_url} alt={pokemon.korean_name} />
      <p>No.{String(id).padStart(3, "0")}</p>
      <StylePokemonName>{pokemon.korean_name}</StylePokemonName>
      <p>{pokemon.types.join(", ")}</p>
      <p>{pokemon.description}</p>
      <button onClick={() => navigate("/Dex")}>뒤로가기</button>
      {isMyPokemon ? (
        <button onClick={() => dispatch(removeMyPokemon(pokemon.id))}>삭제</button>
      ) : (
        <button onClick={() => dispatch(addMyPokemon(pokemon.id))}>추가</button>
      )}
    </StyledDetailCard>
  ) : (
    <div>선택하신 포켓몬이 없습니다.</div>
  );
};

export default Detail;
