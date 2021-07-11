import React from "react";
import styled from "styled-components/macro";

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
        <Description>
          This course to learn about how to be web developer with the latest web
          techonlogy such as MongoDB, ExpressJS, React JS, Node JS aka MERN
          Stack.
        </Description>
      </Wrapper>
      <Wrapper>
        <CertificateTitle>
          The Complete Javascript Course: From Zero to Hero
        </CertificateTitle>
        <CertificateSubTitle>
          Udemy by Jonas Schmedtmann| <span>(July, 9th 2021)</span>
        </CertificateSubTitle>
        <Description>
          This course learn about basic Javacript language to the advance,
          include ES6 and some new features update in ES 6.
        </Description>

        <CertificateTitle>
          The Complete Javascript Course: From Zero to Hero
        </CertificateTitle>
        <CertificateSubTitle>
          Udemy by Jonas Schmedtmann | <span>(July, 9th 2021)</span>
        </CertificateSubTitle>
        <Description></Description>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
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
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;
