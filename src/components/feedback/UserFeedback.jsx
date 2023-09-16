import { Content, Text, Link, Box } from './userFeedback.styled';
import { useGetMyReviewQuery } from 'services/reviewsApi';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
  const { t } = useTranslation();
  const { data } = useGetMyReviewQuery();

  if (!data) {
    return (
      <Content>
        <Link to="/reviews">{t('userData.link')}</Link>
      </Content>
    );
  }
  const { review } = data;
  console.log(data);
  return (
    <Content>
      <Text>{t('userData.message1')}</Text>
      <Text>{review}</Text>
      <Box>
        <Text>{t('userData.message2')}</Text>
        <Link to="/reviews">{t('userData.link1')}</Link>
      </Box>
    </Content>
  );
};
export default Feedback;
