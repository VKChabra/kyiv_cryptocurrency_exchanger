import styled from '@emotion/styled';

export const Form = styled.form`
  dasplay: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  width: 800px;
  height: 400px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  input {
    width: 600px;
    height: 200px;
    margin-bottom: 40px;
    padding: 8px 16px;
    border: 1px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background-color: transparent;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 473px;
  height: 80px;
  padding: 9px 41px;
  background: #ffffff;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 32px;
  background: rgb(254, 149, 5);
  background: linear-gradient(
    28deg,
    rgba(254, 149, 5, 0.43461134453781514) 0%,
    rgba(62, 69, 195, 1) 45%,
    rgba(255, 255, 255, 0.32718837535014) 100%
  );
`;

export const Title = styled.h4`
  margin-bottom: 31px;
  color: ${({ theme }) => theme.colors.primary};
  font-family: Phudu;
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 64px;
`;

export const Text = styled.p`
  margin-bottom: 60px;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 48px;
`;
