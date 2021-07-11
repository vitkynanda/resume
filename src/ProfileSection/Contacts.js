import React from "react";
import styled from "styled-components";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import MailIcon from "@material-ui/icons/Mail";

export default function Contacts() {
  return (
    <Container>
      <Wrapper>
        <LocationOnIcon />
        <Text>Babelan, Bekasi Utara - Indonesia</Text>
      </Wrapper>
      <Wrapper>
        <MailIcon />
        <Text>vitkynptr@gmail.com</Text>
      </Wrapper>
      <Wrapper>
        <PhoneIcon />
        <Text>(+62) 815 1354 9414</Text>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  .MuiSvgIcon-root {
    font-size: 22px;
    margin-right: 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Text = styled.p`
  line-height: 1.5;
`;
