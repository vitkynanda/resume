import React from "react";
import styled from "styled-components/macro";
export default function Projects() {
  return (
    <Container>
      <ProjectTitle>PROJECTS</ProjectTitle>
      <ProjTitle>
        If you want to see my projects, please follow link below, I put it on my
        github repo and my portofolio web.
      </ProjTitle>
      <ProjectWrapper>
        <ProjectItems>
          Github
          <span>
            <a href="https://github.com/vitkynanda">
              {" "}
              https://github.com/vitkynanda
            </a>
          </span>
        </ProjectItems>
        <ProjectItems>
          Vitky's Portofolio{" "}
          <span>
            <a href="https://github.com/vitkynanda"> https://github.com</a>
          </span>
        </ProjectItems>
      </ProjectWrapper>
    </Container>
  );
}

const Container = styled.div``;
const ProjectTitle = styled.h3`
  letter-spacing: 1.2px;
  font-weight: 500;
`;
const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
  grid-gap: 20px;
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 0;
  }
`;
const ProjectItems = styled.p`
  font-size: 16px;
  letter-spacing: 1.1.px;
  span {
    font-size: 13px;

    a {
      text-decoration: none;
      color: lightgray;
      cursor: pointer;
    }
  }
`;
const ProjTitle = styled.p`
  letter-spacing: 1.2px;
  font-weight: 400;
  margin: 0;
  font-size: 13px;
  color: lightgray;
`;
