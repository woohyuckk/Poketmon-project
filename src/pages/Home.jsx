import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #befcc1;
  height: 100vh;
`;

const StyledTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  img {
    width: 30vw;
    @media screen {
      width: 50vw;
    }
  }
`;

const Home = () => {
  return (
    <StyledHome>
      <Link to="/Dex">
        <StyledTitle>
          <img src="https://raw.githubusercontent.com/woohyuckk/Poketmon-project/0f55ed9284315a0a14a9b081d2a3bcd8209da0af/src/assets/International_Pok%C3%A9mon_logo.svg" />
          <button> Pokemon 도감 시작하기</button>
        </StyledTitle>
      </Link>
    </StyledHome>
  );
};

export default Home;
