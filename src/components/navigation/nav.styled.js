import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavLinkWrapper = styled.div`
  display: inherit;
  align-items: center;
  color: ${({ footer, theme }) => (footer ? '#fff' : theme.colors.primary)};
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
  padding-right: 15px;
`;
