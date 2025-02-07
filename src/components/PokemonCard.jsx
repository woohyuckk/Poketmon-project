import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledPokemonCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  box-shadow: 0 0 5px rgba(255, 90, 90, 1);
  border-radius: 12px;
  background-color: white;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

const PokemonCard = ({
  data: { img_url, korean_name, id },
  myPokemonHandler,
  statusButton,
}) => {
  return (
    <StyledPokemonCard>
      <Link to={`/detail?id=${id}`}>
        <img src={img_url} />
        <h3>{korean_name}</h3>
        <p>No.{String(id).padStart(3, "0")}</p>
      </Link>
      <button onClick={() => myPokemonHandler(id)}>{statusButton}</button>
    </StyledPokemonCard>
  );
};

export default PokemonCard;
