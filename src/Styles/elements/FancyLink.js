import styled, { css } from 'styled-components';
import { Link } from "gatsby"

import { space } from '../utilities/Variables';
import { type } from '../utilities/Typography';
import { theme } from 'src/Styles/utilities/Colors';


const animatedUnderline = css`
  position: relative;

  ${type.primaryHeader};
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;

  &:before,
  &:after {
    content: '';

    position: absolute;
    top: 100%;

    height: 2px;
    width: 0;

    margin-top: -0.5px;

    background: ${theme.blue5};
    transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
  }

  &:before {
    background: transparent;
    left: 0;
  }

  &:after {
    right: 0;
  }

  &:hover:before,
  &:hover:after {
    width: 100%;
  }

  &:hover:before {
    background: ${theme.blue5};
  }

  &:hover:after {
    background: transparent;
  }
`;


export const FancyLink = styled(Link)`
  ${props => {
    if (props.paddingBottom) {
      return `padding-bottom: ${space(props.paddingBottom)}`;
    }}
  };
  ${animatedUnderline};
`;

export const FancyLinkTag = styled.a`
  position: relative;

  ${props => {
    if (props.paddingBottom) {
      return `padding-bottom: ${space(props.paddingBottom)}`;
    }}
  };

  ${animatedUnderline};
`;
