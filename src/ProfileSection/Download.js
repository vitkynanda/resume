import React from "react";
import styled from "styled-components";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import { IconButton } from "@material-ui/core";

export default function Download() {
  return (
    <Container>
      <a href="https://raw.github.com/vitkynanda/resume/main/public/download.pdf">
        <IconButton>
          <GetAppRoundedIcon />
        </IconButton>
      </a>
    </Container>
  );
}

const Container = styled.div``;
