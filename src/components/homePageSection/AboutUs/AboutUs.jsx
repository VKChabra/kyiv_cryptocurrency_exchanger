import Advantages from './Advantages/Advantages';
import Aside from './Aside/Aside';
import { Wrapper, AboutUsContainer, Title, SubTitle } from './AboutUs.styled';
import { useTranslation } from 'react-i18next';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <AboutUsContainer>
      <Title>{t('about.title')}</Title>
      <SubTitle>{t('about.subTitle')}</SubTitle>
      <Wrapper>
        <Aside />
        <Advantages />
      </Wrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
