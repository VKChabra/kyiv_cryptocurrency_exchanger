import { Container, Wrapper, Title, Image, Text } from './Faq.styled';
import Aside from 'images/partnership/Aside.svg';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();
  return (
    <Container>
      <Wrapper>
        <Title>{t('faq.title')}</Title>
        <Text>
          <strong>{t('faq.question1')}</strong>
          {t('faq.answer1')}
        </Text>
        <Text>
          <strong>{t('faq.question2')}</strong>
          {t('faq.answer2')}
        </Text>
        <Text>
          <strong>{t('faq.question3')}</strong>
          {t('faq.answer3')}
        </Text>
        <Text>
          <strong>{t('faq.question4')}</strong>
          {t('faq.answer4')}
        </Text>
        <Text>
          <strong>{t('faq.question5')}</strong>
          {t('faq.answer5')}
        </Text>
        <Text>
          <strong>{t('faq.question6')}</strong>
          {t('faq.answer6')}
        </Text>
      </Wrapper>
      <Image src={Aside} alt="faq" />
    </Container>
  );
};

export default Faq;
