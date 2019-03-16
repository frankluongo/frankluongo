import React from 'react'
import styled from 'styled-components';

import { Paragraph } from 'src/Styles/elements/Paragraphs';
import { Wrapper, Container } from 'src/Styles/elements/Container';
import { theme } from 'src/Styles/utilities/Colors';
import { space } from 'src/Styles/utilities/Variables';

import ContactLink from 'src/components/global/contactLink';

export default function Footer () {
  return (
    <FooterWrapper>
      <FooterContainer>
        <Paragraph><ContactLink /></Paragraph>
      </FooterContainer>
    </FooterWrapper>
  )
}

const FooterWrapper = styled(Wrapper)`
  margin-top: ${space("large")};
  border-top: 1px solid ${theme.gray2};
`;

const FooterContainer = styled(Container)`
  text-align: center;
`;
