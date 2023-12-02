import {
  Text,
  TextWrapper,
  InfoList,
  InfoItem,
  InfoText,
  SocialList,
  SocialItem,
  SocialLink,
} from './FooterNav.styled';

import { useTranslation } from 'react-i18next';

import { FaTelegram, FaWhatsapp } from 'react-icons/fa';
// import instagram from 'images/footer/instagram.svg';
// import telegram from 'images/footer/telegram.svg';
// import twitter from 'images/footer/twitter.svg';
// import facebook from 'images/footer/facebook.svg';
import mail from 'images/footer/mail.svg';
import Line from 'images/nav/line.svg';
import { LineImg } from 'components/navigation/nav.styled';

export const FooterInfo = () => {
  const { t } = useTranslation();
  return (
    <>
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
      <LineImg src={Line} footer={'true'} />
      <TextWrapper>
        <Text>{t('footer.socialNetworks')}</Text>
        <SocialList>
          {/* <SocialItem>
            <img src={instagram} alt="instagram" width="30" height="30" />
          </SocialItem> */}
          <SocialItem>
            <SocialLink href="mailto:coincryptohub@gmail.com" rel="noopener noreferrer">
              <img src={mail} alt="email" width={40} height={40} />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink
              href="https://t.me/kcoincryptohub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram
                size={40}
                style={{
                  color: '#fff',
                }}
              />
            </SocialLink>
          </SocialItem>
          <SocialItem>
            <SocialLink
              href="https://api.whatsapp.com/send?phone=34633333333"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp
                size={40}
                style={{
                  color: '#28D146',
                }}
              />
            </SocialLink>
          </SocialItem>
          {/* <SocialItem>
            <img src={facebook} alt="facebook" />
          </SocialItem> */}
          {/* <SocialItem>
            <img src={twitter} alt="twitter" />
          </SocialItem> */}
        </SocialList>
      </TextWrapper>
    </>
  );
};
