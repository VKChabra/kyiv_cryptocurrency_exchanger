import styled from '@emotion/styled';

export const Form = styled.form`
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: #30302;
  background-opacity: 0.2;
  margin-bottom: 10px;
  width: 950px;
`;
export const Button = styled.button`
  margin: 15px;
  color: #fff;
`;
export const Text = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin-right: 50px;
  width: 20%;
  height: 45px;
`;
export const BoxWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  width: 100%;
`;
