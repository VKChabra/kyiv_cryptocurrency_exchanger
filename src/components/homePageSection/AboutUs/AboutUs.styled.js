import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
`;

export const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 120px;
`;

export const Title = styled.h2`
  font-famaly: Phudu;
  color: ${({ theme }) => theme.colors.primary};
  font-size: 64px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 64px */
  margin-bottom: 30px;
`;

export const SubTitle = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  font-family: Roboto;
  font-size: 32px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%; /* 32px */
  margin-bottom: 60px;
`;
