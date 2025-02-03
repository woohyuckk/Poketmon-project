import styled from "styled-components";

const StyledDashboard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: lightgray;
  border: 3px solid #7f9b7c;
  border-radius: 12px;
  box-shadow: 0 0 10px #444;
  margin: 10px;
`;

const Dashboard = () => {
  return (
    <StyledDashboard>
          <h1>나만의 포켓몬</h1>
          
    </StyledDashboard>
  );
};

export default Dashboard;
