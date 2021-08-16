import React from "react";
import styled from "styled-components";

export default function Education() {
  return (
    <Container id="education">
      <Title>EDUCATION</Title>
      <Wrapper>
        <ListSchool>
          <SchoolTitle>
            Universitas Bunda Mulia <span> (2015 - 2019)</span>
          </SchoolTitle>
          <Description>S1 Jurusan Teknik Informatika</Description>
        </ListSchool>
        <ListSchool>
          <SchoolTitle>
            SMK Sint Joseph Jakarta <span> (2012 - 2015)</span>
          </SchoolTitle>
          <Description>Jurusan Teknik Elektronika</Description>
        </ListSchool>
        <ListSchool>
          <SchoolTitle>
            SMP Sint Joseph Jakarta <span> (2009 - 2012)</span>
          </SchoolTitle>
          <Description></Description>
        </ListSchool>
        <ListSchool>
          <SchoolTitle>
            SD Sint Joseph Jakarta <span> (2005 - 2009)</span>
          </SchoolTitle>
          <Description></Description>
        </ListSchool>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
  }
`;

const Wrapper = styled.ul`
  margin-top: 0;
  margin-left: -23px;
`;

const ListSchool = styled.li``;

const SchoolTitle = styled.p`
  margin-left: 0;
  font-weight: 600;
  span {
    color: gray;
    font-size: 13px;
  }
`;
const Description = styled.p`
  margin-top: 5px;
  font-size: 14px;
  line-height: 21px;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
  margin-bottom: 0;
`;
