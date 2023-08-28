import styled from '@emotion/styled';

export const HeaderBar = styled.div`
  display: flex;
  margin: 0 auto;
  text-align: center;
  align-items: center;
  padding-left: 20px;
  padding-top: 16px;
  width: 320px;
  height: 68px;
  text-align: center;
  @media (max-width: 1279px) and (min-width: 768px) {
    width: 768px;
    padding-left: 32px;
    padding-top: 20px;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;
