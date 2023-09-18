import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import mediaBp from 'styles/breakpoints';

export const DropdownMenu = styled.div`
  justify-content: center;
  position: relative;
  color: ${({ footer, theme }) => (footer ? '#fff' : theme.colors.primary)};
  padding-right: 15px;
  display: flex;
  flex-direction: column;
  ${mediaBp('desktop')} {
    flex-direction: row;
  }
`;

export const InfoBtn = styled.div`
  display: flex;
  cursor: pointer;
  width: max-content;
`;

export const InfoText = styled.span`
  padding-right: 20px;
`;

export const InfoImg = styled.img``;

export const LinkList = styled.ul`
  position: absolute;
  padding: 10px;
  margin-top: 40px;
  border: 1px solid #ccc;
  list-style: none;
  background-color: ${({ theme }) => theme.colors.body};
  z-index: 3;
`;

export const Link = styled(NavLink)`
  width: fit-content;
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
