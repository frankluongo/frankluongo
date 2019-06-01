import styled from 'styled-components';

import { above } from '../utilities/Breakpoints';
import { space } from '../utilities/Variables';
import { type } from '../utilities/Typography';

export const Small = styled.small`
  display: block;
  margin-top: ${space("xxsmall")};
  ${props => {
    if (props.paddingBottom) {
      return `padding-bottom: ${space(props.paddingBottom)}`;
    }}
  };

  ${type.secondaryHeader};

  font-size: 0.6em;
  font-weight: normal;
  line-height: 1.2;

  ${above.small`
    font-size: 0.3em;
  `}
`;
