import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 200px 0px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Field = styled.label`
  display: block;
  input {
    max-width: 300px;
    outline: none;
    padding: 3px 5px;
  }

  & + & {
    margin-top: 30px;
  }
`;

export const SubmitBtn = styled.button`
  width: fit-content;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  padding: 10px;
`;
