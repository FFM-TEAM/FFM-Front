import React, { useRef, useCallback } from 'react';
import styled from 'styled-components';
import { SearchIcon2 } from '../../static/svg';
import HeaderUserIcon from './HeaderUserIcon';
import useToggle from '../../lib/hooks/useToggle';
import HeaderUserMenu from './HeaderUserMenu';
import media from '../../lib/styles/media';
import HeaderLogo from './HeaderLogo';
import HomeResponsive from '../home/HomeResponsive';
import RoundButton from '@/components/common/RoundButton';

export type MainHeaderProps = {};

function Header(props: MainHeaderProps) {
  const [userMenu, toggleUserMenu] = useToggle(false);
  const ref = useRef<HTMLDivElement>(null);

  const onOutsideClick = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      if (ref.current.contains(e.target as any)) return;
      toggleUserMenu();
    },
    [toggleUserMenu],
  );

  return (
    <Block>
      <Inner>
        <HeaderLogo />
        {true ? (
          <Right>
            <SearchIcon2 />
            <RoundButton
              border
              color="darkGray"
              style={{ marginRight: '1.25rem' }}
              to="/write"
              className="write-button"
            >
              새 글 작성
            </RoundButton>

            <div ref={ref}>
              <HeaderUserIcon onClick={toggleUserMenu} />
            </div>
            <HeaderUserMenu
              onClose={onOutsideClick}
              onLogout={() => {}}
              username={'songc'}
              visible={userMenu}
            />
          </Right>
        ) : (
          <Right>
            <SearchIcon2 />
            <RoundButton color="darkGray" onClick={() => {}}>
              로그인
            </RoundButton>
          </Right>
        )}
      </Inner>
    </Block>
  );
}

const Block = styled.div`
  height: 4rem;
`;

const Inner = styled(HomeResponsive)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  .write-button {
    ${media.medium} {
      display: none;
    }
  }
`;

export default Header;
