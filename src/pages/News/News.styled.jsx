import styled from '@emotion/styled';

export const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  margin-bottom: 60px;
  padding: 60px 110px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    max-width: 768px;
    padding: 40px 60px;
  }
  @media (max-width: 575px) {
    max-width: 100%;
    padding: 20px 30px;
  }
  div {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;

export const TextWrap = styled.div`
  margin-bottom: 108px;

  @media (max-width: 768px) {
    margin-bottom: 54px;
  }
  @media (max-width: 575px) {
    margin-bottom: 24px;
  }
  h2 {
    margin-bottom: 30px;
    color: ${({ theme }) => theme.colors.primary};
    font-size: 64px;
    font-style: normal;
    font-weight: 400;
    line-height: 64px;
    @media (max-width: 768px) {
      margin-bottom: 15px;
      font-size: 32px;
      line-height: 32px;
    }
    @media (max-width: 575px) {
      text-align: center;
      margin-bottom: 12px;
      font-size: 24px;
      line-height: 24px;
    }
  }
  p {
    font-size: 32px;
    color: ${({ theme }) => theme.colors.primary};
    font-style: normal;
    font-weight: 300;
    line-height: 48px;
    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 24px;
    }
    @media (max-width: 575px) {
      font-size: 16px;
      line-height: 20px;
    }
  }
`;
