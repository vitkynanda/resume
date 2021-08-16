import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import styled from "styled-components";
import * as Scroll from "react-scroll";

export default function BackToTop() {
  const scroll = Scroll.animateScroll;
  const clickHandle = () => {
    scroll.scrollToTop();
  };
  return (
    <Container onClick={clickHandle}>
      <ArrowUpwardIcon />
    </Container>
  );
}

const Container = styled.div`
  display: none;
  width: 40px;
  height: 40px;
  text-align: center;
  background-color: white;
  @media (max-width: 768px) {
    display: block;
    position: fixed;
    bottom: 70px;
    right: 27px;
    border-radius: 50%;
  }
  .MuiSvgIcon-root {
    margin-top: 7px;
  }
`;
