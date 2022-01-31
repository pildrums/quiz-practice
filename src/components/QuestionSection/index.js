import React from 'react';
import styled from 'styled-components';
import { QUIZZES } from 'constants';

const QuestionSection = ({current}) => {
  return (
    <QuestionSectionWrapper>
      <QuestionHeader>
        <span>{QUIZZES[current].id}</span>/{QUIZZES.length}
      </QuestionHeader>
      <QuestionTitle>{QUIZZES[current].question}</QuestionTitle>
    </QuestionSectionWrapper>
  );
};

const QuestionSectionWrapper = styled.div`
  margin-bottom: 16px;
`;

const QuestionHeader = styled.h1`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const QuestionTitle = styled.div`
  font-size: 20px;
  margin-bottom: 8px;
`;

export default QuestionSection;