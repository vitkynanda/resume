import React from "react";
import styled from "styled-components/macro";
import CloseIcon from "@material-ui/icons/Close";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import DomainIcon from "@material-ui/icons/Domain";
import CodeIcon from "@material-ui/icons/Code";
import TranslateIcon from "@material-ui/icons/Translate";
import CardMembershipIcon from "@material-ui/icons/CardMembership";
import HeadsetIcon from "@material-ui/icons/Headset";
import LaunchIcon from "@material-ui/icons/Launch";
import { Link as LinkS } from "react-scroll";
import { IconButton } from "@material-ui/core";

export default function Sidebar({ isOpen, toggle }) {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarMenu>
          <SidebarLink
            to="home"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-30}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <HomeIcon />
            </IconButton>
            <p>Home</p>
          </SidebarLink>
          <SidebarLink
            to="profile"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <PersonIcon />
            </IconButton>
            <p>Profile</p>
          </SidebarLink>
          <SidebarLink
            to="education"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <SchoolIcon />
            </IconButton>
            <p>Education</p>
          </SidebarLink>
          <SidebarLink
            to="experience"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <DomainIcon />
            </IconButton>
            <p>Experience</p>
          </SidebarLink>
          <SidebarLink
            to="certificate"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <CardMembershipIcon />
            </IconButton>
            <p>Certificate</p>
          </SidebarLink>
          <SidebarLink
            to="reference"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <LaunchIcon />
            </IconButton>
            <p>Reference</p>
          </SidebarLink>
          <SidebarLink
            to="project"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <CodeIcon />
            </IconButton>
            <p>Project</p>
          </SidebarLink>
          <SidebarLink
            to="language"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <TranslateIcon />
            </IconButton>
            <p>Language</p>
          </SidebarLink>
          <SidebarLink
            to="interest"
            spy={true}
            smooth={true}
            hashSpy={true}
            offset={-10}
            duration={1000}
            delay={500}
            isDynamic={true}
            onClick={toggle}
          >
            <IconButton>
              <HeadsetIcon />
            </IconButton>
            <p>Interest</p>
          </SidebarLink>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
}

const SidebarContainer = styled.div`
  display: grid;
  width: 100%;
  z-index: 999;
  position: fixed;
  right: 0;
  height: 400px;
  background: gray;
  align-items: center;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100" : "0")};
  bottom: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: transparent;
  font-size: 1.6rem;
  cursor: pointer;
  outline: none;
`;

const SidebarWrapper = styled.div`
  color: #fff;
  margin-top: 20px;
`;

const SidebarMenu = styled.div`
  display: grid;
  padding: 30px;
  grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
  justify-items: center;
  grid-gap: 30px;
`;

const SidebarLink = styled(LinkS)`
  display: flex;
  flex-direction: column;
  font-size: 1.1rem;
  align-items: center;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;
  &:hover {
    transition: 0.2s ease-in-out;
    color: gray;
  }
  .MuiSvgIcon-root {
    color: lightgray;
    font-size: 30px;
  }
  p {
    margin-top: -5px;
    font-size: 14px;
  }
`;
