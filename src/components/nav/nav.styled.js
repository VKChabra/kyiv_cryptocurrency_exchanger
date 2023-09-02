import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.div`
  display: flex;
  align-items: center;
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

export const Text = styled.span``;

export const TextWrapper = styled.div`
  padding: 12px 24px;
  border: 2px solid #fff;
`;
