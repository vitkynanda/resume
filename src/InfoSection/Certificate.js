import React from "react";
import styled from "styled-components";

export default function Certificate() {
  return (
    <Container>
      <Title>CERTIFICATES</Title>
      <Wrapper>
        <CertificateTitle>
          The Complete 2021 Web Development Bootcamp
        </CertificateTitle>
        <CertificateSubTitle>
          Udemy by Dr. Angela Yu | <span>(May, 12th 2021)</span>
        </CertificateSubTitle>
        <Description></Description>
      </Wrapper>
      <Wrapper>
        <CertificateTitle>
          The Complete Javascript Course: From Zero to Hero
        </CertificateTitle>
        <CertificateSubTitle>
          Udemy by Jonas Schmedtmann| <span>(July, 9th 2021)</span>
        </CertificateSubTitle>
        <Description></Description>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px;
  padding: 0 30px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
  font-weight: 500;
`;

const CertificateTitle = styled.h4`
  letter-spacing: 1.2px;
  font-weight: 500;
  margin: 0;
`;

const CertificateSubTitle = styled.p`
  letter-spacing: 1.1px;
  font-weight: 400;
  font-size: 14px;
  margin: 5px 0 0 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;
