import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import palette from '../../lib/styles/palette';
import media from '../../lib/styles/media';
import { ellipsis } from '../../lib/styles/utils';
import { Logo } from '@/static/svg';
import { ffMLogo } from '@/static/images';

export interface HeaderLogoProps {}
const HeaderLogoBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: ${palette.gray8};
  font-size: 1.3125rem;
  text-decoration: none;
  font-family: Fira Mono, monospace;
  img {
    display: block;
    height: 4rem;
    width: 4rem;
    box-shadow: 0px 0 8px rgba(0, 0, 0, 0.085);
    object-fit: cover;
    transition: 0.125s all ease-in;
  }
  ${media.medium} {
    font-size: 1.125rem;
    .ffm-logo {
      height: 1.25rem;
    }
  }

  a {
    display: flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
  }
`;
const HeaderLogo: React.FC<HeaderLogoProps> = props => {
  return (
    <HeaderLogoBlock>
      <Link to="/">
        {/* <ffMLogo className="ffm-logo" /> */}
        <img src={ffMLogo} className="ffm-logo" alt="ffm-logo" />
      </Link>
    </HeaderLogoBlock>
  );
};

export default HeaderLogo;
