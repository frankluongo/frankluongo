import styled from 'styled-components';
import elevation from '../utilities/Elevation';
import { lighten } from 'polished';
import { applyStyleModifiers } from 'styled-components-modifiers';

const BUTTON_MODIFIERS = {
  sizeSmall: () => `font-size: 12px; padding: 5px 20px;`,
  sizeDefault: () => `padding: 15px 30px; font-size: 1.2rem;`,
  typeCancel: () => `color: white; background-color: tomato; border: 1px solid tomato;`,
  typeStandard: () => `color: #333;background-color: white;border: 1px solid #ccc;`
}

export const Button = styled.button`

  font-weight: bold;
  text-align: center;
  text-transform: uppercase;

  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  ${elevation[1]};

  &:hover {
    /* transform: scale(1.1); */
    ${elevation[2]};
    /* background-color: ${lighten(0.2, 'black')}; */
  }

  ${applyStyleModifiers(BUTTON_MODIFIERS)};
`;

// Old Way of making a Styled Component out of something
// const LinkButton = CancelButton.withComponent('a');
