import { Link } from "gatsby";
import React from "react";
import styled from 'styled-components';

import Logo from 'src/icons/logo';
import Menu from './menu';
import { Container, Wrapper } from 'src/Styles/elements/Container';
import { above } from 'src/Styles/utilities/Breakpoints';

const Header = ({ className }) => (
  <Wrapper className={className} >
    <HeaderContent>
      <Link to="/" style={{ textDecoration: `none` }} >
        <LogoWrapper>
          <Logo color="#00b2e5" />
        </LogoWrapper>
      </Link>
      <Menu />
    </HeaderContent>
  </Wrapper>
)

const HeaderContent = styled(Container)`
  display: flex;
  justify-content: stretch;
  align-items: center;
`;

const LogoWrapper = styled.div`
  svg {
    width: 32px;

    ${above.medium`
      width: 46px;
    `}
  }
`;

export default styled(Header)`
  z-index: 9;
  position: fixed;

  background-color: #fff;
  border-bottom: 1px solid #eee;
`;
