import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavHeader = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-top: 60px;
  text-align: center;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 44px;
  letter-spacing: 0.04em;
  align-items: center;
  @media (max-width: 1279px) and (min-width: 768px) {
    margin-top: 88px;
    font-size: 48px;
    line-height: 66px;
    align-items: center;
  }
  @media (min-width: 1280px) {
    font-size: 20px;
    line-height: 27px;
    display: flex;
    align-items: center;
    margin-top: 0;
  }
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 40px;
  cursor: pointer;
  &.active {
    text-decoration: underline;
  }

  @media (max-width: 1279px) and (min-width: 768px) {
  }
  @media (min-width: 1280px) {
    margin-left: 80px;
    margin-bottom: 0px;
  }
`;

export const Text = styled.span``;
