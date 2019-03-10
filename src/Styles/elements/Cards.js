import styled from 'styled-components';
import { Button } from './Buttons';
import elevation from '../utilities/Elevation';

export const Card = styled.div`
  padding: 15px;

  background-color: #ffffff;
  border-radius: 6px;
  ${elevation[1]};
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    ${elevation[2]};
  }
`;

const CardButton = styled(Button)`
  display: block;
  width: 100%;
`;

Card.Button = CardButton;
