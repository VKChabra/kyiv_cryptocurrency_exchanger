import {
  NavFooter,
  Link,
  Text,
  TextWrapper,
  LineImg,
  InfoList,
  InfoItem,
  InfoText,
  SocialList,
  SocialItem,
} from './FooterNav.styled';
import FooterInfo from './FooterInfo';
import Line from 'images/nav/line.svg';
import { useTranslation } from 'react-i18next';
import instagram from '../../images/footer/instagram.svg';
import telegram from '../../images/footer/telegram.svg';
import twitter from '../../images/footer/twitter.svg';
import facebook from '../../images/footer/facebook.svg';

const Nav = () => {
  const { t } = useTranslation();

  return (
    <NavFooter>
      <Link to="/partnership">
        <Text>{t('nav.partnership')}</Text>
      </Link>
      <LineImg src={Line} />
      <Link to="/news">
        <Text>{t('nav.news')}</Text>
      </Link>
      <LineImg src={Line} />
      <FooterInfo />
      <LineImg src={Line} />
      <TextWrapper>
        <Text>{t('footer.workingHours')}</Text>
        <InfoList>
          <InfoItem>
            <InfoText>{t('footer.serviceWork')}</InfoText>
          </InfoItem>
          <InfoItem>
            <InfoText>{t('footer.tecnicalSupport')}</InfoText>
          </InfoItem>
        </InfoList>
      </TextWrapper>
      <LineImg src={Line} />
      <TextWrapper>
        <Text>{t('footer.socialNetworks')}</Text>
        <SocialList>
          <SocialItem>
            <img src={instagram} alt="social media" width="30" height="30" />
          </SocialItem>
          <SocialItem>
            <img src={telegram} alt="social media" />
          </SocialItem>
          <SocialItem>
            <img src={facebook} alt="social media" />
          </SocialItem>
          <SocialItem>
            <img src={twitter} alt="social media" />
          </SocialItem>
        </SocialList>
      </TextWrapper>
      <LineImg src={Line} />
    </NavFooter>
  );
};

export default Nav;
