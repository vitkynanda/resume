import React from "react";
import styled from "styled-components";

export default function Education() {
  return (
    <Container>
      <Title>EDUCATION</Title>
      <Wrapper>
        <ListSchool>
          <SchoolTitle>
            Bunda Mulia University <span> (2015 - 2019)</span>
          </SchoolTitle>
          <Description>Bachelor Degree in Informatics Engineering</Description>
        </ListSchool>
        <ListSchool>
          <SchoolTitle>
            Sint Joseph Vocational School <span> (2012 - 2015)</span>
          </SchoolTitle>
          <Description>Majoring Electrical Engineering</Description>
        </ListSchool>
        <ListSchool>
          <SchoolTitle>
            Sint Joseph Junior Highschool <span> (2009 - 2012)</span>
          </SchoolTitle>
          <Description></Description>
        </ListSchool>
        <ListSchool>
          <SchoolTitle>
            Sint Joseph Elemenatary School <span> (2005 - 2009)</span>
          </SchoolTitle>
          <Description></Description>
        </ListSchool>
      </Wrapper>
    </Container>
  );
}
const Container = styled.div`
  margin: 15px 0 0 15px;
  display: flex;
  flex-direction: column;
  align-items: left;
  font-size: 13px;
`;

const Wrapper = styled.ul`
  margin-top: 0;
  margin-left: -10px;
  margin-right: 15px;
`;

const ListSchool = styled.li``;

const SchoolTitle = styled.p`
  margin-left: 0;
  font-weight: 600;
  span {
    color: gray;
    font-size: 11px;
  }
`;
const Description = styled.p`
  margin-top: 5px;
  font-size: 12px;
  line-height: 21px;
`;

const Title = styled.h3`
  margin-left: 15px;
  letter-spacing: 1.5px;
`;
