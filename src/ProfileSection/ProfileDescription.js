import React from "react";
import styled from "styled-components";

export default function ProfileDescription() {
  return (
    <Container id="profile">
      <Title>PROFILE</Title>
      <Text>
        Saya saat ini bekerja sebagai frontend web developer, saya memiliki
        passion dalam membangun tampilan antarmuka website yang baik dan menarik
        dengan menggunakan HTML, CSS, JavaScript dan beberpa fremework seperti
        React JS, NodeJS Bootstarp dan lain-lain.
      </Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
`;

const Text = styled.p`
  line-height: 1.6;
  font-size: 14px;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
  margin-bottom: 0;
`;
