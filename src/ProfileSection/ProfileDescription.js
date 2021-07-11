import React from "react";
import styled from "styled-components";

export default function ProfileDescription() {
  return (
    <Container>
      <Title>PROFILE</Title>
      <Text>
        Hi, I am a freelance web developer passionate about creating and
        designing beautiful web interfaces developed in HTML CSS, JavaScript and
        any other framework such React Js, Bootstrap, Node Js, etc. It's a
        pleasure to have you here.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 0;
`;
const Text = styled.p`
  line-height: 1.6;
  font-size: 14px;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
`;
