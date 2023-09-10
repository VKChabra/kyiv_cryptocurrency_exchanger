import { Container, TitleWrap, Title, TextWrap, Text, BtnDateWrap, Btn } from './NewsItem.styled';
import { useTranslation } from 'react-i18next';

const NewsItem = ({ data }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <TitleWrap>
        {/* <div>
          <img src={data.photo} alt="article" width="60px" height="60px" />
        </div> */}
        <div>
          <Title>{data.title}</Title>
        </div>
      </TitleWrap>
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
