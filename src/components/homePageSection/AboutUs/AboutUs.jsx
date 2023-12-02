import Advantages from './Advantages/Advantages';
// import Aside from './Aside/Aside';
import { Wrapper, AboutUsContainer, Title, SubTitle } from './AboutUs.styled';
import { useTranslation } from 'react-i18next';
// import useMediaQueries from 'components/hooks/useMediaQueries';

const AboutUs = () => {
  const { t } = useTranslation();
  // const { isMobile } = useMediaQueries();

  return (
    <AboutUsContainer>
      <Title>{t('about.title')}</Title>
      <SubTitle>{t('about.subTitle')}</SubTitle>
      <Wrapper>
        {/* {!isMobile && <Aside />} */}
        <Advantages />
      </Wrapper>
    </AboutUsContainer>
  );
};

export default AboutUs;
