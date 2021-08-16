import React from "react";
import styled from "styled-components/macro";

export default function Experience() {
  return (
    <Container id="experience">
      <Title>EXPERIENCE</Title>
      <Wrapper>
        <ExperienceTitle>Teknisi GPS Tracker</ExperienceTitle>
        <ExperienceSubTitle>
          PT. Menn Teknologi Indonesia | <span>(2015-2017)</span>
        </ExperienceSubTitle>
        <Description>
          Bertanggung jawab dalam melakukan instalasi perangkat GPS Tracker pada
          kendaraan, menjalaskan cara penggunaan perangkat, termasuk melakukan
          maintenance perangkat serta perbaikan jika terjadi masalah atau
          kerusakan pada perangkat.
        </Description>
      </Wrapper>
      <Wrapper>
        <ExperienceTitle>Supervisor Teknisi</ExperienceTitle>
        <ExperienceSubTitle>
          PT. Menn Teknologi Indonesia | <span>(2017-2019)</span>
        </ExperienceSubTitle>
        <Description>
          Bertanggung jawab dalam memimpin divisi teknisi. melakukan pembagian
          tugas dan jadwal kerja teknisi, membuat laporan pekerjaan teknisi,
          memberikan pelatihan teknis terkait perangkat maupun sistem gps baik
          untuk keperluan internal (teknisi) maupun eksternal (pengguna),
          menanggapi keluhan pengguna, mangasalisa dan mencari solusi untuk
          pengguna terkait masalah yang timbul pada perangkat dan sistem gps.
        </Description>
      </Wrapper>
      <Wrapper>
        <ExperienceTitle>Desain Grafis</ExperienceTitle>
        <ExperienceSubTitle>
          PT. Menn Teknologi Indonesia | <span>(2019-2020)</span>
        </ExperienceSubTitle>
        <Description>
          Bertanggung jawab membuat desain grafis untuk berbagai keperluan
          perusahaan seperti brosur, banner, iklan online dan lain-lain.
        </Description>
      </Wrapper>
      <Wrapper>
        <ExperienceTitle>Web Developer & IT Support</ExperienceTitle>
        <ExperienceSubTitle>
          PT. Menn Teknologi Indonesia | <span>(2020-2021)</span>
        </ExperienceSubTitle>
        <Description>
          Bertanggung jawab membangun website untuk kebutuhan internal dan
          eksternal perusahaan. Membuat manual penggunaan sistem dan melakukan
          update secara berkala. Berkolaborasi dengan developer sistem gps,
          bertugas untuk melakukan pengujian fitur baru sistem gps pada setiap
          update sistem dan melaporkan pada developer sistem ketika menemukan
          bug. Bertanggung jawab dalam melakukan perawatan perangkat IT
          perusahaan, termasuk pengadaan dan perbaikan, Membangun jaringan dan
          melakukan perawatan termasuk troubleshooting.
        </Description>
        <ExperienceTitle>Project Manager IT Helpdesk</ExperienceTitle>
        <ExperienceSubTitle>
          Project Vaksinasi RS Bunda Jakarta | <span>(2021)</span>
        </ExperienceSubTitle>
        <Description>
          Bertanggung jawab memimpin tim IT perusahaan dalam project vaksinasi
          RS Bunda Jakarta. Bertugas untuk mengatur jadwal pekerjaan tim IT,
          Berkoordinasi dengan tim IT RS untuk mengakomodasi segala kebutuhan
          terkait perangkat IT di setiap site vaksin, menjaga uptime perangkat
          agar selalu siap digunakan 100%.
        </Description>
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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h3`
  letter-spacing: 1.5px;
  font-weight: 500;
`;

const ExperienceTitle = styled.h4`
  letter-spacing: 1.2px;
  font-weight: 500;
  margin: 0;
`;

const ExperienceSubTitle = styled.p`
  letter-spacing: 1.1px;
  font-weight: 400;
  font-size: 14px;
  margin: 0;
`;

const Description = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;
