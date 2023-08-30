import styled from '@emotion/styled';

export const Form = styled.form`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;

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
    width: 100%;
    max-width: 300px;
    outline: none;
    padding: 3px 5px;
  }

  & + & {
    margin-top: 30px;
  }
`;
