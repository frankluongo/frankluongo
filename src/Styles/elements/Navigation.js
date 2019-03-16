import React from 'react';
import styled from 'styled-components';

const Navigation = ({ className }) => {
  return (
    <ul className={className}>
      <li>Item one</li>
      <li>Item Two</li>
    </ul>
  )
}

export default styled(Navigation)`
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    display: inline-block;
    margin-right: 10px;

    &:last-of-type {
      margin-right: 0;
    }
  }
`;
