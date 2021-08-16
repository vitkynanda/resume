import React from "react";
import styled from "styled-components";

export default function ProfileInfo() {
  return (
    <Container id="home">
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
  background-image: linear-gradient(black, black), url("/images/myprofile.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-blend-mode: saturation;
`;
