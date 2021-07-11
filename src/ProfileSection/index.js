import React from "react";
import styled from "styled-components/macro";
import ProfileInfo from "./ProfileInfo";
import Controller from "./Controller";
import TextDescription from "./TextDescription";
import Contacts from "./Contacts";
import Social from "./Social";
import ProfileDescription from "./ProfileDescription";
import Education from "./Education";
import Skills from "./Skills";

export default function Profile() {
  return (
    <Container>
      <Controller />
      <ProfileInfo />
      <TextDescription />
      <Contacts />
      <Social />
      <ProfileDescription />
      <Education />
      <Skills />
    </Container>
  );
}
const Container = styled.div`
  padding: 20px 20px 20px 40px;
  color: var(--text-color);
  border-bottom-left-radius: 5px;
  border-top-left-radius: 5px;
  background-color: lightgray;

  @media (max-width: 768px) {
    padding: 40px;
    border-bottom-left-radius: 0;
    border-top-right-radius: 5px;
  }
`;
