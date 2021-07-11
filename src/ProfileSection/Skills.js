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
        <TitleSkill>UI/UX Design</TitleSkill>
        <SkillItem>
          <span>Figma, Adobe XD, Adobe Illustrator, Canva</span>
        </SkillItem>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  span {
    color: gray;
    font-weight: 600;
  }
  margin: 10px 0;
`;

const Wrapper = styled.div`
  text-align: left;
`;

const SkillItem = styled.p`
  line-height: 1.5;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
`;
const TitleSkill = styled.h3`
  font-size: 18px;
  letter-spacing: 1.5px;
`;
