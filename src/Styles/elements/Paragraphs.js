import styled from 'styled-components';

import { above } from '../utilities/Breakpoints';
import { space } from '../utilities/Variables';
import { type } from '../utilities/Typography';

export const Paragraph = styled.p`
  ${props => {
    if (props.paddingBottom) {
      return `padding-bottom: ${space(props.paddingBottom)}`;
    }}
  };

  & + & {
    margin-top: ${space("xsmall")}
  }

  ${type.bodyCopy};
  font-size: 1rem;
  line-height: 1.7;

  ${above.small`
    font-size: 1.2rem;
  `}
`;
