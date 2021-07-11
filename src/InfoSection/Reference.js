import React from "react";
import styled from "styled-components/macro";

export default function Reference() {
  return (
    <Container>
      <Title>REFERENCES</Title>
      <RefWrapper>
        <Wrapper>
          <ReferenceTitle>
            The Complete 2021 Web Development Bootcamp
          </ReferenceTitle>
          <ReferenceName>
            Udemy by Dr. Angela Yu | <span>(May, 12th 2021)</span>
          </ReferenceName>
          <Description></Description>
        </Wrapper>
        <Wrapper>
          <ReferenceTitle>
            The Complete Javascript Course: From Zero to Hero
          </ReferenceTitle>
          <ReferenceName>
            Udemy by Jonas Schmedtmann |<span>(July, 9th 2021)</span>
          </ReferenceName>
          <Description></Description>
        </Wrapper>
      </RefWrapper>
    </Container>
  );
}

const Container = styled.div``;

const RefWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
  font-weight: 500;
`;

const ReferenceTitle = styled.p`
  letter-spacing: 1.2px;
  font-weight: 400;
  margin: 0;
  font-size: 13px;
  color: lightgray;
`;

const ReferenceName = styled.p`
  letter-spacing: 1.1px;
  font-weight: 500;
  font-size: 15px;
  margin: 5px 0 0 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;
