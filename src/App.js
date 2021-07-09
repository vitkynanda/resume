import styled from "styled-components";
import Profile from "./ProfileSection";
import InfoSection from "./InfoSection";

function App() {
  return (
    <Container>
      <Profile />
      <InfoSection />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  width: 80%;
  margin: 20px auto;
  border: 1px #e8f6ef solid;
  background-color: var(--container-color);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
