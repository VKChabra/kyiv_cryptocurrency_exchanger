import styled from '@emotion/styled';

export const Form = styled.form`
  width: 900px;
  padding: 10px 40px;
  text-align: center;
  vertical-align: middle;
`;
export const Button = styled.button`
  padding: 11px 82px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: transparent;
  font-style: normal;
  font-weight: 700;
  &:hover {
    background-color: ${({ theme }) => theme.colors.body};
  }
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  width: 35%;
  height: 30px;
`;
export const BoxWrapper = styled.div`
  display: flex;
  padding: 5px;
  width: 100%;
`;
export const ButtonSubmit = styled.button`
  margin-top: 20px;
  padding: 11px 82px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  background: transparent;
  font-style: normal;
  font-weight: 700;
  &:hover {
    background-color: ${({ theme }) => theme.colors.body};
  }
`;
