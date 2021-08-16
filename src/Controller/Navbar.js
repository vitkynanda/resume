import React from "react";
import AppsIcon from "@material-ui/icons/Apps";
import styled from "styled-components/macro";
import { IconButton } from "@material-ui/core";
export default function Navbar({ toggle }) {
  return (
    <Container onClick={toggle}>
      <Wrapper>
        <p>Vitky</p>
        <IconButton>
          <AppsIcon />
        </IconButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  height: 50px;
  background: gray;
  display: none;
  width: 100%;
  padding: 0 20px 0 40px;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    background: white;
    bottom: 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 15px;
    color: gray;
    font-weight: 500;
    letter-spacing: 1.2px;
  }
`;
