import { useTranslation } from 'react-i18next';
import {
  HeroSplitter,
  LeftFrame,
  RightFrame,
  CompanyName,
  Description,
  Background,
  Coin,
} from './hero.styled';
import Calculator from 'components/calculator';
import HomeBg from 'images/background1.svg';
import Bitcoin from 'images/bitcoin.svg';
import Payments from 'components/payments';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeroSplitter>
        <LeftFrame>
          <CompanyName>CRYPTOHUB</CompanyName>
          <Description>{t('hero.desc')}</Description>
          <Calculator />
        </LeftFrame>
        <RightFrame>
          <Background src={HomeBg} alt="lines background" />
          <Coin src={Bitcoin} alt="bitcoin" />
        </RightFrame>
      </HeroSplitter>
      <Payments />
    </>
  );
};

export default Hero;
