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

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSplitter>
      <LeftFrame>
        <CompanyName>CRYPTOHUB</CompanyName>
        <Description>{t('hero.desc')}</Description>
        <Calculator />
      </LeftFrame>
      <RightFrame>
        <Background src={HomeBg} />
        <Coin src={Bitcoin} />
      </RightFrame>
    </HeroSplitter>
  );
};

export default Hero;
