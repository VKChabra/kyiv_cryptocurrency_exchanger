import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import mediaBp from 'styles/breakpoints';

export const Link = styled(NavLink)`
  cursor: pointer;
  display: contents;
`;

export const LogoImg = styled.img`
  ${mediaBp('huge')} {
    width: 10vw;
  }
`;
