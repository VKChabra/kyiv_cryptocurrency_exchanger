import { useTranslation } from 'react-i18next';
import { HeroSplitter, LeftFrame, CompanyName, Description } from './hero.styled';
import Calculator from 'components/calculator';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <HeroSplitter>
      <LeftFrame>
        <CompanyName>CRYPTOHUB</CompanyName>
        <Description>{t('hero.desc')}</Description>
        <Calculator />
      </LeftFrame>
    </HeroSplitter>
  );
};

export default Hero;
