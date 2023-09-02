import styled from '@emotion/styled';

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form``;

export const Wrap = styled.div`
  margin-bottom: 30px;
`;

export const Label = styled.label``;

export const Input = styled.input`
  color: inherit;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.body};
  text-align: right;
  width: 300px;
  padding: 22px 14px;
  margin-right: 30px;
  font-weight: 700;
  outline: none;
`;

export const Dropdown = styled.select`
  cursor: pointer;
  color: inherit;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.body};
  padding: 22px 14px;
  outline: none;
  font-family: Roboto;
  font-weight: 700;
`;
