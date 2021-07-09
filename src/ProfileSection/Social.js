import React from "react";
import styled from "styled-components";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { IconButton } from "@material-ui/core";

export default function Social() {
  return (
    <Container>
      <Title>SOCIAL</Title>
      <Wrapper>
        <IconButton>
          <InstagramIcon />
        </IconButton>
        <Text>@vitkynanda_p</Text>
      </Wrapper>
      <Wrapper>
        <IconButton>
          <FacebookIcon />
        </IconButton>
        <Text>@vitkynandaputra</Text>
      </Wrapper>
      <Wrapper>
        <IconButton>
          <LinkedInIcon />
        </IconButton>
        <Text>@vitkynanda</Text>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  margin: 10px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 13px;
`;

const Text = styled.p``;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h3`
  margin-left: 15px;
  letter-spacing: 1.5px;
`;
