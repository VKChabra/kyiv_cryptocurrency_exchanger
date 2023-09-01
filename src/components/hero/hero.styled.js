import styled from '@emotion/styled';

export const HeroSplitter = styled.div`
  display: flex;
`;

export const LeftFrame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 67%;
  padding-left: 111px;
  padding-bottom: 74px;
  padding-top: 80px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const RightFrame = styled.div`
  position: relative;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  flex: 33%;
  border-left: 2px solid ${({ theme }) => theme.colors.primary};
`;

export const CompanyName = styled.h1`
  font-family: Phudu;
  font-size: 128px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 60px;
`;

export const Description = styled.h2`
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  max-width: 750px;
  margin-bottom: 60px;
`;

export const Background = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const Coin = styled.img`
  position: absolute;
  top: 15%;
  left: 10%;
  height: 50%;
`;
