import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d0febd;
  height: 100vh;
`;

const Home = () => {
  return (
    <StyledHome>
      <Link to="/Dex">
        <img src="/src/assets/International_Pokémon_logo.svg" />
        <button> Pokemon 도감 시작하기</button>
      </Link>
    </StyledHome>
  );
};

export default Home;
