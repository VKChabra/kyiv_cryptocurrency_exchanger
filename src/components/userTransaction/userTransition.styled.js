import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Content = styled.div`
  width: 800px;
  padding: 50px 20px;
  text-align: center;
`;
export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    color: ${({ theme }) => theme.colors.hovers};
  }
`;
export const Table = styled.table`
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  width: 600px;
  border-collapse: collapse;
`;

export const RowColored = styled.tr`
  &:nth-of-type {
    background-color: rgb(212, 224, 224);
  }
`;
export const TableHead = styled.th`
  background-color: rgb(103, 224, 224);
  width: 200px;
  padding: 10px;
  padding-left: 40px;
  border-left: 0.5px solid #c0c0c0;
  border-right: 0.5px solid #c0c0c0;
`;
export const TableCol = styled.td`
  width: 200px;
  padding: 10px;
  padding-left: 40px;
  border-left: 0.5px solid #c0c0c0;
  border-right: 0.5px solid #c0c0c0;
`;
