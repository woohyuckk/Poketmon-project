import styled from "styled-components";

const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgray;
  border-radius: 12px;
  box-shadow: 0 5 10px #d42e2e;
  background-color: white;
`;

const PokemonCard = ({ data: { img_url, korean_name, types } }) => {
  return (
    <StyledPokemonCard>
      <img src={img_url} />
      <h3>{korean_name}</h3>
      <p>타입 : {types}</p>
      <button>추가</button>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
