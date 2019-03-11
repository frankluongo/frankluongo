import styled from 'styled-components';

import { above } from '../utilities/Breakpoints';
import { space } from '../utilities/Variables';
import { type } from '../utilities/Typography';

export const Heading1 = styled.h1`
  margin: 0;
  ${props => {
    if (props.paddingBottom) {
      return `padding-bottom: ${space(props.paddingBottom)}`;
    }}
  };

  ${type.primaryHeader};

  font-size: 2rem;

  ${above.small`
    font-size: 3rem;
  `}
`;

// * H2
// ? ------------------------------------------------------

export const Heading2 = styled.h2`
  margin: 0;
  ${props => {
    if (props.paddingBottom) {
      return `padding-bottom: ${space(props.paddingBottom)}`;
    }}
  };

  ${type.secondaryHeader};

  font-size: 1.2rem;
  font-style: italic;

  ${above.small`
    font-size: 1.4rem;
  `}
`;
