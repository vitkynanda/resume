import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

export default function Social() {
  return (
    <Container>
      <Title>SOCIAL</Title>
      <Wrapper>
        <InstagramIcon />
        <Text>@vitkynanda_p</Text>
      </Wrapper>
      <Wrapper>
        <FacebookIcon />
        <Text>@vitkynandaputra</Text>
      </Wrapper>
      <Wrapper>
        <LinkedInIcon />
        <Text>@vitkynanda</Text>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
  .MuiSvgIcon-root {
    font-size: 22px;
    margin-right: 10px;
  }
`;

const Text = styled.p`
  font-size: 14px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
  margin-bottom: 0;
`;
