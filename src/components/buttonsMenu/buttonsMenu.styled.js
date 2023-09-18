import styled from '@emotion/styled';
import imageUrl from '../../images/background1.svg';
import { NavLink } from 'react-router-dom';

const setClassName = ({ name, theme }) => {
  switch (name) {
    case 'private':
      return theme.colors.body;
    case 'operation':
      return theme.colors.body;
    case 'feedback':
      return theme.colors.body;
    default:
      return;
  }
};

export const Link = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  padding-left: 20px;
  width: 304px;
  height: 60px;
  margin-top: 40px;
  border-right: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  transition: background-color border-color 500ms linear, transform 500ms ease-in-out;
  &:hover,
  &.active {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-right: transparent;
    background-color: ${setClassName};
    margin-right: -2px;
  }
`;
export const ProfileNav = styled.div`
  width: 390px;
  height: 100%;
  border-right: 2px solid ${({ theme }) => theme.colors.primary};
  display: flex;
  flex-wrap: wrap;
  background-size: cover;
  background-image: url('${imageUrl}');
`;
export const ButtonWrapper = styled.div`
  height: 400px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
`;

export const ExitButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 140px;
  height: 44px;
  margin: 140px 120px 40px 120px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: transparent;
  &:hover {
    background-color: ${({ theme }) => theme.colors.body};
  }
`;
export const Text = styled.p`
  margin-left: 10px;
`;
