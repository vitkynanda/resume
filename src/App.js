import styled from "styled-components/macro";
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
  display: grid;
  grid-template-columns: 30% 70%;
  padding: 20px 70px;
  background-color: var(--container-color);
  @media (max-width: 768px) {
    padding: 0;
    grid-template-columns: 1fr;
  }
`;
