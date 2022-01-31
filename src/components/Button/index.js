import React from 'react';
import styled from 'styled-components';

const Button = ({text, onClick}) => {
  return (
    <StyledButton onClick={onClick}>
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-size: 16px;
  color: #fff;
  background-color: ${props => props.theme.primaryColor100};
  border-radius: 5px;
  border: 0;
  height: 56px;
  padding: 4px;
  margin: 4px;
  cursor: pointer;
  width: 100%;
  outline: none;
  font-weight: 700;
  &:hover {
    background: ${props => props.theme.primaryColor80};
  }
`;

export default Button;