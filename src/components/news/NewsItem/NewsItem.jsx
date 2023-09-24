import { Container, TitleWrap, Title, TextWrap, Text, BtnDateWrap, Btn } from './NewsItem.styled';
import { useTranslation } from 'react-i18next';

const NewsItem = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleWrap>
        <div>
          <Title>{data.title}</Title>
        </div>
      </TitleWrap>
      <div>
        <img src={data.photo} alt="article" width="160px" height="160px" />
      </div>
      <TextWrap>
        <Text>{data.news}</Text>
      </TextWrap>
      <BtnDateWrap>
        <div>
          <p>{data.createAt}</p>
        </div>
        <div>
          <Btn type="button">{t('news.button')}</Btn>
        </div>
      </BtnDateWrap>
    </Container>
  );
};

export default NewsItem;
