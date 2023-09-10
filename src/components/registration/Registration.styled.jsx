import styled from '@emotion/styled';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ posCentre }) => (posCentre ? '80px 0px' : '0')};
`;

export const Form = styled.form`
  color: ${({ theme }) => theme.colors.primary};
  button {
    display: block;
    margin: 0 auto;
    margin-top: 50px;
    padding: 5px 15px;
    border-radius: 10px;
  }
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
