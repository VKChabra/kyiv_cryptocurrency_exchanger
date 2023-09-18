import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { TablePagination } from '@mui/material';
import { TableCell } from '@mui/material';
export const Content = styled.div`
  width: 800px;
  padding: 80px 80px;
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
  color: ${({ theme }) => theme.colors.primary};
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  width: 600px;
  border-collapse: collapse;
`;

export const RowColored = styled.tr`
  color: ${({ theme }) => theme.colors.primary};
  :nth-of-type(odd) {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 5px;
    box-shadow: 1px 1px 21px 2px rgba(17, 17, 17, 0.5) inset;
  }
`;
export const TableHead = styled.th`
  color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  padding: 10px;
  padding-left: 40px;
  border-left: 0.5px solid #c0c0c0;
  border-right: 0.5px solid #c0c0c0;
`;
export const TableCol = styled.td`
  color: ${({ theme }) => theme.colors.primary};
  width: 200px;
  padding: 10px;
  padding-left: 40px;
  border-left: 0.5px solid #c0c0c0;
  border-right: 0.5px solid #c0c0c0;
`;
export const Thead = styled.thead`
  background-color: #3e45c3;
  border-top: 2px solid #c0c0c0;
  border-bottom: 2px solid #c0c0c0;
`;
export const Pagination = styled(TablePagination)`
  background-color: ${({ theme }) => theme.colors.body};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  box-shadow: 1px 1px 21px 2px rgba(17, 17, 17, 0.5) inset;
  label {
    color: ${({ theme }) => theme.colors.primary};
  }
  input {
    color: ${({ theme }) => theme.colors.primary};
  }
  &.MuiTablePagination-root {
    color: ${({ theme }) => theme.colors.primary};
  }
  svg {
    fill: ${({ theme }) => theme.colors.primary};
  }
`;
export const Cell = styled(TableCell)`
  color: ${({ theme }) => theme.colors.primary};
`;
export const CellFirst = styled(TableCell)`
  color: ${({ theme }) => theme.colors.primary};
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  box-shadow: 1px 1px 21px 2px rgba(17, 17, 17, 0.5) inset;
`;
