import styled from 'styled-components';
import { space } from '../utilities/Variables';
import { above } from '../utilities/Breakpoints';

export const Container = styled.div`
  margin: 0 auto;

  max-width: 1170px;
  padding: 1rem;
`;

export const Wrapper = styled.div`
  padding: ${space("xxsmall")};
  width: 100%;

  background-color: ${props => props.backgroundColor || `#ffffff`};

  & + & {
    margin-top: ${space("small")};
  }

  ${above.small`
    padding: ${space("xsmall")};
  `}

  ${above.medium`
    padding: ${space("small")};
  `}
`;
