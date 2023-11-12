import { useTranslation } from 'react-i18next';
import {
  Wrap,
  HeroFrame,
  CompanyName,
  Description,
  RHeroImage,
  LHeroImage,
  ImageWrapper,
} from './hero.styled';
import Calculator from 'components/calculator';
import LHero from 'images/hero/lhero.webp';
import RHero from 'images/hero/rhero.webp';
// import Payments from 'components/payments';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <Wrap>
      <HeroFrame>
        <ImageWrapper rotation={-10} left={-10} top={4}>
          <LHeroImage src={LHero} />
        </ImageWrapper>
        <ImageWrapper rotation={10} right={-10} bottom={-5}>
          <RHeroImage src={RHero} />
        </ImageWrapper>

        <CompanyName>CoinCryptoHub</CompanyName>
        <Description>{t('hero.desc')}</Description>
        <Calculator />
      </HeroFrame>
      {/* <Payments /> */}
    </Wrap>
  );
};

export default Hero;
