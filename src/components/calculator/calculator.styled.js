import styled from '@emotion/styled';
import { Select, MenuItem, FormControl, TextField } from '@mui/material';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Form = styled(FormControl)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Wrap = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Input = styled(TextField)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Dropdown = styled(Select)`
  color: ${({ theme }) => theme.colors.primary};
`;

export const Item = styled(MenuItem)`
  color: ${({ theme }) => theme.colors.primary};
`;
