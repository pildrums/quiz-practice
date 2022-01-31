import React from 'react';
import styled from 'styled-components';
import { QUIZZES } from 'constants';
import Button from 'components/Button/index';

const AnswerSection = ({current, onClickAnswer}) => {
  return (
    <AnswerSectionWrapper>
      {QUIZZES[current].answers.map((answer, index) => (
        <Button key={index} onClick={() => onClickAnswer(answer.isCorrect)} text={answer.text} />
      ))}
    </AnswerSectionWrapper>
  );
};

const AnswerSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8px;
`;

export default AnswerSection;