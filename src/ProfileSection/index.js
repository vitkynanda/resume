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
  display: flex;
  flex: 0.25;
  flex-direction: column;
  padding: 10px;
  border-top-left-radius: 50px;
  border-bottom-left-radius: 50px;
  color: var(--text-color);
`;
