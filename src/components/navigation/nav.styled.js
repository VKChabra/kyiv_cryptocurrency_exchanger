import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import mediaBp from 'styles/breakpoints';

export const NavLinkWrapper = styled.div`
  align-items: center;
  color: ${({ footer, theme }) => (footer ? '#fff' : theme.colors.primary)};
  display: flex;
  flex-direction: column;
  ${mediaBp('desktop')} {
    flex-direction: row;
  }
`;

export const Link = styled(NavLink)`
  width: fit-content;
  font-size: 16px;
  letter-spacing: 0;
  white-space: nowrap;
  cursor: pointer;
  padding-right: 15px;
  &:last-child {
    padding-right: 0;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const LineImg = styled.img`
  display: none;
  ${mediaBp('desktop')} {
    display: block;
  }
  padding-right: 15px;
`;
