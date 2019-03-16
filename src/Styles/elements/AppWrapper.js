import styled from 'styled-components';

import { space } from '../utilities/Variables';
import { above } from '../utilities/Breakpoints';
import { Button } from './Buttons';

export const AppWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  padding: ${space('small')};
  padding-top: 90px;

  ${above.small`
    padding: ${space('medium')};
    padding-top: 90px;
  `}

  ${Button} {
    margin-left: 20px;

    &:first-of-type {
      margin-left: 0;
    }
  }
`;
