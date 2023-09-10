import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const DropdownMenu = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-right: 15px;
`;

export const InfoBtn = styled.div`
  display: flex;
  cursor: pointer;
`;

export const InfoText = styled.span`
  padding-right: 20px;
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 16px;
`;

export const InfoImg = styled.img``;

export const LinkList = styled.ul`
  position: absolute;
  padding: 10px;
  margin-top: 40px;
  // border: 1px solid #ccc;
  list-style: none;
  background-color: transparent;
  z-index: 3;
`;

export const Link = styled(NavLink)`
  width: fit-content;
  margin-bottom: 30px;
  font-size: 16px;
  letter-spacing: 0;
  white-space: nowrap;
  cursor: pointer;
  padding-bottom: 10px;
  &:last-child {
    padding-bottom: 0;
  }
  &.active {
    text-decoration: underline;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-family: Roboto;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 16px;
`;
