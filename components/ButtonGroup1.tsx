import React, { useState } from 'react';
import styled from 'styled-components';

export interface ButtonGroup1Props {
  buttons: string[];
  doSomethingAfterClick: (buttonLabel: string) => void;
  defaultBackground?: string;
}

const ButtonGroup1: React.FC<ButtonGroup1Props> = ({
  buttons,
  doSomethingAfterClick,
  defaultBackground,
}) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (buttonLabel: string, id: number) => {
    setClickedId(id);
    doSomethingAfterClick(buttonLabel);
  };

  return (
    <ButtonGroup1Wrapper data-testid='button-group'>
      {buttons.map((buttonLabel, index) => (
        <Button
          key={index}
          name={buttonLabel}
          onClick={() => handleClick(buttonLabel, index)}
          active={index === clickedId}
          defaultBackground={defaultBackground}
        >
          {buttonLabel}
        </Button>
      ))}
    </ButtonGroup1Wrapper>
  );
};

const ButtonGroup1Wrapper = styled.div`
  display: inline-flex;
  & > :first-child {
    border-radius: 8px 0 0 8px;
  }
  & > :last-child {
    border-radius: 0 8px 8px 0;
  }
`;

const Button = styled.button<{ active?: boolean; defaultBackground?: string }>`
  /*
  Does this comment style complaining???
  */

  border: 0;
  //background-color: #6c757d;
  background-color: ${(props) =>
    !!props.defaultBackground ? props.defaultBackground : '#6c757d'};
  color: white;
  cursor: pointer;

  font-weight: 400;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;

  &:hover {
    background-color: #5a6268;
  }
  &:focus {
    box-shadow: 0 0 0 0.2rem rgb(130 138 145 / 50%);
    background-color: #5a6268;
  }
  &.active {
    background-color: #545b62;
  }
`;

export default ButtonGroup1;
