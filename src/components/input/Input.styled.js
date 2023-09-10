import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const Input = styled(TextField)`
  background-color: ${({ theme }) => theme.colors.body};
  label {
    color: ${({ theme }) => theme.colors.primary};
  }
  fieldset {
    border: 1px solid ${({ theme }) => theme.colors.primary};
    border-radius: 10px;
  }
  p {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
