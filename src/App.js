import React, { useState } from "react";
import styled from "styled-components/macro";
import Profile from "./ProfileSection";
import InfoSection from "./InfoSection";
import Navbar from "./Controller/Navbar";
import Sidebar from "./Controller/Sidebar";
import BackToTop from "./Controller/BackToTop";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <Container>
      <Profile />
      <InfoSection />
      <BackToTop />
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  padding: 20px 50px;
  grid-template-columns: 30% 70%;
  background-color: var(--container-color);
  @media (max-width: 768px) {
    padding: 0;
    grid-template-columns: 1fr;
  }
`;
