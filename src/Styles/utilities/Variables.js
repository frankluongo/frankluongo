import { css } from 'styled-components';



const SPACING_UNIT = 1;

export const spacing = {
  xxsmall: `${SPACING_UNIT/2}rem`,
  xsmall: `${SPACING_UNIT}rem`,
  small: `${SPACING_UNIT*2}rem`,
  medium: `${SPACING_UNIT*4}rem`,
  large: `${SPACING_UNIT*6}rem`,
  xlarge: `${SPACING_UNIT*8}rem`,
  xxlarge: `${SPACING_UNIT*10}rem`,
  xxxlarge: `${SPACING_UNIT*12}rem`
};

export const space = (amount) => {
  if (spacing[amount]) {
    return spacing[amount];
  } else {
    console.log('that\'s not a valid space!')
  }
}

// CSS Helper
// Useful for when you need to use a prop or variable value
// eslint-disable-next-line
const fixedTop = css`
  position: fixed;
  top: ${({ top }) => top + 'px'};
  left: 0;
`;

// This also works...
// const fixedTop2 = `
// position: fixed;
// top: 0;
// left: 0;
// `;
