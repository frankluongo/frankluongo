import styled from 'styled-components';

import { above } from '../utilities/Breakpoints';
import { space } from '../utilities/Variables';
import { type } from '../utilities/Typography';

export const Heading1 = styled.h1`
  margin: 0;
  padding-bottom: ${space('xsmall')};

  ${type.primaryHeader};

  font-size: 2rem;

  ${above.small`
    font-size: 3rem;
  `}
`;

export const Heading2 = styled.h2`
  margin: 0;
  padding-bottom: ${space('xsmall')};

  ${type.secondaryHeader};

  font-size: 1.4rem;
  font-style: italic;

  ${above.small`
    font-size: 1.8rem;
  `}
`;
