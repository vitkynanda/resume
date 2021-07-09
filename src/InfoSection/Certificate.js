import React from "react";
import styled from "styled-components";

export default function Certificate() {
  return (
    <Container>
      <Title>EXPERIENCE</Title>
      <Wrapper>
        <ExperienceTitle>GPS Tracker Technician</ExperienceTitle>
        <ExperienceSubTitle>
          PT. Menn Teknologi Indonesia | <span>(2015-2017)</span>
        </ExperienceSubTitle>
        <Description>
          Responsible for installing the device on the customer's vehicle and
          explaining how to use the device, including repair and troubleshoot
          the device problems.
        </Description>
      </Wrapper>
      <Wrapper>
        <ExperienceTitle>Technician supervisor</ExperienceTitle>
        <ExperienceSubTitle>
          PT. Menn Teknologi Indonesia | <span>(2017-2019)</span>
        </ExperienceSubTitle>
        <Description>
          Responsible for managing technician duties, coordinating with
          customers, making technician work reports, training technicians on
          system hardware and software.
        </Description>
      </Wrapper>
      <Wrapper>
        <ExperienceTitle>Graphic Design</ExperienceTitle>
        <ExperienceSubTitle>
          PT. Menn Teknologi Indonesia | <span>(2019-2020)</span>
        </ExperienceSubTitle>
        <Description>
          Responsible for creating product brochures and website design.
        </Description>
      </Wrapper>
      <Wrapper>
        <ExperienceTitle>Web Developer</ExperienceTitle>
        <ExperienceSubTitle>
          PT. Menn Teknologi Indonesia | <span>(2020-2021)</span>
        </ExperienceSubTitle>
        <Description>
          Responsible for Developing the website (full stack), including
          maintaining and troubleshooting bugs.
        </Description>
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

const ExperienceTitle = styled.h4`
  letter-spacing: 1.2px;
  font-weight: 500;
  margin: 0;
`;

const ExperienceSubTitle = styled.p`
  letter-spacing: 1.1px;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;
