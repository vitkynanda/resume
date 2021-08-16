import React from "react";
import styled from "styled-components";

export default function TextDescription() {
  return (
    <Container>
      <Name>
        Vitky <span>Nanda</span>
      </Name>
      <Role>Web Developer</Role>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
  p {
    margin: 5px;
  }
`;

const Name = styled.p`
  font-size: 20px;
  font-weight: 400;
  span {
    font-weight: 600;
  }
`;

const Role = styled.p`
  font-size: 15px;
  font-weight: 600;
`;
