import React from 'react';
import styled, { css } from 'styled-components';
import { centeralItem } from './util';

const Dropdown = () => {
  return (
    <DropdownWrapper>
      {/*<label htmlFor='pet-select'>Choose a pet:</label>*/}

      <select name='pets' id='pet-select'>
        <option value='dog'>Add 1 for $60.00</option>
        <option value='cat'>Cat</option>
        <option value='hamster'>Hamster</option>
        <option value='parrot'>Parrot</option>
        <option value='spider'>Spider</option>
        <option value='goldfish'>Goldfish</option>
      </select>
      <DropdownIcon>A</DropdownIcon>
    </DropdownWrapper>
  );
};

const selectedBorderAndBackground = css`
  border-color: blue;
  background: lightgrey;
`;

const DropdownIcon = styled.div`
  margin-left: 1px;
  padding: 8.5px 15px;
  border: 1px solid black;
  border-radius: 0 10px 10px 0;
`;

const DropdownWrapper = styled.div`
  ${centeralItem};

  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    text-indent: 1px;
    text-overflow: '';

    padding: 10px 20px;
    border-radius: 10px 0 0 10px;
    &:focus-visible {
      border-radius: 10px 0 0 10px;
      outline: 0;
      ${selectedBorderAndBackground};

      & + div {
        ${selectedBorderAndBackground};
      }
    }
  }
`;

export default Dropdown;
