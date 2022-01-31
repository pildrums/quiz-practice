import React from 'react';
import styled from 'styled-components';

const ResultSection = ({lastScore}) => {
  return (
    <>
      <ResultHeader>당신의 점수는?</ResultHeader>
      <ResultScore>{lastScore}</ResultScore>
    </>
  );
};

const ResultHeader = styled.h1`
  font-size: 64px;
  font-weight: 700;
  margin-bottom: 8px;
  text-align: center;
`;

const ResultScore = styled.p`
  font-size: 192px;
  margin: 40px;
  text-align: center;
  color: rgb(115, 98, 255);
`;

export default ResultSection;