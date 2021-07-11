import React from "react";
import styled from "styled-components";
import GetAppRoundedIcon from "@material-ui/icons/GetAppRounded";
import { IconButton } from "@material-ui/core";

export default function Controller() {
  return (
    <Container>
      <IconButton>
        <GetAppRoundedIcon />
      </IconButton>
    </Container>
  );
}

const Container = styled.div``;
