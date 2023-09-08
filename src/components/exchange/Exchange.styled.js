import styled from '@emotion/styled';
import { Checkbox } from '@mui/material';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  padding-top: 80px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const AcceptTermsLabel = styled.label`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const ExchangeCheckbox = styled(Checkbox)`
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 5px;
`;

export const SubmitButton = styled.button`
  padding: 10px 15px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
