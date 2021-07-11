import React from "react";
import styled from "styled-components";

export default function ProfileInfo() {
  return (
    <Container>
      <ProfileImage />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -20px;
`;

const ProfileImage = styled.div`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 10px;
  background-image: linear-gradient(black, black),
    url(https://akcdn.detik.net.id/community/media/visual/2021/06/10/lionel-messi-1_169.jpeg?w=700&q=90);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: saturation;
`;
