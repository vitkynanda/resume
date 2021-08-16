import React from "react";
import styled from "styled-components/macro";

export default function Certificate() {
  return (
    <Container id="certificate">
      <Title>CERTIFICATES</Title>
      <Wrapper>
        <CertificateTitle>
          The Complete 2021 Web Development Bootcamp
        </CertificateTitle>
        <CertificateSubTitle>
          Kursus Udemy oleh Dr. Angela Yu | <span>(May, 12th 2021)</span>
        </CertificateSubTitle>
        <Description>
          Kursus terkait pengembangan website dengan teknologi modern yang
          banyak digunakan pada tahun 2021, seperti React JS, NodeJs, Express
          Js, MongoDB
        </Description>
        <CertificateTitle>
          The Complete Javascript Course: From Zero to Hero
        </CertificateTitle>
        <CertificateSubTitle>
          Kursus Udemy oleh Jonas Schmedtmann| <span>(July, 9th 2021)</span>
        </CertificateSubTitle>
        <Description>
          Kursus pembelajaran Javascript mulai dari dasar sampai ke tingkat
          advance, mencakup pembelajaran ES6 dan fitur fitur terbaru pada ES6.
        </Description>
        <CertificateTitle>
          Microservices with NodeJS and ReactJS
        </CertificateTitle>
        <CertificateSubTitle>
          Kursus Udemy oleh Stephen Grider | <span>(July, 9th 2021)</span>
        </CertificateSubTitle>
        <Description>
          Kursus membangun, menerapkan, dan menskalakan aplikasi E-Commerce
          menggunakan Microservices yang dibuat dengan Node, React, Docker, dan
          Kubernetes
        </Description>
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
