import React from "react";
import styled from "styled-components/macro";
import Experience from "./Experience";
import Certificate from "./Certificates";
import Reference from "./Reference";
import Language from "./Languages";
import Interest from "./Interests";
import Projects from "./Projects";

export default function InfoSection() {
  return (
    <Container>
      <Experience />
      <Certificate />
      <Reference />
      <Projects />
      <Language />
      <Interest />
    </Container>
  );
}

const Container = styled.div`
  background-color: gray;
  color: white;
  padding: 20px 60px 20px 40px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;

  @media (max-width: 768px) {
    padding: 40px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 5px;
  }
`;
