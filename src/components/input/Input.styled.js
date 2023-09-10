import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Input = styled(TextField)`
  background-color: ${({ theme }) => theme.colors.body};
  label {
    color: ${({ theme }) => theme.colors.primary};
  }
  input {
    color: ${({ theme }) => theme.colors.primary};
  }
  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
  p {
    color: ${({ theme }) => theme.colors.primary};
  }
  input:-internal-autofill-selected {
    background-color: transparent;
    color: ${({ theme }) => theme.colors.primary};
  }
  &.MuiOutlinedInput-root:hover {
    fieldset {
      border: 0;
    }
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
