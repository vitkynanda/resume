import React from "react";
import styled from "styled-components";

export default function Skills() {
  return (
    <Container>
      <Title>SKILLS</Title>
      <Wrapper>
        <TitleSkill>Web Development</TitleSkill>
        <SkillItem>
          Basics : <span>CSS 3, HTML 5, JS</span>
        </SkillItem>
        <SkillItem>
          Framework : <span>Bootstrap, Tailwind CSS, React JS, Express JS</span>
        </SkillItem>
        <SkillItem>
          Database : <span>MySQL, MongoDB</span>
        </SkillItem>
        <SkillItem>
          Backend : <span>Node JS, Firebase</span>
        </SkillItem>
      </Wrapper>
      <Wrapper>
        <TitleSkill>Design Grafis</TitleSkill>
        <SkillItem>
          <span>Adobe XD, Adobe Illustrator, Canva</span>
        </SkillItem>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
  p {
    font-size: 14px;
  }
  span {
    color: gray;
    font-weight: 600;
    font-size: 14px;
  }
`;

const Wrapper = styled.div`
  text-align: left;
`;

const SkillItem = styled.p`
  line-height: 1.5;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
  margin-bottom: 0;
`;
const TitleSkill = styled.h3`
  font-size: 17px;
  letter-spacing: 1.5px;
`;
