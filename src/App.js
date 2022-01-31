import React, { useState } from 'react';
import { QUIZZES } from 'constants';
import { ThemeProvider } from 'styled-components';
import theme from 'theme';
import Container from 'components/Container/index';
import AnswerSection from 'components/AnswerSection/index';
import QuestionSection from './components/QuestionSection/index';
import ResultSection from './components/ResultSection/index';

const App = () => {
  const [current, setCurrent] = useState(0);
  const [result, setResult] = useState(false);
  const [score, setScore] = useState(0);
  
  const onClickAnswer = isCorrect => {
    if (isCorrect) {
      setScore(score => score + 1);
    };
    
    if (current === QUIZZES.length - 1) {
      setResult(true);
    } else {
      setCurrent(current => current + 1);
    }
  };

  const lastScore = Math.floor((score / QUIZZES.length) * 100);

  return (
    <ThemeProvider theme={theme}>
      {result ? (
        <Container>
          <ResultSection lastScore={lastScore} />
        </Container>
      ) : (
        <Container>
          <QuestionSection current={current} />
          <AnswerSection current={current} onClickAnswer={onClickAnswer} />
        </Container>
      )}
    </ThemeProvider>
  );
};

export default App;