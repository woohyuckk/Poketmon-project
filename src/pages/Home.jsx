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

const StyledTitle = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`

const Home = () => {
  return (
    <StyledHome>
      <Link to="/Dex">
        <StyledTitle>
          <img src="https://github.com/woohyuckk/Poketmon-project/blob/main/src/assets/International_Pok%C3%A9mon_logo.svg" />
          <button> Pokemon 도감 시작하기</button>
        </StyledTitle>
      </Link>
    </StyledHome>
  );
};

export default Home;
