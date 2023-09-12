import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavFooter = styled.div`
  margin-left: 45px;
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
  margin-right: 20px;
`;

export const Text = styled.span`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const TextWrapper = styled.div`
  margin-right: 170px;
  position: relative;
`;

export const InfoList = styled.ul`
  position: absolute;
  margin-top: 40px;
  list-style: none;
  background-color: transparent;
  z-index: 4;
`;

export const InfoItem = styled.li`
  width: fit-content;
  margin-bottom: 30px;
  font-size: 16px;
  letter-spacing: 0;
  white-space: nowrap;
  &:last-child {
    padding-bottom: 0;
  }
`;

export const InfoText = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
`;

export const SocialList = styled.ul`
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 280px;
  margin-top: 40px;
  list-style: none;
  background-color: transparent;
  z-index: 4;
`;

export const SocialItem = styled.li`
  margin-right: 30px;
`;
