import React from "react";
import styled from "styled-components/macro";
import HeadsetTwoToneIcon from "@material-ui/icons/HeadsetTwoTone";
import CardTravelTwoToneIcon from "@material-ui/icons/CardTravelTwoTone";
import GamesTwoToneIcon from "@material-ui/icons/GamesTwoTone";
import CodeTwoToneIcon from "@material-ui/icons/CodeTwoTone";

export default function Interests() {
  return (
    <Container id="interest">
      <IntTitle>INTERESTS</IntTitle>
      <IntWrapper>
        <ItemsWrapper>
          <HeadsetTwoToneIcon />
          <IntItems>Music</IntItems>
        </ItemsWrapper>
        <ItemsWrapper>
          <CardTravelTwoToneIcon />
          <IntItems>Travel</IntItems>
        </ItemsWrapper>
        <ItemsWrapper>
          <GamesTwoToneIcon />
          <IntItems>Games</IntItems>
        </ItemsWrapper>
        <ItemsWrapper>
          <CodeTwoToneIcon />
          <IntItems>Code</IntItems>
        </ItemsWrapper>
      </IntWrapper>
    </Container>
  );
}

const Container = styled.div``;
const IntTitle = styled.h3`
  letter-spacing: 1.2px;
  font-weight: 500;
`;
const IntWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
`;
const IntItems = styled.p`
  font-size: 16px;
  margin: 10px 0;
  letter-spacing: 1.1.px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: left;
  .MuiSvgIcon-root {
    color: white;
    font-size: 22px;
  }
`;
