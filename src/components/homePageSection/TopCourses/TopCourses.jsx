import { useTranslation } from 'react-i18next';
import { Title, Wrapper, SubTitle } from './TopCourses.styled';
// import topCoursBg from 'images/homePage/topCoursBg.svg';

import Button from 'layouts/Button';
import CryptoTable from './CryptoTable/CryptoTable';

const TopCourses = () => {
  const { t } = useTranslation();
  return (
    <Wrapper className="container">
      <Title>{t('courses.title')}</Title>
      <SubTitle>{t('courses.desc')}</SubTitle>
      <CryptoTable />
      <Button text="Load more" />
    </Wrapper>
  );
};

export default TopCourses;
