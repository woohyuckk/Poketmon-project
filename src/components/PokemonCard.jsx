import styled from "styled-components";

const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 5px #befcc1;
  border-radius: 12px;
  background-color: white;
`;

const PokemonCard = ({
  data: { img_url, korean_name, id },
  myPokemonHandler,
}) => {
  return (
    <StyledPokemonCard>
      <img src={img_url} />
      <h3>{korean_name}</h3>
      <p>No.{String(id).padStart(3, "0")}</p>
      <button onClick={() => myPokemonHandler(id)}>추가</button>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
