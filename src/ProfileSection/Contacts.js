import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";
import { IconButton } from "@material-ui/core";

export default function Contacts() {
  return (
    <Container>
      <Wrapper>
        <IconButton>
          <LocationOnIcon />
        </IconButton>
        <Text>Babelan, Bekasi Utara - Indonesia</Text>
      </Wrapper>
      <Wrapper>
        <IconButton>
          <MailIcon />
        </IconButton>
        <Text>vitkynptr@gmail.com</Text>
      </Wrapper>
      <Wrapper>
        <IconButton>
          <PhoneIcon />
        </IconButton>
        <Text>(+62) 815 1354 9414</Text>
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

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  line-height: 1.5;
`;
