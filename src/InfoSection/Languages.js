import React from "react";
import styled from "styled-components/macro";
import FiberManualRecordTwoToneIcon from "@material-ui/icons/FiberManualRecordTwoTone";

export default function Language() {
  return (
    <Container>
      <LangTitle>LANGUAGES</LangTitle>
      <LangWrapper>
        <ItemsWrapper>
          <FiberManualRecordTwoToneIcon />
          <LangItems>English</LangItems>
        </ItemsWrapper>
        <ItemsWrapper>
          <FiberManualRecordTwoToneIcon />
          <LangItems>Indonesia</LangItems>
        </ItemsWrapper>
        {/* <ItemsWrapper>
          <FiberManualRecordTwoToneIcon />
          <LangItems>Japanese</LangItems>
        </ItemsWrapper> */}
      </LangWrapper>
    </Container>
  );
}

const Container = styled.div``;
const LangTitle = styled.h3`
  letter-spacing: 1.2px;
  font-weight: 500;
`;
const LangWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
`;
const LangItems = styled.p`
  font-size: 16px;
  letter-spacing: 1.1.px;
`;

const ItemsWrapper = styled.div`
  display: flex;
  font-size: 10px;
  align-items: center;

  .MuiSvgIcon-root {
    color: white;
    font-size: 16px;
    margin-right: 10px;
  }
`;
