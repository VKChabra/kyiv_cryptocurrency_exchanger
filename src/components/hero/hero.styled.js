import styled from '@emotion/styled';
import mediaBp from 'styles/breakpoints';

export const Wrap = styled.div`
  color: ${({ theme }) => theme.colors.primary};
`;

export const HeroFrame = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding-top: 60px;
  padding-bottom: 10px;
  overflow: hidden;
  ${'' /* border-bottom: 2px solid ${({ theme }) => theme.colors.primary}; */}
  ${mediaBp('tablet')} {
    padding-bottom: 60px;
  }
  ${mediaBp('desktop')} {
    padding-bottom: 100px;
  }
  ${mediaBp('huge')} {
    padding-bottom: 100px;
  }
`;

export const CompanyName = styled.h1`
  font-size: 32px;
  font-weight: 400;
  line-height: 100%;
  margin-bottom: 10px;
  ${mediaBp('tablet')} {
    font-size: 40px;
  }
  ${mediaBp('desktop')} {
    font-size: 84px;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 60px;
  }
  ${mediaBp('huge')} {
    font-size: 84px;
    font-weight: 400;
    line-height: 100%;
    margin-bottom: 60px;
  }
`;

export const Description = styled.h2`
  font-size: 24px;
  font-style: normal;
  font-weight: 300;
  line-height: 100%;
  max-width: 70%;
  margin-bottom: 20px;
  ${mediaBp('desktop')} {
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
    max-width: 750px;
    margin-bottom: 60px;
  }
  ${mediaBp('huge')} {
    font-size: 36px;
    font-style: normal;
    font-weight: 300;
    line-height: 100%;
    max-width: 750px;
    margin-bottom: 60px;
  }
`;

export const ImageWrapper = styled.div`
  display: none;
  position: absolute;
  left: ${props => props.left}%;
  bottom: ${props => props.bottom}%;
  right: ${props => props.right}%;
  top: ${props => props.top}%;

  border: 2px solid #fff;
  border-radius: 20px;
  transform: rotate(${props => props.rotation}deg);
  filter: grayscale(1);
  mix-blend-mode: luminosity;
  ${mediaBp('tablet')} {
    display: block;
    height: 75%;
    width: 25%;
  }
  ${mediaBp('desktop')} {
    display: block;
    height: 70%;
    width: 30%;
    max-width: 430px;
  }
  ${mediaBp('huge')} {
    display: block;
    height: 70%;
    width: 30%;
    max-width: 430px;
  }
`;

const baseImageStyles = `
  border-radius: 20px;
  height: 100%;
  width: 100%;
`;

export const LHeroImage = styled.img`
  ${baseImageStyles}
  transform: rotate(-10deg);
`;

export const RHeroImage = styled.img`
  ${baseImageStyles}
  transform: rotate(15deg);
`;
