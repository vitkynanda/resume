import React from "react";
import styled from "styled-components";

export default function ProfileDescription() {
  return (
    <Container>
      <Title>PROFILE</Title>
      <Text>
        I am good at website development and UI/UX design, I currently use
        latest technologies for web development such as React, Mongo, Express,
        Node, Figma, Adobe XD, Ilustrator etc.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  margin: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 13px;
`;
const Text = styled.p`
  margin: 0 15px;
  line-height: 1.5;
`;

const Title = styled.h3`
  margin-left: 15px;
  letter-spacing: 1.5px;
`;
