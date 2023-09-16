import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Content = styled.div`
  width: 900px;
  padding: 150px 80px;
  text-align: center;
`;
export const Text = styled.p`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 10px;
`;
export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.hovers};
  }
`;
export const Box = styled.div`
  margin-top: 50px;
  padding: 0 80px;
  display: flex;
`;
