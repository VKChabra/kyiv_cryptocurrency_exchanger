import styled from '@emotion/styled';

export const HeroSplitter = styled.div`
  display: flex;
`;

export const LeftFrame = styled.div`
  display: flex;
  flex-direction: column;
  flex: 65%;
  max-width: 800px;
  padding-top: 105px;
`;

export const RightFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 35%;
`;

export const CompanyName = styled.h1`
  font-family: Phudu;
  font-size: 128px;
  font-weight: 400;
  line-height: 100%;
`;

export const Description = styled.h2`
  font-family: Roboto;
  font-size: 36px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
`;

export const Background = styled.img`
  position: absolute;
`;

export const Coin = styled.img`
  position: absolute;
  left: 5%;
  top: 20%;
`;
