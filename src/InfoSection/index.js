import React from "react";
import styled from "styled-components";
import Experience from "./Experience";
import Certificate from "./Certificate";

export default function InfoSection() {
  return (
    <Container>
      <Experience />
      <Certificate />
    </Container>
  );
}

const Container = styled.div`
  flex: 0.75;
  background-color: gray;
  color: white;
`;
