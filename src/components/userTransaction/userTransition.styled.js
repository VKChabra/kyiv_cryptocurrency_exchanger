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
export const Pagination = styled(TablePagination)`
  background-color: ${({ theme }) => theme.colors.body};
  label,
  input,
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
